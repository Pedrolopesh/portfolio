import { useEffect, useState } from "react";

const useEmailMe = () => {
  const [viewToast, setViewToast] = useState(true);
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

  return {
    viewToast,
    setViewToast,
    email,
    setEmail,
    sendEmail,
  };
};

export default useEmailMe;
