import { useTranslation } from "react-i18next";
import { FaRegHeart } from "react-icons/fa";
import styles from "./style.module.css";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImBehance2 } from "react-icons/im";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const { t } = useTranslation();

  const redirectTo = (link: string) => {
    console.log({ link });
  };

  const footerLinks = {
    firstFooterLinks: {
      title: t("home_footer.footer_link_title_01"),
      subLinks: [
        {
          text: t("home_footer.footer_sub_link_01"),
          link: "/Project?name=electrolux",
        },
        {
          text: t("home_footer.footer_sub_link_02"),
          link: "/Project?name=triper",
        },
        {
          text: t("home_footer.footer_sub_link_03"),
          link: "/Project?name=the-chat",
        },
        {
          text: t("home_footer.footer_sub_link_04"),
          link: "/Project?name=link-leito",
        },
      ],
    },
    secondFooterLinks: {
      title: t("home_footer.footer_link_title_02"),
      subLinks: [
        {
          text: t("home_footer.footer_sub_link_05"),
          link: "/Project?name=blue-token",
        },
        {
          text: t("home_footer.footer_sub_link_06"),
          link: "/Project?name=match-coder",
        },
        {
          text: t("home_footer.footer_sub_link_07"),
          link: "/Project?name=pet-care",
        },
        {
          text: t("home_footer.footer_sub_link_08"),
          link: "/Project?name=pet-system",
        },
      ],
    },
  };

  const thirdFooterLinks = {
    title: t("home_footer.footer_contact_title"),
    socialMidiaIconsAndLinks: [
      {
        icon: <FaLinkedin color="#fff" size={50} />,
        link: "https://www.linkedin.com/in/pedro-l-50b3b818a/",
      },
      {
        icon: <ImBehance2 color="#fff" size={50} />,
        link: "https://www.behance.net/pedrohenrique139",
      },
    ],
  };

  const redirectNewTab = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className={styles.continerFooter}>
      <div className={styles.continerFloatText}>
        <p>{t("home_footer.thanks_visit")}</p>
        <FaRegHeart size={40} color="#fff" />
      </div>

      <footer className={styles.continerFooterLinks}>
        <div className={styles.contentFooterLinks}>
          <div className={styles.footerBlockLinks}>
            <p>{footerLinks.firstFooterLinks.title}</p>
            {footerLinks.firstFooterLinks.subLinks.map((item, index) => (
              <a key={index} target="_blank" href={item.link} rel="noreferrer">
                {item.text}
              </a>
            ))}
          </div>

          <div className={styles.footerBlockLinks}>
            <p>{footerLinks.secondFooterLinks.title}</p>
            {footerLinks.secondFooterLinks.subLinks.map((item, index) => (
              <a
                key={`${index}_${index}`}
                target="_blank"
                href={item.link}
                rel="noreferrer"
              >
                {item.text}
              </a>
            ))}
          </div>

          <div className={styles.footerBlockIconsAndLinks}>
            <p>{thirdFooterLinks.title}</p>
            <div>
              {thirdFooterLinks.socialMidiaIconsAndLinks.map(
                (IconAndLink, index) => (
                  <button
                    key={`${index}_${index}_${index}`}
                    onClick={() => redirectNewTab(IconAndLink.link)}
                  >
                    {IconAndLink.icon}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
