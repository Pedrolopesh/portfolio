import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiMenu, HiX } from "react-icons/hi";
import useHeaderScroll from "./useHeaderScroll";
import NavLinks from "./NavLinks";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const router = useRouter();
  const { isSolid } = useHeaderScroll();
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

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={
            isSolid
              ? "mx-auto mt-3 flex max-w-3xl items-center justify-between gap-6 rounded-2xl border border-border bg-surface-solid px-4 py-2.5 shadow-[0_16px_40px_-16px_rgba(47,111,239,0.55)] backdrop-blur-xl transition-all duration-500"
              : "mx-auto flex items-center justify-between gap-6 px-6 py-6 transition-all duration-500 sm:px-10"
          }
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
