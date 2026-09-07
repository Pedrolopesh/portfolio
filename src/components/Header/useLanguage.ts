import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const STORAGE_KEY = "lang";

const applyHtmlLang = (lang: string) => {
  document.documentElement.lang = lang === "pt" ? "pt-br" : "en";
};

/**
 * Único lugar que decide o idioma da UI. `_app.tsx` inicializa o
 * i18next sempre em "en" (igual no servidor e no primeiro render do
 * client, pra não causar mismatch de hidratação) — esse hook roda só
 * no client, depois do mount, pra detectar e aplicar a preferência
 * real (localStorage > idioma do navegador).
 */
const useLanguage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const detected = saved ?? (navigator.language?.startsWith("pt") ? "pt" : "en");

    if (detected !== i18n.language) {
      i18n.changeLanguage(detected);
    }
    applyHtmlLang(detected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    applyHtmlLang(lang);
  };

  return { language: i18n.language, setLanguage };
};

export default useLanguage;
