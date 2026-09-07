import { useEffect, useRef, useState } from "react";

/**
 * Substitui o padrão antigo de "escuta o scroll e compara com um
 * número mágico de pixels" (usado em vários componentes da Home) por
 * IntersectionObserver: o elemento revela quando entra na viewport,
 * não importa a altura de tudo que vem antes dele — não quebra toda
 * vez que uma seção acima muda de tamanho.
 */
const useRevealOnScroll = <T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = {}
) => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, isVisible };
};

export default useRevealOnScroll;
