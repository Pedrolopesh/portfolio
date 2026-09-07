import { useEffect, useState } from "react";

const useEmailMe = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [viewToast, setViewToast] = useState(false);
  const [toastHasError, setToastHasError] = useState(false);
  const [email, setEmail] = useState("");
  // honeypot: campo que só bots preenchem, fica escondido pro usuário real
  const [website, setWebsite] = useState("");

  const sendEmail = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, website }),
    };

    try {
      const response = await fetch("/api/send", options);
      setToastHasError(!response.ok);
      setViewToast(true);

      if (response.ok) {
        setEmail("");
      }
    } catch (err) {
      console.error(err);
      setToastHasError(true);
      setViewToast(true);
    }
  };

  useEffect(() => {
    if (viewToast) {
      setTimeout(() => {
        setViewToast(false);
      }, 8000);
    }
  }, [viewToast]);

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
    viewToast,
    setViewToast,
    toastHasError,
    email,
    setEmail,
    website,
    setWebsite,
    sendEmail,
    showAnimation,
  };
};

export default useEmailMe;
