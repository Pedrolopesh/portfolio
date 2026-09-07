import { useTranslation } from "react-i18next";
import { FaLinkedin } from "react-icons/fa";
import { ImBehance2 } from "react-icons/im";
import { useRouter } from "next/router";
import Link from "next/link";
import { NAV_ITEMS } from "../../../utils/navItems";

interface IFooterLinkColumnProps {
  title: string;
  links: { text: string; onClick: () => void }[];
}

const FooterLinkColumn = ({ title, links }: IFooterLinkColumnProps) => (
  <div>
    <p className="text-sm font-semibold text-ink">{title}</p>
    <ul className="mt-4 flex flex-col gap-2.5">
      {links.map(({ text, onClick }) => (
        <li key={text}>
          <button
            type="button"
            onClick={onClick}
            className="text-sm text-ink-muted transition-colors hover:text-ink"
          >
            {text}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = ({ thanksForVisit = true }) => {
  const router = useRouter();
  const { t } = useTranslation();

  const redirectTo = (link: string) => router.push(link);
  const redirectNewTab = (link: string) => window.open(link, "_blank");

  const featuredProjects = [
    { text: t("home_footer.footer_sub_link_01"), link: "/Project?name=electrolux" },
    { text: t("home_footer.footer_sub_link_02"), link: "/Project?name=triper" },
    { text: t("home_footer.footer_sub_link_03"), link: "/Project?name=the-chat" },
    { text: t("home_footer.footer_sub_link_04"), link: "/Project?name=link-leito" },
  ];

  const recentProjects = [
    { text: t("home_footer.footer_sub_link_05"), link: "/Project?name=blue-token" },
    { text: t("home_footer.footer_sub_link_06"), link: "/Project?name=match-coder" },
    { text: t("home_footer.footer_sub_link_07"), link: "/Project?name=pet-care" },
    { text: t("home_footer.footer_sub_link_08"), link: "/Project?name=pet-system" },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin size={18} />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/pedro-l-50b3b818a/",
    },
    {
      icon: <ImBehance2 size={18} />,
      label: "Behance",
      link: "https://www.behance.net/pedrohenrique139",
    },
  ];

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
              <img
                src="/img/logo-gradient-blue.png"
                alt=""
                className="h-7 w-7"
              />
              <span className="bg-gradient-to-r from-brand-from to-brand-to bg-clip-text text-base font-bold text-transparent">
                Pedro Lopes
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-ink-muted">
              Software developer & designer — projetos, stack e formas de
              contato.
            </p>
          </div>

          <FooterLinkColumn
            title={t("home_footer.footer_link_title_01")}
            links={featuredProjects.map(({ text, link }) => ({
              text,
              onClick: () => redirectTo(link),
            }))}
          />

          <FooterLinkColumn
            title={t("home_footer.footer_link_title_02")}
            links={recentProjects.map(({ text, link }) => ({
              text,
              onClick: () => redirectTo(link),
            }))}
          />

          <FooterLinkColumn
            title={t("home_footer.footer_nav_title")}
            links={NAV_ITEMS.map(({ href, labelKey }) => ({
              text: t(labelKey),
              onClick: () => redirectTo(href),
            }))}
          />
        </div>

        <div className="mt-14 flex flex-col-reverse items-center gap-6 border-t border-border pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} Pedro Lopes. Todos os direitos
            reservados.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon, label, link }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                onClick={() => redirectNewTab(link)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-brand-to hover:text-ink"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
