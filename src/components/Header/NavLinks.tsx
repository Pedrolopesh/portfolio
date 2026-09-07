import Link from "next/link";
import type { NextRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { NAV_ITEMS } from "../../utils/navItems";

interface INavLinksProps {
  router: NextRouter;
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
}

const NavLinks = ({
  router,
  className = "",
  linkClassName = "",
  onNavigate,
}: INavLinksProps) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      {NAV_ITEMS.map(({ href, labelKey }) => {
        const isActive = router.pathname === href;

        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            className={`${linkClassName} ${
              isActive ? "text-ink" : "text-ink-muted hover:text-ink"
            }`}
          >
            {t(labelKey)}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
