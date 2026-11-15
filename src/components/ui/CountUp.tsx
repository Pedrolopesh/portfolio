import { useEffect, useLayoutEffect, useRef, useState } from "react";

// useLayoutEffect só existe no navegador; no servidor vira useEffect (no-op)
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Número que conta de 0 até `value` quando entra na tela (ease-out, ~1.4s).
 * O HTML do servidor já sai com o valor final (sem JS / leitores de tela
 * veem o número certo); com `prefers-reduced-motion` não anima.
 */
const CountUp = ({
  value,
  duration = 1400,
  locale = "pt-BR",
}: {
  value: number;
  duration?: number;
  locale?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  // zera antes da primeira pintura (sem "piscar" o valor final → 0)
  useIsoLayoutEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) setShown(0);
  }, [value]);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        setShown(Math.round(value * (1 - Math.pow(1 - t, 3))));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} aria-label={value.toLocaleString(locale)}>
      <span aria-hidden="true">{shown.toLocaleString(locale)}</span>
    </span>
  );
};

export default CountUp;
