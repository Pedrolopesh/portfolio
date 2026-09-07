import { MdOutlineEmail } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import useSendContactEmail from "../../../utils/useSendContactEmail";
import useRevealOnScroll from "../../../utils/useRevealOnScroll";

const EmailMe = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();
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
    <section
      ref={ref}
      id="emailMe"
      className={`mx-auto max-w-3xl px-6 py-24 text-center transition-all duration-700 sm:px-10 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {viewToast && (
        <div className="mx-auto mb-6 flex max-w-md items-center justify-between gap-4 rounded-xl border border-border bg-surface-solid px-4 py-3 text-sm">
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

      <h2 className="text-2xl font-bold text-ink sm:text-3xl">
        {t("emailMe.about_me_title")}
      </h2>
      <p className="mt-2 text-ink-muted">{t("emailMe.bout_me_subtitle")}</p>

      <form
        className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
        onSubmit={(event) => {
          event.preventDefault();
          sendEmail();
        }}
      >
        <div className="flex flex-1 items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3">
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
    </section>
  );
};

export default EmailMe;
