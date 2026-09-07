import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";

const HomeBanner = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideo, setCurrentVideo] = useState("videos/particles.mp4");

  useEffect(() => {
    // `window` só existe no client: o vídeo desktop é o valor inicial
    // (igual ao renderizado no servidor) e só troca pro mobile aqui,
    // depois do mount — evita mismatch de hidratação.
    if (window.innerWidth <= 900) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentVideo("videos/particles_mobile.mp4");
    }

    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9;
    }
  }, []);

  return (
    <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={currentVideo} type="video/mp4" />
        Desculpe, seu navegador não suporta vídeos HTML5.
      </video>

      {/* escurece o vídeo pra manter contraste com o texto, e funde
          suavemente com o fundo escuro da próxima seção */}
      <div className="absolute inset-0 bg-bg/60" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-bg" />

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
        <img
          src="/img/logo-gradient-blue.png"
          alt="Pedro Lopes"
          className="h-24 w-24 drop-shadow-[0_0_30px_rgba(46,111,239,0.45)] sm:h-28 sm:w-28"
        />

        <div className="mt-8 flex items-center gap-3 text-3xl font-bold text-ink sm:text-4xl">
          <span>Web</span>
          <span className="bg-gradient-to-r from-brand-from to-brand-to bg-clip-text text-transparent">
            <Typewriter
              words={[
                t("homeBanner.title_typing_0"),
                t("homeBanner.title_typing_1"),
                t("homeBanner.title_typing_2"),
                t("homeBanner.title_typing_3"),
              ]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </span>
        </div>

        <p className="mt-6 max-w-lg text-ink-muted">
          {t("overview_text_banner")}
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-ink-muted">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
};

export default HomeBanner;
