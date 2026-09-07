import { useEffect, useState } from "react";
import useSendContactEmail from "../../../utils/useSendContactEmail";

const useEmailMe = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const contactEmail = useSendContactEmail();

  const handleScroll = () => {
    const scrollPos = window.scrollY;

    if (window.screen.width < 700) {
      if (scrollPos >= 4050) {
        setShowAnimation(true);
      }
    } else if (window.screen.width > 700 && window.screen.width < 1200) {
      if (scrollPos >= 4400) {
        setShowAnimation(true);
      }
    } else {
      if (scrollPos >= 2650) {
        setShowAnimation(true);
      }
    }
  };

  useEffect(() => {
    const handleScrollWithRAF = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScrollWithRAF);

    return () => {
      window.removeEventListener("scroll", handleScrollWithRAF);
    };
  }, []);

  return {
    ...contactEmail,
    showAnimation,
  };
};

export default useEmailMe;
