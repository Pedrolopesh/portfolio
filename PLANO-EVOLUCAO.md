# Plano de Evolução do Portfólio

> Documento vivo. Criado em 07/09/2026 a partir de uma auditoria do estado atual do
> repositório + das ideias trazidas pelo Pedro. Deve ser atualizado a cada fase
> concluída ou decisão relevante tomada.

## 1. Contexto

O projeto é um portfólio pessoal em **Next.js 12 (Pages Router) + React 17 +
TypeScript + styled-components/CSS Modules**, sem alterações relevantes desde 2024.
Objetivo em duas camadas:

- **Curto/médio prazo:** modernizar design, corrigir dívidas técnicas e adicionar um
  blog.
- **Médio/longo prazo:** transformar o portfólio também em um **repositório de
  estudos** — não só uma vitrine, mas um lugar onde novas técnicas, libs e padrões
  são testados e documentados publicamente (o próprio blog pode registrar isso).

Este documento cobre as 4 ideias trazidas pelo Pedro, o diagnóstico técnico que
encontrei no código, e sugestões extras. Fica na raiz do projeto para ser
referenciado nas próximas conversas/sessões.

---

## 2. Diagnóstico técnico atual

Auditoria feita lendo o código-fonte (não é achismo — cada item tem arquivo/linha).

### 2.1 Stack desatualizada / risco de segurança

| Item | Onde | Risco |
|---|---|---|
| Next.js 12.0.4 (2021) e React 17.0.2 | `package.json` | Fora de suporte, sem patches de segurança recentes, sem App Router, sem `next/image` moderno, sem Server Components. |
| `package-lock.json` **e** `yarn.lock` versionados juntos | raiz | Dois gerenciadores de pacote no mesmo repo geram instalações inconsistentes dependendo de quem/o que roda o install. O último commit ("uncommit yarn files") sugere que isso já incomodou antes — precisa ser resolvido, não só adiado. |
| `tsconfig.json` com `"strict": false` | `tsconfig.json:5` | TypeScript sem strict mode perde boa parte do valor de usar TS. Já existem `any` soltos (`LinkOptions.tsx:6`, `CircleTechProfile`, `WorkSection`, `WorkCard`, `SkillBar`, `Companys`, `AboutMe`). |
| Sem CI (`.github/workflows` não existe) | — | Nenhum lint/build/test roda automaticamente em PR — qualquer regressão só é percebida em produção. |
| Sem testes | — | Não há Jest/Testing Library configurado. Qualquer refatoração (como as que vêm por aí) é feita "no escuro". |
| `engines` não definido no `package.json` | — | Sem trava de versão de Node, builds podem variar entre máquinas/CI. |

### 2.2 Segurança e privacidade

- **`src/pages/api/send.js`**: toda a integração com Resend está comentada — o
  endpoint só faz `console.log("foi")` e devolve `200 { message: "Email sent" }`
  sempre, mesmo sem enviar nada. Resultado: o formulário de contato mente pro
  usuário dizendo que o e-mail foi enviado (`useEmailme.ts:19-27` mostra o toast de
  sucesso disparando em qualquer resposta 2xx). Isso precisa ser religado.
- Quando religar: hoje o endpoint **não valida `req.method`**, **não valida o
  formato do e-mail**, **não tem rate limit nem captcha/honeypot**. Um endpoint
  público de envio de e-mail sem essas proteções é alvo fácil de spam/abuso assim
  que voltar a funcionar de verdade.
- Chave do Resend fica em `process.env.RESEND_API_KEY` (correto), e `.env` está no
  `.gitignore` — não achei vazamento no histórico do git. Falta só um
  `.env.example` documentando as variáveis esperadas.
- Boa notícia: não há segredos commitados, não há `.DS_Store` versionado (o
  gitignore está funcionando), e o app não faz nenhuma chamada perigosa a APIs de
  terceiros com dados sensíveis.

### 2.3 SEO — bug real encontrado

`src/components/HeadPages/index.tsx` tem as meta tags Open Graph/Twitter **ainda
apontando para o site gerador `metatags.io`** (title, description e og:image
genéricos de exemplo, `og:url` = `https://metatags.io/`) em vez dos dados reais do
portfólio. Também há **duas tags `<title>` conflitantes** no mesmo componente
(linhas 21 e 41) e o mesmo `<Head>` é usado em todas as páginas — ou seja, toda
página do site hoje compartilha o mesmo título/descrição, o que é ruim para SEO
(inclusive para os futuros posts do blog, que precisam de meta única por slug).

### 2.4 Código morto / duplicado

Existem duas versões do site convivendo no repo:

- Design "novo" (usado de fato): `src/components/Home/*`, `src/components/Stacks/*`,
  `src/components/HeaderOptions`, `src/components/Footer` → usados pelas rotas
  reais `/`, `/Stacks`, `/Project`, `/Contact` (confirmado em `LinkOptions.tsx`).
- Design "antigo": toda a árvore `src/components/MainContent/*` (~20 arquivos, em
  styled-components) só é usada por `src/pages/DesignPage.tsx` e
  `src/pages/TiPage.tsx` — duas rotas (`/DesignPage`, `/TiPage`) que **não estão
  linkadas em lugar nenhum do menu/navegação**.

Isso infla o bundle, confunde quem for mexer no código (inclusive eu, numa sessão
futura) e deixa duas fontes de verdade para os mesmos dados de projeto. Recomendo
remover essa árvore inteira (com sua confirmação antes de apagar).

### 2.5 Arquitetura / padrões de código

- Mistura de 3 abordagens de estilo no mesmo projeto: CSS Modules (`Home/*`,
  `Stacks/*`), styled-components (`MainContent/*`, a remover) e um `globals.css`
  com só uma variável de tema (`--darken-blue-bg`). Não existe um design system
  central (cores, espaçamentos, tipografia, breakpoints) — cada componente define
  seus próprios valores soltos.
- Manipulação imperativa do DOM fora do fluxo do React:
  `document.querySelector('body').classList.add(...)` repetido em `index.tsx`,
  `Stacks.tsx`, `Contact.tsx` para aplicar o fundo escuro, e `window.open` direto
  para navegação externa. Funciona, mas é frágil e não é o padrão React
  idiomático — dá pra centralizar isso em um `_app.tsx`/layout.
- `localStorage` acessado diretamente em vários componentes sem tratamento de erro
  (em navegação privada do Safari, por exemplo, isso pode lançar exceção).
- Uso de `<img>` puro em vez de `next/image` (a regra do ESLint que barra isso está
  explicitamente desligada em `.eslintrc.json:6`) — perde otimização automática de
  imagem, lazy loading e responsividade.
- `src/pages/Project.tsx`, `Contact.tsx` etc. usam nomes de arquivo em PascalCase
  para rotas (`/Project`, `/Stacks`, `/Contact`) — funciona no Pages Router, mas é
  incomum (URLs com maiúscula) e caso migre para App Router isso muda.

### 2.6 Bug confirmado: hydration mismatch por causa do i18n (não é regressão do upgrade)

Testando o app depois do upgrade do Next/React (seção 3, Fase 0) num browser real,
apareceu um erro de hidratação do React (`Minified React error #418`, mismatch de
texto) em toda página que usa `t(...)` do i18next. Rastreei a causa: o
`i18next-browser-languagedetector` (configurado em `_app.tsx`) e o `ChangeLang`
detectam o idioma a partir de `localStorage`/`navigator.language` **dentro de um
`useEffect`**, ou seja, só depois do primeiro paint no client — enquanto o servidor
sempre renderiza com o idioma de fallback (`en`). Se o idioma detectado no client
for diferente do fallback do servidor, o texto que o React hidrata não bate com o
HTML que veio do servidor.

Confirmei via `git diff` que essa lógica (timing da detecção de idioma, ordem de
detecção) é exatamente a mesma de antes do upgrade — só toquei em tipagem/null-
safety nesses arquivos. Ou seja, **não foi o upgrade do Next/React que causou
isso** — é uma lacuna arquitetural que já existia (i18next nunca foi integrado ao
SSR do Next), só fica mais visível/rastreável agora. Registrando aqui para não
esquecer: vale resolver junto da Fase 1 (já que vou mexer no header/`ChangeLang`
de qualquer forma), com uma de duas abordagens — renderizar as traduções no
servidor (`getServerSideProps` + carregar o JSON antes do render) ou adiar a
renderização do texto traduzido até depois do mount (com um estado de
loading/skeleton), evitando o mismatch.

**Nenhum desses pontos é bloqueante para começar** — mas decidi listar tudo porque
vários deles (design tokens, remoção de código morto, `strict: true`) são pré-
requisitos naturais para as fases 1 e 2 (fica mais barato arrumar a fundação antes
de redesenhar em cima dela do que depois).

---

## 3. Plano de implementação por fases

### Fase 0 — Fundação técnica (housekeeping) — ✅ concluída (07/09/2026)
Objetivo: deixar o terreno limpo antes do redesign, sem mudar nada visual.
Feita inteira na branch `chore/fase-0-fundacao`, em commits pequenos, cada um
validado com `lint` + `typecheck` + `build` (e o upgrade do Next/React também
smoke-testado num browser real).

- [x] Unificado em `yarn` (removido `package-lock.json`).
- [x] Next.js 12 → 16, React 17 → 19, mantendo Pages Router. Toda a cadeia de
  tooling foi junto: i18next/react-i18next, TypeScript (5.9, não 7.0 — ver
  commit), ESLint (9.x, não 10 — idem), `next lint` → `eslint .` com flat
  config (`eslint.config.mjs`), `tsconfig` (`target`/`moduleResolution`).
  Corrigido um bug de hidratação real (`<Link><a>` aninhado, HTML inválido)
  encontrado no smoke test. Um segundo problema de hidratação (i18n, pré-
  existente — ver seção 2.6) ficou documentado para a Fase 1, não foi
  mexido aqui.
- [x] `"strict": true` no `tsconfig.json` — 14 erros reais encontrados e
  corrigidos (não só silenciados), incluindo remoção de dead state
  (`sourceRoute`) descoberta no processo.
- [x] `.env.example` criado.
- [x] CI no GitHub Actions (`.github/workflows/ci.yml`): lint + typecheck +
  build em todo PR/push pra master.
- [x] Removida a árvore `MainContent/*` + `DesignPage.tsx` + `TiPage.tsx` —
  com o cuidado extra de resgatar `GalleryImagens`/`ProjectItem`, que na
  verdade eram usados pela rota real `/Project` (movidos pra
  `components/Project/*`). De quebra, saíram mais 3 dependências mortas
  (`styled-components`, `react-slick`/`slick-carousel`, `react-wavify`).
- [x] `HeadPages` corrigido — as meta tags OG/Twitter apontavam pro
  `metatags.io` (nunca substituídas pelos dados reais); agora aceita
  title/description/image/path por página.
- [x] `/api/send` religado com validação de método, validação de e-mail,
  honeypot e rate limit básico por IP.

### Fase 1 — Design system + Header + Footer + Contato — ✅ concluída (07/09/2026)
Objetivo: consolidar uma identidade visual única antes de tocar em cada página
individualmente. Feita na branch `feat/fase-1-design-system`, validada com
lint/typecheck/build + smoke test em browser real (incluindo o mismatch de
hidratação do i18n documentado na seção 2.6, resolvido junto).

- [x] Configurar **Tailwind** e definir os tokens do design system em
  `tailwind.config` (cores, espaçamento, tipografia, breakpoints). Migração é
  incremental: todo componente tocado a partir daqui (Header, Footer, Contato, e
  depois Home/Projetos/Stack na Fase 2) já nasce em Tailwind; o CSS
  Modules/styled-components legado só é convertido quando o componente for
  mesmo redesenhado, sem precisar de uma reescrita "big bang" do projeto inteiro.
- [x] **Header**: adaptar o padrão visto em
  `we-party/.../LandingPage.vue` (linhas ~946-972 e ~1607-1796): header fixo e
  transparente no topo da página, que ao rolar vira um "pill" flutuante com fundo
  translúcido (`backdrop-filter: blur`), sombra suave e bordas arredondadas; logo à
  esquerda, links à direita, e no mobile um menu hambúrguer que abre um drawer
  lateral com overlay desfocado. A cor de destaque muda para a paleta do
  portfólio (o azul do `--darken-blue-bg` / gradiente do logo atual) em vez do
  laranja/rosa da We Party.
- [x] **Footer**: reestruturar no padrão lelume.com.br — layout escuro em colunas:
  coluna de marca (logo + frase de posicionamento), 2-3 colunas de links
  (Projetos, Stack, Blog, Contato), e uma barra inferior com copyright + redes
  sociais. Mantém a essência do footer atual (`Home/Footer`) mas organiza melhor a
  informação — hoje ele já tem 2 blocos de links + ícones sociais, então é
  reaproveitável, só precisa de nova estrutura visual e (futuramente) um link para
  o blog.
- [x] **Página de Contato** (`/Contact`): revisar o layout de
  `src/pages/Contact.tsx` — hoje é uma foto + lista de botões de rede social,
  simples. Trazer o formulário de e-mail para essa página (hoje o `EmailMe` só
  aparece na Home) já religado ao endpoint da Fase 0, com estado de loading/erro
  visível (hoje o toast de sucesso dispara sempre, mesmo em erro).

### Fase 2 — Redesign de Home, Projetos e Stack & Skills — ✅ concluída (07/09/2026)
Com o design system e header/footer prontos, redesenhar o conteúdo de cada página
reaproveitando a estrutura de dados já existente (`ProjectContent/*.ts`,
`utils/stacks.tsx`) — ou seja, foco em layout/visual, não em reescrever os dados.
Feita na branch `feat/fase-2-home-projects-stacks`, validada com
lint/typecheck/build + smoke test em browser real em todas as rotas.

- [x] Todas as seções da Home (banner, serviços, projetos, stack, e-mail, sobre
  mim) e o Footer migrados de CSS Modules pra Tailwind.
- [x] Página `/Stacks` (banner + grid de cards) redesenhada.
- [x] Página `/Project` (galeria + detalhe) redesenhada.
- [x] Criado `useRevealOnScroll` (IntersectionObserver) substituindo os vários
  hacks de "compara scrollY com número mágico de pixels" espalhados pela Home —
  mais robusto, não quebra quando uma seção acima muda de altura.
- [x] Removido código morto encontrado no caminho: `CustomDivider`/
  `CustomDividerService` (nunca renderizados de verdade), `Logo` SVG duplicado
  (substituído pelo PNG gradiente já usado no header, pra consistência visual),
  estado de hover quebrado no `StackAndSkills` da Home (`boxShadow` recebendo uma
  string de CSS inteira — nunca funcionou).
- [x] Bug de dado encontrado e corrigido: `Triper.ts` apontava pra um banner que
  não existia (`./img/projects/project_gallery_banner_1.png`, faltava o
  `/banner/` no caminho — todos os outros 11 projetos já tinham isso certo).

### Fase 3 — Blog com slug — 🚧 em andamento (começou 07/09/2026)

**Arquitetura decidida** (revista em relação à primeira versão deste plano —
antes era "Next.js e Postgres na mesma VPS", agora é uma separação mais limpa
em 3 partes):

- **Frontend**: continua o Next.js deste repositório, hospedado na **Vercel**
  como já é hoje. As páginas do blog (`/blog`, `/blog/[slug]`) vão viver aqui e
  consumir a API do backend.
- **Backend**: repositório novo e separado,
  [`pedro-portfolio-backend`](../pedro-portfolio-backend) (irmão deste, fora do
  git deste projeto) — uma API em **NestJS + Prisma** que expõe o CRUD dos
  posts. Roda numa VPS que já hospeda outras coisas (Plane, picoclaw, etc.), daí
  o cuidado de isolar tudo com o nome `pedro-portfolio` (containers, rede Docker
  e volumes todos prefixados assim, sem tocar no que já existe lá).
- **Banco**: Postgres em container Docker, **só na rede interna** do
  docker-compose do backend — nunca exposto publicamente, só a API acessa.

**Status do backend** (`pedro-portfolio-backend`, já commitado como repo
próprio):
- [x] Projeto NestJS criado, com Prisma configurado (driver adapter
  `@prisma/adapter-pg`, exigido a partir do Prisma 7 mesmo no generator
  clássico `prisma-client-js` — usei o clássico em vez do novo `prisma-client`
  porque o novo gera um client ESM que quebra o Jest).
- [x] Modelo `Post { id, slug, title, excerpt, content, coverImage, tags[],
  status (DRAFT|PUBLISHED), publishedAt, createdAt, updatedAt }`, migration
  aplicada.
- [x] CRUD completo: rotas públicas (`GET /posts`, `GET /posts/:slug`) nunca
  vazam rascunhos — um `DRAFT` dá 404 na rota pública mesmo sabendo o slug
  exato. Rotas de escrita e a listagem completa (`/admin/posts/*`) exigem
  header `x-api-key`, comparado com `timingSafeEqual` (evita timing attack).
- [x] Slug gerado automaticamente do título (acentos removidos, único —
  409 em caso de conflito); `publishedAt` preenchido sozinho na primeira vez
  que o post vira `PUBLISHED`.
- [x] Dockerfile (build multi-estágio) + `docker-compose.prod.yml` (db sem
  porta publicada, api sem porta publicada, Caddy como único ponto de entrada).
- [x] Testado localmente de ponta a ponta via HTTP de verdade (não só
  lint/build): criar, listar, buscar por slug, editar, apagar, conflito de
  slug, e a proteção de rascunho — todos os casos confirmados.

**Reconhecimento feito na VPS (76.13.172.219, root, chave SSH já configurada)**:
- Ubuntu 24.04, Docker 29 + Compose v5 já instalados.
- **Portas 80/443 já ocupadas** pelo proxy de outro serviço que já roda lá
  (Plane, uma ferramenta de gestão de projetos, com seu próprio
  Postgres/Redis/RabbitMQ/MinIO). Não vamos mexer nisso.
- **Decidido**: a API do backend sobe numa porta HTTPS dedicada e alternativa
  (`8443` por padrão, configurável via `PROXY_HTTPS_PORT`), com um Caddy só
  nosso — zero risco pro que já roda na VPS.
- **Decidido sobre TLS**: em vez de desafio DNS-01, vamos colocar
  `api.pedrolopes.tech` atrás da **Cloudflare** (só esse subdomínio, resto do
  domínio continua sendo gerenciado normalmente na **Hostinger**, onde o
  domínio está registrado) e usar um certificado Origin CA — não depende das
  portas 80/443 nem de dar acesso de API de DNS pra ninguém. (Os nameservers
  atuais do domínio resolvem pra infraestrutura da NS1 — provavelmente a
  Hostinger usa a NS1 como provedor de DNS por trás do painel dela; na
  prática, pra você, mexer no DNS continua sendo pelo painel da Hostinger.)

**✅ Deploy feito (07/09/2026)** — a API já está no ar em produção:
- Código enviado pra `/opt/pedro-portfolio/app` na VPS via `rsync`, stack subida
  com `docker compose -f docker-compose.prod.yml up -d --build`.
- Corrigidos dois bugs achados só em produção (nenhum dos dois aparecia
  localmente): (1) o build do Nest gera `dist/src/main.js`, não `dist/main.js`
  — o `CMD` do Dockerfile apontava pro caminho errado; (2) o `tls internal`
  do Caddy depende do SNI da conexão pra saber qual certificado servir, e
  conexão direto por IP (sem SNI, como vai ser a chamada da Vercel) não batia
  com nada — trocado por um certificado autoassinado fixo (`openssl`, com o IP
  da VPS e os hostnames esperados no SAN), servido sempre, independente de SNI.
- Porta `8443/tcp` liberada no firewall (`ufw`) da VPS — só ela, nada mais foi
  tocado.
- **Testado de ponta a ponta pela URL pública de verdade**
  (`https://76.13.172.219:8443`, certificado autoassinado por enquanto):
  criar post, listar publicamente, checar CORS, apagar — tudo confirmado
  funcionando em produção, não só localmente.
- `API_KEY` de produção foi gerada e comunicada nesta conversa — precisa ser
  configurada como variável de ambiente na Vercel quando as páginas do blog
  forem construídas.

**Falta fazer**:
- [ ] Criar `api.pedrolopes.tech` na Cloudflare (zona própria só pro
  subdomínio) + delegar via NS na Hostinger + certificado Origin CA — passo a
  passo na seção 7 deste documento.
- [ ] Rotina de backup do volume do Postgres.
- [ ] Páginas do blog no Next.js (`/blog`, `/blog/[slug]`) consumindo a API,
  com SEO dinâmico por post via `HeadPages` (já corrigido na Fase 0).
- [ ] Como o post é sobre estudo/aprendizado (ligação com a Fase 4), o campo
  `tags` já existe no modelo pra filtrar por tema/tecnologia depois.

### Fase 4 — Portfólio como repositório de estudos (médio/longo prazo)
- Cada post do blog pode documentar uma técnica/lib testada no próprio código do
  portfólio (ex: "como estruturei o header com CSS puro", "testando App Router").
- Dá pra considerar uma seção "Laboratório"/"Changelog técnico" linkando commits
  ou PRs relevantes a posts correspondentes.
- Esse ponto não precisa de plano fechado agora — só fica registrado aqui como
  norte para não se perder quando chegar a hora.

---

## 4. Sugestões extras (para enriquecer, fora as 4 ideias originais)

1. **Analytics simples e respeitoso com privacidade** (Plausible/Umami/Vercel
   Analytics) — hoje não há nenhuma métrica de quem visita o portfólio.
2. **Modo claro/escuro** — já existe um tema escuro fixo; um toggle é barato de
   fazer junto do design system da Fase 1 e valoriza a UI.
3. **Sitemap + `robots.txt` dinâmico** — importante assim que o blog existir, para
   os posts serem indexados.
4. **Lighthouse/Core Web Vitals como checagem no CI** depois da Fase 0, para não
   regredir performance conforme o site cresce.
5. **RSS feed do blog** — barato de gerar a partir dos mesmos dados dos posts, bom
   para quem quiser seguir sem rede social.
6. **Página/seção "Uses" ou "Agora"** (padrão comum em portfólios de dev) —
   ferramentas que você usa hoje, o que está estudando no momento — conecta bem
   com a ideia de repositório de estudos.
7. **Acessibilidade**: revisar contraste de cores no fundo escuro e navegação por
   teclado no menu mobile durante a Fase 1 (já que o header vai ser refeito do
   zero, sai mais barato garantir `aria-*` corretos nesse momento).

---

## 5. Como pretendo conduzir daqui pra frente

- Cada fase vira uma branch a partir de `features/next-version` (branch atual),
  com commits pequenos e descritivos.
- Este documento é atualizado ao final de cada fase (marcando o que foi feito,
  ajustando o que mudou de ideia).
- Antes de apagar código (ex: `MainContent/*`) ou trocar algo estrutural (ex:
  gerenciador de pacotes, versão do Next), confirmo com você antes de executar.

---

## 6. Decisões já tomadas

1. **Next.js**: upgrade incremental mantendo o Pages Router (sem migrar para App
   Router por enquanto).
2. **Banco de dados do blog**: Postgres em container Docker, auto-hospedado numa
   VPS (não é um provider gerenciado). Detalhes na Fase 3, seção 3.
3. **CSS**: migrar para Tailwind, de forma incremental (componente a componente
   conforme forem redesenhados), sem big-bang no que já existe.
4. **Topologia de deploy** (revista em 07/09/2026 — a versão original desta
   decisão dizia "Next.js e Postgres juntos na mesma VPS"; ficou assim depois de
   conversar melhor sobre o que já roda nessa VPS): o **Next.js continua na
   Vercel**, só o **backend** (API em NestJS + Postgres) fica na VPS, isolado
   com o nome `pedro-portfolio` — containers, rede Docker e volumes todos
   prefixados assim, sem tocar no que já roda lá (Plane e outras coisas).
   Detalhes completos na Fase 3, seção 3.

## 7. Guia — colocar api.pedrolopes.tech atrás da Cloudflare

Passo a passo pra resolver o certificado TLS de produção da API (seção 3,
Fase 3). Os passos com 👤 só você consegue fazer (envolvem criar conta/acessar
dashboards que eu não tenho como acessar); os outros eu faço quando você
chegar neles.

1. 👤 Crie uma conta na Cloudflare (gratuita) se ainda não tiver uma:
   https://dash.cloudflare.com/sign-up
2. 👤 No dashboard, "Add a Site" → digite `api.pedrolopes.tech` (o subdomínio
   inteiro, não `pedrolopes.tech`) → plano Free. A Cloudflare vai tratar isso
   como uma zona própria e te dar **2 nameservers** (algo como
   `ana.ns.cloudflare.com` / `bob.ns.cloudflare.com`).
3. 👤 No painel da **Hostinger** (Domínios → `pedrolopes.tech` → DNS /
   Nameservers), crie um registro **NS** para o host `api` apontando pros 2
   nameservers que a Cloudflare deu no passo 2. Isso delega só esse subdomínio
   pra Cloudflare — o resto do domínio continua na Hostinger normalmente. Se a
   Hostinger não deixar criar um registro NS pra um subdomínio específico pela
   interface normal de DNS, procure por "delegação de subdomínio" no suporte
   deles, ou me avisa que a gente vê uma alternativa.
4. 👤 De volta na Cloudflare, adicione um registro **A**: `api` → `76.13.172.219`,
   com o proxy (ícone de nuvem) **ativado** (laranja) — é isso que faz a
   Cloudflare terminar o TLS público de verdade.
4.1. 👤 **Importante**: por padrão a Cloudflare tenta falar com a origem na
   porta 443 — que na nossa VPS é do Plane, não da nossa API. Em Rules →
   Origin Rules, crie uma regra: quando hostname = `api.pedrolopes.tech`,
   reescrever a porta de destino pra `8443`. Sem isso a Cloudflare bate na
   porta errada.
5. 👤 Em SSL/TLS → Overview, mude o modo de criptografia pra **Full (strict)**.
6. 👤 Em SSL/TLS → Origin Server → "Create Certificate": gera um certificado
   Origin CA (validade de até 15 anos) — me passe o certificado e a chave
   gerados (ou me avisa que colocou os arquivos você mesmo direto na VPS, em
   `/opt/pedro-portfolio/app/certs/cert.pem` e `key.pem`).
7. A partir daí eu troco o certificado autoassinado atual pelo Origin CA no
   Caddyfile e reinicio o proxy — a API passa a responder com um certificado
   público de verdade em `https://api.pedrolopes.tech` (sem porta na URL,
   já que a Cloudflare expõe na 443 padrão e conversa com a VPS na 8443 por
   trás).
