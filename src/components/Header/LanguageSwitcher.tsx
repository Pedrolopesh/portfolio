import useLanguage from "./useLanguage";

const LANGS = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
];

interface ILanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher = ({ className = "" }: ILanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full border border-border bg-white/5 p-0.5 ${className}`}
      role="group"
      aria-label="Selecionar idioma"
    >
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          aria-pressed={language === code}
          onClick={() => setLanguage(code)}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors ${
            language === code
              ? "bg-gradient-to-r from-brand-from to-brand-to text-white"
              : "text-ink-muted hover:text-ink"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
