import Head from "next/head";
import CodePortrait, {
  type PortraitMode,
} from "../components/Home/HomeBanner/CodePortrait";

/**
 * Página de laboratório (não linkada no site): mostra as variações do
 * efeito foto → código uma embaixo da outra, pra comparar e escolher.
 * Cada retrato só começa a animação quando entra na tela; clique nele
 * pra repetir.
 */

type Variant = {
  id: string;
  title: string;
  description: string;
  mode: PortraitMode;
  density?: number;
};

const VARIANTS: Variant[] = [
  {
    id: "A",
    title: "Código corrido (atual)",
    description:
      "Texto de código real preenchendo a silhueta. O tom da foto muda só a cor/brilho de cada letra. Mais legível como código, menos detalhe no rosto.",
    mode: "code",
  },
  {
    id: "B",
    title: "ASCII por tom",
    description:
      "Cada letra é escolhida pelo tom da foto: letras 'cheias' (#%@) nas partes claras e 'leves' (.:-) nas escuras. Mais nitidez no rosto, menos cara de código.",
    mode: "ascii",
  },
  {
    id: "C",
    title: "Símbolos de código por tom",
    description:
      "Mesma lógica do B, mas a rampa usa só símbolos de programação: . , ; = < > ( ) { } [ ] $ # @. Meio-termo entre nitidez e estética de código.",
    mode: "symbols",
  },
  {
    id: "D",
    title: "Híbrido",
    description:
      "Código legível nas áreas claras (pele/rosto) e rampa ASCII nas escuras (cabelo, barba, camiseta). O rosto 'fala' código e o resto dá textura.",
    mode: "hybrid",
  },
  {
    id: "E",
    title: "Binário (0 e 1)",
    description:
      "Estilo matrix: só 0 e 1, o tom muda a cor. Visual uniforme e limpo.",
    mode: "binary",
  },
  {
    id: "F",
    title: "ASCII por tom — grade fina",
    description:
      "Igual ao B com grade ~50% mais densa (letras menores). Mostra quanto detalhe dá pra ganhar só aumentando a resolução.",
    mode: "ascii",
    density: 80,
  },
  {
    id: "G",
    title: "Mistura A + F",
    description:
      "Grade fina e negrito do F, com 3 faixas de tom: sombras (cabelo, barba, camiseta) em rampa leve :-=, meios-tons da pele em código corrido legível do A, e pontos de luz em rampa cheia #%@.",
    mode: "mix",
    density: 80,
  },
];

const BannerLab = () => (
  <>
    <Head>
      <title>Banner lab — Pedro Lopes</title>
      <meta name="robots" content="noindex" />
    </Head>

    <main className="min-h-screen bg-bg px-6 py-16 text-ink sm:px-10">
      <header className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-brand-from">{"// banner lab"}</p>
        <h1 className="mt-2 text-4xl font-bold">Variações do retrato em código</h1>
        <p className="mt-3 max-w-2xl text-ink-muted">
          Cada exemplo começa como foto, vira código ~1,5s depois de aparecer
          na tela e depois fica em loop: 10s em código ⇄ 10s em foto. Clique
          no retrato pra reiniciar o ciclo; passe o mouse pra ver a interação.
        </p>
      </header>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-24">
        {VARIANTS.map((v) => (
          <section
            key={v.id}
            id={v.id}
            className="grid items-center gap-10 border-t border-border pt-16 lg:grid-cols-[1fr_440px]"
          >
            <div>
              <p className="font-mono text-sm text-brand-from">
                {`variante ${v.id} · mode="${v.mode}"${v.density ? ` · density=${v.density}` : ""}`}
              </p>
              <h2 className="mt-2 text-3xl font-bold">{v.title}</h2>
              <p className="mt-4 max-w-md text-ink-muted">{v.description}</p>
            </div>
            <div className="mx-auto w-full max-w-[360px] lg:max-w-[440px]">
              <CodePortrait
                src="/img/profile-cutout.webp"
                precut
                alt={`Retrato de Pedro Lopes — variante ${v.id}`}
                mode={v.mode}
                density={v.density}
                delay={1500}
                loop
                hold={10000}
              />
            </div>
          </section>
        ))}
      </div>
    </main>
  </>
);

export default BannerLab;
