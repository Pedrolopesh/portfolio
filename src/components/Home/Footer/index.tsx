import { useTranslation } from "react-i18next";
import { FaLinkedin } from "react-icons/fa";
import { ImBehance2 } from "react-icons/im";
import Link from "next/link";
import { NAV_ITEMS } from "../../../utils/navItems";
import { PROJECTS } from "../../../content/projects";

type FooterLink = { text: string; href: string };

// links de verdade (<Link>/<a>) em vez de botões com router.push: dá pra
// abrir em nova aba, leitores de tela anunciam como link e o Google segue
const FooterLinkColumn = ({ title, links }: { title: string; links: FooterLink[] }) => (
  <div>
    <p className="text-sm font-semibold text-ink">{title}</p>
    <ul className="mt-4 flex flex-col gap-2.5">
      {links.map(({ text, href }) => (
        <li key={href}>
          <Link href={href} className="text-sm text-ink-muted transition-colors hover:text-ink">
            {text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SOCIAL_LINKS = [
  {
    icon: <FaLinkedin size={18} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pedro-l-50b3b818a/",
  },
  {
    icon: <ImBehance2 size={18} />,
    label: "Behance",
    href: "https://www.behance.net/pedrohenrique139",
  },
];

const BLOG_LINKS: FooterLink[] = [
  { text: "Electrolux × VTEX IO", href: "/blog/migrando-a-loja-da-electrolux-para-vtex-io" },
  { text: "Link Leito", href: "/blog/link-leito-tecnologia-contra-filas-em-hospitais" },
  { text: "The Chat", href: "/blog/the-chat-comunicacao-em-tempo-real-com-socket-io" },
  { text: "Genesis Bank", href: "/blog/reconstruindo-o-app-da-genesis-bank" },
];

const Footer = ({ thanksForVisit = true }) => {
  const { t } = useTranslation();

  const productLinks: FooterLink[] = PROJECTS.filter((p) => p.category === "produtos")
    .slice(0, 4)
    .map((p) => ({ text: p.name, href: `/Project#${p.slug}` }));

  return (
    <footer className="relative border-t border-border bg-bg">
      {thanksForVisit && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-border bg-surface-solid px-4 py-1.5 text-xs font-medium text-ink-muted shadow-lg backdrop-blur-xl">
          {t("home_footer.thanks_visit")}
        </div>
      )}

      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-8">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <img src="/img/logo-gradient-blue.png" alt="" className="h-7 w-7" />
              <span className="bg-gradient-to-r from-brand-from to-brand-to bg-clip-text text-base font-bold text-transparent">
                Pedro Lopes
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-ink-muted">{t("footer.about")}</p>
          </div>

          <FooterLinkColumn title={t("footer.products")} links={productLinks} />
          <FooterLinkColumn title={t("footer.blog")} links={BLOG_LINKS} />
          <FooterLinkColumn
            title={t("footer.nav")}
            links={NAV_ITEMS.map(({ href, labelKey }) => ({ text: t(labelKey), href }))}
          />
        </div>

        <div className="mt-14 flex flex-col-reverse items-center gap-6 border-t border-border pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} Pedro Lopes. {t("footer.rights")}
          </p>

          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-brand-to hover:text-ink"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
