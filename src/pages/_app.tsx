import "../styles/globals.css";
import "../styles/animations.css";
import "../styles/fonts.css";

import type { AppProps } from "next/app";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../../public/lang/en/translation.json";
import pt from "../../public/lang/pt/translation.json";

// As traduções são importadas direto no bundle (em vez de buscadas via
// HTTP em runtime com i18next-http-backend) de propósito: um fetch
// assíncrono termina em momentos diferentes no servidor e no primeiro
// render do client, então dependendo do timing o texto que hidrata no
// client não bate com o que o servidor mandou — mismatch de
// hidratação (React error #418) em qualquer texto traduzido, mesmo
// com o idioma correto. Com os dois JSONs sempre disponíveis em
// memória, `t()` é síncrono e determinístico dos dois lados.
//
// Sem LanguageDetector: ele resolvia o idioma de forma síncrona no
// carregamento do módulo, a partir de localStorage/navigator — que só
// existem no client, causando o mesmo tipo de mismatch. `lng` fixo
// aqui garante que servidor e o primeiro render do client comecem
// exatamente iguais; a troca real de idioma acontece depois do mount,
// dentro de useLanguage (usado pelo Header), que faz sua própria
// detecção.
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pt: { translation: pt },
  },
  supportedLngs: ["en", "pt"],
  fallbackLng: "en",
  lng: "en",
  interpolation: { escapeValue: false },
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
