import { useEffect, useState } from "react";

const SOLID_THRESHOLD = 24;

/**
 * Header começa transparente no topo da página e vira um "pill"
 * flutuante com fundo sólido/blur assim que a página rola um pouco.
 * `isSolid` começa em `false` (igual em servidor e no primeiro render
 * do client) e só muda depois do mount, evitando mismatch de
 * hidratação.
 */
const useHeaderScroll = () => {
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > SOLID_THRESHOLD);
    };

    handleScroll();

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { isSolid };
};

export default useHeaderScroll;
