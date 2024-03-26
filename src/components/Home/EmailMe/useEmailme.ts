import { useEffect, useState } from "react";

const useEmailMe = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [viewToast, setViewToast] = useState(false);
  const [email, setEmail] = useState("");

  const sendEmail = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    };

    fetch("/api/send", options)
      .then((data) => {
        setViewToast(true);
        return data.json();
      })
      .catch((err) => {
        console.error(err);
      });
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
    email,
    setEmail,
    sendEmail,
    showAnimation,
  };
};

export default useEmailMe;
