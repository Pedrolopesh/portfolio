import React from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineEmail } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillYoutube,
  AiFillBehanceSquare,
} from "react-icons/ai";

import HeadPages from "../components/HeadPages";
import Header from "../components/Header";
import Footer from "../components/Home/Footer";
import useSendContactEmail from "../utils/useSendContactEmail";

const CONTACT_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pedro-lopes-50b3b818a/",
    icon: AiFillLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/Pedrolopesh",
    icon: AiFillGithub,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCEnWEeD27gzyliBYhRkcnzQ",
    icon: AiFillYoutube,
  },
  {
    name: "Behance",
    href: "https://www.behance.net/pedrohenrique139",
    icon: AiFillBehanceSquare,
  },
];

const Contact = () => {
  const { t } = useTranslation();
  const {
    email,
    setEmail,
    website,
    setWebsite,
    sendEmail,
    viewToast,
    setViewToast,
    toastHasError,
  } = useSendContactEmail();

  return (
    <div className="min-h-screen">
      <HeadPages
        title="Contato | Pedro Lopes"
        description="Fale com Pedro Lopes — redes sociais e formas de contato."
        path="/Contact"
      />
      <Header />

      <main className="mx-auto max-w-5xl px-6 pt-36 pb-24 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div
              className="h-40 w-40 rounded-3xl bg-cover bg-center ring-1 ring-border sm:h-48 sm:w-48"
              style={{ backgroundImage: "url(/img/pedro-img1.jpg)" }}
            />

            <h1 className="mt-8 text-3xl font-bold text-ink sm:text-4xl">
              {t("contact_page.title")}
            </h1>
            <p className="mt-4 max-w-md text-ink-muted">
              {t("contact_page.subtitle")}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {CONTACT_LINKS.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-ink-muted transition-colors hover:border-brand-to hover:text-ink"
                >
                  <Icon size={18} />
                  {name}
                </a>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl border border-border bg-surface p-8 sm:p-10">
            {viewToast && (
              <div className="mb-6 flex items-center justify-between gap-4 rounded-xl border border-border bg-surface-solid px-4 py-3 text-sm">
                <p className={toastHasError ? "text-red-300" : "text-ink"}>
                  {toastHasError
                    ? t("emailMe.toast_error_message")
                    : t("emailMe.tost_message")}
                </p>
                <button
                  type="button"
                  onClick={() => setViewToast(false)}
                  aria-label="Fechar aviso"
                  className="text-ink-muted transition-colors hover:text-ink"
                >
                  <IoCloseCircleOutline size={20} />
                </button>
              </div>
            )}

            <h2 className="text-xl font-semibold text-ink">
              {t("contact_page.form_title")}
            </h2>
            <p className="mt-2 text-sm text-ink-muted">
              {t("contact_page.form_subtitle")}
            </p>

            <form
              className="mt-6 flex flex-col gap-3 sm:flex-row"
              onSubmit={(event) => {
                event.preventDefault();
                sendEmail();
              }}
            >
              <div className="flex flex-1 items-center gap-3 rounded-xl border border-border bg-bg px-4 py-3">
                <MdOutlineEmail size={20} className="text-ink-muted" />
                <input
                  type="email"
                  required
                  placeholder={t("emailMe.input_placeholder")}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full bg-transparent text-sm text-ink placeholder:text-ink-muted focus:outline-none"
                />
              </div>

              {/* honeypot anti-spam: invisível pra usuários reais */}
              <input
                type="text"
                name="website"
                value={website}
                onChange={(event) => setWebsite(event.target.value)}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <button
                type="submit"
                className="shrink-0 rounded-xl bg-gradient-to-r from-brand-from to-brand-to px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                {t("emailMe.button_send")}
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer thanksForVisit={false} />
    </div>
  );
};

export default Contact;
