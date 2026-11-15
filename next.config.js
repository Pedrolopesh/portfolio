// @ts-check

/**
 * Links antigos /Project?name=<projeto> (página de detalhe que não existe
 * mais) → post do blog com a história do projeto. 308 permanente, pra
 * links compartilhados e o Google seguirem pro lugar novo.
 */
const LEGACY_PROJECT_POSTS = {
  electrolux: "migrando-a-loja-da-electrolux-para-vtex-io",
  "link-leito": "link-leito-tecnologia-contra-filas-em-hospitais",
  triper: "triper-estudando-nextjs-e-animacoes-css",
  "comunity-alert": "community-alert-ux-para-alertas-de-catastrofes",
  "match-coder": "match-coder-um-tinder-para-vagas-de-ti",
  "pet-care": "pet-care-ux-para-ongs-de-protecao-animal",
  "the-chat": "the-chat-comunicacao-em-tempo-real-com-socket-io",
  "quest-game": "quest-game-pontuacao-por-dificuldade",
  "blue-token": "explicando-um-token-de-criptomoedas-num-site",
  "toro-token": "site-do-toro-token-produto-em-construcao",
  "genesis-bank": "reconstruindo-o-app-da-genesis-bank",
  "pet-system": "petsystem-meu-primeiro-projeto",
};

/**
 * Content-Security-Policy: só o que o site realmente carrega. Se adicionar
 * um serviço externo (fonte, embed, analytics), inclua a origem aqui.
 * - fonts.googleapis/gstatic: Poppins (_document)
 * - youtube-nocookie / i.ytimg: podcast (About Me e blog)
 * - vercel.live: barra de comentários dos deploys de preview da Vercel
 * Só em produção: o `next dev` precisa de eval pro hot reload.
 */
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://vercel.live",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "img-src 'self' data: blob: https://i.ytimg.com https://vercel.live https://vercel.com",
  "frame-src https://www.youtube-nocookie.com https://vercel.live",
  "connect-src 'self' https://vercel.live wss://ws-us3.pusher.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  ...(process.env.NODE_ENV === "production"
    ? [{ key: "Content-Security-Policy", value: CSP }]
    : []),
];

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,

  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },

  async redirects() {
    return Object.entries(LEGACY_PROJECT_POSTS).map(([name, slug]) => ({
      source: "/Project",
      has: [{ type: "query", key: "name", value: name }],
      destination: `/blog/${slug}`,
      permanent: true,
    }));
  },
};
