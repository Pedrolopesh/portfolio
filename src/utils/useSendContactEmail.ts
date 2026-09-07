import { useEffect, useState } from "react";

/**
 * Lógica de envio do formulário de contato (endpoint + honeypot +
 * toast de sucesso/erro), compartilhada entre o EmailMe da Home e a
 * página de Contato — cada uma cuida só da própria apresentação
 * visual em cima disso.
 */
const useSendContactEmail = () => {
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
      const timeout = setTimeout(() => setViewToast(false), 8000);
      return () => clearTimeout(timeout);
    }
  }, [viewToast]);

  return {
    viewToast,
    setViewToast,
    toastHasError,
    email,
    setEmail,
    website,
    setWebsite,
    sendEmail,
  };
};

export default useSendContactEmail;
