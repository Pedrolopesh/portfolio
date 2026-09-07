import { useEffect, useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiMenu, HiX } from "react-icons/hi";
import useHeaderScroll from "./useHeaderScroll";
import NavLinks from "./NavLinks";
import LanguageSwitcher from "./LanguageSwitcher";

const lerp = (from: number, to: number, progress: number) =>
  from + (to - from) * progress;

const Header = () => {
  const router = useRouter();
  const { progress } = useHeaderScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // fecha com Esc e trava o scroll da página por trás do menu mobile
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobileMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // fecha o menu mobile automaticamente ao trocar de rota — sincronizando
  // com uma fonte externa (o router), não é estado derivado de props/state
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    closeMobileMenu();
  }, [router.pathname]);

  // Estilo do "pill" interpolado a partir de `progress` (0 a 1), em vez
  // de alternar entre duas classes Tailwind fixas: propriedades como
  // max-width, box-shadow e backdrop-filter não interpolam de forma
  // suave quando saem de "ausente/none" direto pra um valor — o
  // resultado era um corte abrupto no meio do scroll. Calculando cada
  // valor numericamente e atualizando a cada frame de scroll, a
  // transição acompanha a rolagem 1:1 e fica perceptível acontecendo.
  const pillStyle = useMemo<CSSProperties>(
    () => ({
      maxWidth: `${lerp(1600, 768, progress)}px`,
      marginTop: `${lerp(0, 12, progress)}px`,
      paddingInline: `${lerp(24, 16, progress)}px`,
      paddingBlock: `${lerp(24, 10, progress)}px`,
      borderRadius: `${lerp(0, 16, progress)}px`,
      borderWidth: "1px",
      borderColor: `rgba(114, 161, 255, ${lerp(0, 0.24, progress)})`,
      backgroundColor: `rgba(17, 24, 43, ${lerp(0, 0.94, progress)})`,
      boxShadow: `0 16px 40px -16px rgba(47, 111, 239, ${lerp(0, 0.55, progress)})`,
      backdropFilter: `blur(${lerp(0, 24, progress)}px)`,
      transition:
        "background-color 120ms ease-out, border-color 120ms ease-out, box-shadow 120ms ease-out, backdrop-filter 120ms ease-out",
    }),
    [progress]
  );

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          style={pillStyle}
          className="mx-auto flex items-center justify-between gap-6"
        >
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label="Página inicial"
          >
            <img
              src="/img/logo-gradient-blue.png"
              alt=""
              className="h-8 w-8"
            />
            <span className="hidden bg-gradient-to-r from-brand-from to-brand-to bg-clip-text text-lg font-bold text-transparent sm:inline">
              Pedro Lopes
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <NavLinks
              router={router}
              className="flex items-center gap-7"
              linkClassName="text-sm font-medium transition-colors"
            />
            <LanguageSwitcher />
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-white/10 md:hidden"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
          >
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-bg/60 backdrop-blur-sm md:hidden"
          onClick={closeMobileMenu}
        >
          <nav
            id="mobile-menu"
            aria-label="Menu principal"
            className="mr-4 mt-20 ml-auto w-64 rounded-2xl border border-border bg-surface-solid p-4 shadow-2xl backdrop-blur-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <NavLinks
              router={router}
              className="flex flex-col gap-1"
              linkClassName="rounded-lg px-3 py-2.5 text-base font-medium transition-colors hover:bg-white/5"
              onNavigate={closeMobileMenu}
            />
            <div className="mt-3 border-t border-border pt-3">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
