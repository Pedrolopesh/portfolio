import { IoLanguageOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import i18next from "i18next";
import Style from "./style.module.css";

const ChangeLang = () => {
  const [visibleDropdown, setVisibleDropdown] = useState(false);

  const changeLangFunc = (newLang: string) => {
    i18next.changeLanguage(newLang);
    setVisibleDropdown(!visibleDropdown);
    document.documentElement.lang = newLang === "pt" ? "pt-br" : "en";
    localStorage.setItem("lang", newLang);
  };

  useEffect(() => {
    // sincronizando o idioma com localStorage/navigator (fontes
    // externas ao React) no mount — changeLangFunc dispara setState
    // como parte disso, de propósito.
    const savedLang = localStorage.getItem("lang");
    const language = navigator.language;

    if (savedLang) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      changeLangFunc(savedLang);
    } else if (language) {
      changeLangFunc(language === "pt-BR" ? "pt" : "en");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <button
        className={`${Style.ButtonChangeLang}`}
        onClick={() => {
          setVisibleDropdown(!visibleDropdown);
        }}
      >
        <IoLanguageOutline />
      </button>
      <div
        className={`${
          visibleDropdown ? Style.hideDropdown : Style.showDropdown
        } ${Style.DropDownContainer}`}
      >
        <span
          className={Style.DropDownOption}
          onClick={() => {
            changeLangFunc("pt");
          }}
          style={{ display: "block" }}
        >
          Português
        </span>
        <span
          className={Style.DropDownOption}
          onClick={() => {
            changeLangFunc("en");
          }}
          style={{ display: "block" }}
        >
          Inglês
        </span>
      </div>
    </div>
  );
};

export default ChangeLang;
