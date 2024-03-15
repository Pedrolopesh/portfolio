import { useTranslation } from "react-i18next";
import { FaRegHeart } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  const redirectTo = (link: string) => {
    console.log({ link });
  };

  const footerLinks = {
    firstFooterLinks: {
      title: t("home_footer.footer_link_title_01"),
      subLinks: [
        t("home_footer.footer_sub_link_01"),
        t("home_footer.footer_sub_link_02"),
        t("home_footer.footer_sub_link_03"),
        t("home_footer.footer_sub_link_04"),
      ],
    },
    secondFooterLinks: {
      title: t("home_footer.footer_link_title_02"),
      subLinks: [
        t("home_footer.footer_sub_link_05"),
        t("home_footer.footer_sub_link_06"),
        t("home_footer.footer_sub_link_07"),
        t("home_footer.footer_sub_link_08"),
      ],
    },
  };

  return (
    <div>
      <div>
        <p>{t("home_footer.thanks_visit")}</p>
        <FaRegHeart size={40} color="#fff" />
      </div>

      <footer>
        <div>
          <p>{footerLinks.firstFooterLinks.title}</p>
          {footerLinks.firstFooterLinks.subLinks.map((link, index) => (
            <a key={index} onClick={() => redirectTo(link)}>
              {link}
            </a>
          ))}
        </div>

        <div></div>

        <div></div>
      </footer>
    </div>
  );
};

export default Footer;
