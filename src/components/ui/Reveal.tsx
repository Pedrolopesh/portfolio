import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

/**
 * Revela o conteúdo com um fade + leve subida quando ele entra na tela
 * (padrão do site — ver .claude/skills/portfolio-standards).
 *
 * Seguro por padrão:
 *  - o HTML do servidor sai VISÍVEL; só esconde no navegador, e só o que
 *    ainda está abaixo da dobra (sem "piscar" o que já está na tela, e sem
 *    sumir conteúdo se o JS falhar);
 *  - `prefers-reduced-motion` → não anima nada;
 *  - `delay` (ms) permite escalonar itens de uma lista: delay={i * 60}.
 */
type Props = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  id?: string;
};

const Reveal = ({ children, as: Tag = "div", delay = 0, className = "", style, id }: Props) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // já visível na carga → não anima (evita piscar)
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    el.dataset.reveal = "hidden";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.reveal = "shown";
        io.disconnect();
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={className}
      style={{ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
