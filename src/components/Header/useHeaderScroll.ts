import { useEffect, useState } from "react";

// distância de rolagem (em px) até o header terminar a transição pro
// "pill" sólido — quanto maior, mais gradual o efeito fica
const SCROLL_RANGE = 160;

/**
 * `progress` vai de 0 (topo da página, header transparente) a 1
 * (rolado, header vira o "pill" flutuante), variando continuamente
 * junto com o scroll em vez de alternar entre dois estados fixos —
 * é isso que faz a transição parecer suave e visível acontecendo,
 * em vez de um corte abrupto ao cruzar um limiar.
 *
 * Começa em 0 (igual em servidor e no primeiro render do client) e só
 * muda depois do mount, evitando mismatch de hidratação.
 */
const useHeaderScroll = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      setProgress(Math.min(window.scrollY / SCROLL_RANGE, 1));
    };

    updateProgress();

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateProgress();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { progress };
};

export default useHeaderScroll;
