import { useEffect, useLayoutEffect, useRef, useState } from "react";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

type Props = {
  /** valor real no momento do snapshot */
  base: number;
  /** quando o snapshot foi tirado (ISO) */
  since: string;
  /** crescimento real médio por dia (estimativa a partir do histórico) */
  perDay: number;
  locale?: string;
};

/**
 * Contador "ao vivo" ancorado no valor real:
 *  - alvo(t) = base + perDay × dias desde o snapshot (sempre o real estimado);
 *  - entra contando de 0 até o alvo e depois pula a cada ~0,7–1,5s: quase
 *    sempre pra cima (+1…+37), às vezes um pouco pra baixo (−1…−9), sem
 *    ritmo fixo — mas preso numa faixa estreita em volta do alvo
 *    (−12…+420), então nunca se afasta do valor real;
 *  - servidor/sem JS mostram o valor do snapshot; movimento reduzido mostra
 *    o alvo estático.
 */
const LiveCounter = ({ base, since, perDay, locale = "pt-BR" }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(base);
  const [bump, setBump] = useState(0);
  const sinceMs = new Date(since).getTime();

  const target = () => Math.round(base + (perDay * (Date.now() - sinceMs)) / 86_400_000);

  useIsoLayoutEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) setShown(0);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let timer: ReturnType<typeof setTimeout>;

    // movimento reduzido: só mostra o alvo atual (estático), sem pulos
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      timer = setTimeout(() => setShown(target()), 0);
      return () => clearTimeout(timer);
    }
    let current = 0;

    const live = () => {
      const t = target();
      const up = Math.random() < 0.8;
      const step = up ? 1 + Math.floor(Math.random() * 37) : -(1 + Math.floor(Math.random() * 9));
      current = Math.min(t + 420, Math.max(t - 12, current + step));
      setShown(current);
      setBump((b) => b + 1);
      timer = setTimeout(live, 700 + Math.random() * 800);
    };

    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const goal = target();
      const start = performance.now();
      const ramp = (now: number) => {
        const k = Math.min(1, (now - start) / 1600);
        current = Math.round(goal * (1 - Math.pow(1 - k, 3)));
        setShown(current);
        if (k < 1) raf = requestAnimationFrame(ramp);
        else timer = setTimeout(live, 900);
      };
      raf = requestAnimationFrame(ramp);
    });
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [base, since, perDay]);

  return (
    <span ref={ref} aria-label={base.toLocaleString(locale)}>
      <span key={bump} aria-hidden="true" className="live-tick inline-block tabular-nums">
        {shown.toLocaleString(locale)}
      </span>
    </span>
  );
};

export default LiveCounter;
