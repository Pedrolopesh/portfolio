import { useCallback, type PointerEvent } from "react";

/**
 * Brilho suave que segue o cursor dentro de um card. Atualiza só duas
 * CSS vars (--mx/--my) — sem re-render do React. O visual fica na classe
 * `.spotlight` (src/styles/animations.css), que já ignora toque e
 * movimento reduzido.
 *
 *   const onPointerMove = useSpotlight();
 *   <div className="spotlight" onPointerMove={onPointerMove}>…</div>
 */
const useSpotlight = () =>
  useCallback((e: PointerEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, []);

export default useSpotlight;
