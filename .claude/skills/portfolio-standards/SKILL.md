---
name: portfolio-standards
description: Padrões obrigatórios do portfólio pedrolopes.tech — design (tokens, cards, seções), animações e UX (Reveal, spotlight, scroll suave), conteúdo (blog, rascunhos, projetos, logos, i18n), segurança mínima (CSP, links externos, input) e o fluxo de entrega (PR → merge → verificar produção). Use ANTES de criar ou alterar qualquer página, componente, texto, post, projeto ou configuração deste repositório.
---

# Padrões do portfólio (pedrolopes.tech)

Leia inteiro antes de mexer no projeto. Tudo aqui já foi decidido com o dono do
portfólio — siga sem perguntar de novo; só pergunte o que não estiver coberto.

## 1. Stack e mapa do projeto

- **Next.js 16, Pages Router** (não App Router). Antes de usar uma API do Next,
  confira `node_modules/next/dist/docs/` (há mudanças em relação ao que você
  conhece). Tailwind v4 com tokens em `src/styles/globals.css` (`@theme`).
- **i18n**: `react-i18next`, traduções em `public/lang/{pt,en}/translation.json`,
  importadas no bundle (`_app.tsx`). Todo texto de interface tem PT **e** EN.
  Elas são carregadas em todas as páginas: remova chaves que ficarem órfãs.
- **Deploy**: Vercel, a partir do `master`. API do blog é outro repositório
  (`../pedro-portfolio-backend`, NestJS + Prisma, `api.pedrolopes.tech`).

| O quê | Onde |
|---|---|
| Projetos (fonte única, PT/EN) | `src/content/projects.ts` |
| Landing de projetos | `src/pages/Project.tsx` + `src/components/Projects/*` |
| Números do GitHub (snapshot) | `src/content/github-stats.json` ← `node scripts/update-github-stats.mjs` |
| Linhas de código (snapshot) | `src/content/code-stats.json` ← `node scripts/update-code-stats.mjs` (lê repositórios locais; e-mails em `scripts/.code-stats.local.json`, fora do git) |
| Blog: dados (locais + API + rascunhos) | `src/content/blog/api.ts`, `posts/`, `drafts.ts` |
| Blog: páginas | `src/pages/blog/index.tsx`, `src/pages/blog/[slug].tsx` |
| Retrato foto ⇄ código | `src/components/Home/HomeBanner/CodePortrait.tsx` |
| Animações reutilizáveis | `src/components/ui/Reveal.tsx`, `src/components/ui/useSpotlight.ts`, `src/styles/animations.css` |
| Headers de segurança, CSP e redirects | `next.config.js` |
| Plano/histórico do projeto | `PLANO-EVOLUCAO.md` |

## 2. Design

- **Paleta (tokens)**: `bg` #0A101E, `surface` #10182B, `border`, `ink` (texto),
  `ink-muted`, `brand-from` #6EC3F0 → `brand-to` #2F6FEF. Use as classes
  (`bg-surface`, `text-ink-muted`, `from-brand-from`…), nunca cores soltas — a
  exceção é a cor própria de um projeto (`accent`) e o roxo do Next Journey.
- **Fonte**: Poppins (300–700), carregada em `_document.tsx`. Código/rótulos em mono.
- **Largura**: conteúdo em `mx-auto max-w-6xl px-6 sm:px-10`; texto longo em `max-w-3xl`.
- **Seção padrão**: rótulo mono `// nome` em `text-brand-from` → `h2` bold → texto
  `text-ink-muted`. Abertura de página com grade sutil (linear-gradient 48px com
  `maskImage` radial) e um brilho `bg-brand-to/20 blur-[120px]`.
- **Cards**: `rounded-2xl`/`rounded-3xl`, `border border-border bg-surface`,
  hover com `-translate-y-0.5/1` + `border-brand-from/50`. Grades em
  `sm:grid-cols-2 lg:grid-cols-3`, alturas iguais (`h-full` no card e no wrapper).
- **Botões**: primário = pill com gradiente da marca; secundário = pill com borda.
- **Selos**: status (`No ar` verde, `Em desenvolvimento` âmbar, `Arquivado`/`Conceito`
  neutro), `Novo` azul, `Rascunho` âmbar.
- **Identidade própria**: código/terminal (o retrato vira código, rótulos `// x`,
  janelas de terminal, molduras de navegador, filtros como pastas `trabalho/`).
  Referências (apps.oprimo.dev, rubenmarcus.dev, jonathannwokolo.com) são só
  inspiração: o dono reprovou um layout "muito igual" ao oprimo — **não replique
  estrutura nem visual** de referência; reinterprete na linguagem do site.
- **/Project** hoje: abertura + terminal com números (CountUp) → faixa
  "capítulo atual" do Next Journey → "No ar agora" em zigue-zague com moldura de
  navegador → "Arquivo" em lista com filtro por pasta.
- **Linhas de código ao vivo** (`<LiveCounter>`): alvo = total real do snapshot +
  média diária do último ano × dias desde a contagem; pula a cada ~0,7–1,5s
  (+1…+37, às vezes −1…−9) preso numa faixa estreita em volta do alvo. Conta só
  extensões de código (sem .md/.json/gerados), commits únicos, sem merges.
  Atualize o snapshot de tempos em tempos rodando o script e commitando o JSON.
- **Números do GitHub**: rode `node scripts/update-github-stats.mjs` (usa `gh auth
  token`) e commite o JSON. "Contribuições" = gráfico do perfil (inclui privados;
  não chamar só de "commits", o GitHub não separa os tipos nos privados).

## 3. Movimento e UX

- **Entrada de elementos**: envolva com `<Reveal>` (fade + subida de 16px,
  0.7s, `cubic-bezier(0.22,1,0.36,1)`). Em listas, escalone: `delay={(i % 3) * 70}`.
  `Reveal` já não esconde nada sem JS, não pisca o que está visível na carga e
  respeita `prefers-reduced-motion` — não reimplemente isso à mão.
- **Cursor**: cards interativos usam `className="spotlight"` + `onPointerMove={useSpotlight()}`
  e `style={{ "--spot": cor }}`. Só aparece em dispositivos com hover.
- **Scroll**: suave em âncoras (com `scroll-padding-top` do header fixo). Não
  sequestre a rolagem (sem "smooth scroll" com inércia via JS).
- Animações contínuas pausam fora da tela (IntersectionObserver) e respeitam
  movimento reduzido. Nada de alert/confirm/prompt.
- **Mídia pesada sob demanda**: embeds (YouTube) só carregam no clique,
  usando `youtube-nocookie`.
- Páginas novas seguem o visual do site — inclusive erro (`src/pages/404.tsx`).
- Acessibilidade: links são `<Link>`/`<a>` (nunca botão com `router.push`),
  `aria-label` em botões só com ícone, `role="tab"`/`aria-selected` em filtros.

## 4. Conteúdo

- **Nunca invente fatos** (números, stack, resultados, cargos). Use o que está
  no repositório, nos sites públicos ou no que o dono escreveu. Se faltar, deixe
  um item de roteiro pedindo a informação — não preencha com suposição.
- **Posts do blog** seguem sempre: *O contexto → Os desafios → O que eu construí →
  O que aprendi → O resultado*, em primeira pessoa, PT. Markdown suportado: ver
  `src/components/Blog/Markdown.tsx`.
- **Rascunhos** ficam em `src/content/blog/drafts/*.md` (ignorados pelo git;
  formato no README da pasta). Aparecem só em `next dev`, nunca em produção.
  Conteúdo opinativo sobre clientes/empresas só como rascunho até o dono revisar.
- **Projetos**: adicione em `src/content/projects.ts` (tagline PT/EN, categoria,
  status, plataformas, stack, `url`, `blogSlug`, `icon`, `image`, `accent`,
  `role`). Toro, BLUE e Genesis Bank ficam só no blog. O destaque é o Next Journey.
- **Papéis do Pedro** (campo `role`, mostrado nos cards): **We Tech Hub** é a
  empresa dele (Fundador) — serviços de software (chatbots, agentes de IA, sites,
  apps). **We Party**: Fundador. **Lelume** e **Ateliê Maria Mariana**: clientes —
  "Tecnologia por We Tech Hub" (não usar "CTO"). **BDR APP**: Contribuidor
  (projeto de um amigo). Ao citar o governo do ES: "Portal Único do Espírito Santo".
- **Imagens**: WebP, em `public/img/projects/live/`. Print de site 960×600
  (q≈82); ícone/logo 192×192. Sempre o **logo real** do projeto (repositório local
  em `~/Documents/we-tech-hub/...`, `public/` do projeto, manifest/favicon do site
  público) — monograma só como último recurso.
- **Licenças**: a arte do Next Journey usa LPC (exige crédito) — no portfólio use
  só o ícone do app. Não publique arte de terceiros sem checar a licença.
- Dados pessoais/sensíveis (e-mail, IPs, chaves, dados de clientes) não vão para
  o repositório, que é **público**.

## 5. Segurança mínima

- **CSP** em `next.config.js` (só produção). Adicionou um serviço externo
  (fonte, embed, imagem remota, analytics)? Inclua a origem na diretiva certa e
  teste com `next start` (ver §6) — sem isso ele quebra só em produção.
- Headers já ativos: CSP, `X-Frame-Options`, `nosniff`, `Referrer-Policy`,
  `Permissions-Policy`, HSTS; `poweredByHeader: false`. Não remova.
- Links externos: `target="_blank" rel="noopener noreferrer"`; nunca
  `window.open` sem `noopener`. URLs vindas de conteúdo passam por `safeHref`.
- Nada de `dangerouslySetInnerHTML`. Entrada do usuário: validar tamanho/formato
  e escapar antes de inserir em HTML (ver `src/pages/api/send.js`).
- Segredos só em variáveis de ambiente (`.env`, Vercel); nunca no código.
- Rotas novas de API: método permitido, validação, rate limit simples.

## 6. Verificação antes de entregar

```bash
./node_modules/.bin/tsc --noEmit
./node_modules/.bin/eslint .
./node_modules/.bin/next build
PORT=3124 ./node_modules/.bin/next start --port 3124 &   # produção local (CSP ativa)
python3 scripts/check-pages.py http://localhost:3124      # erros, CSP, reveals
```

- Use `./node_modules/.bin/next`, não `npx next` (um wrapper de shell intercepta
  `npx next`). A porta 3000 costuma estar ocupada pelo VS Code — use 3123/3124.
- Confira **visualmente** (Playwright/print) desktop 1440px e mobile 390px das
  páginas alteradas: textos, alinhamentos, sobreposições, imagens.
- Depois do `next build`, reinicie o `next start` (o antigo serve HTML com CSS
  de outro build).

## 7. Fluxo de entrega (autorizado pelo dono)

1. Branch a partir do `master` atualizado: `feat/...`, `fix/...`, `docs/...`.
2. Commits pequenos, mensagem em PT (`feat: ...`), com a linha de atribuição da sessão.
3. `gh pr create` com corpo em PT: **O que muda** + **Verificação**.
4. Esperar CI (`build`) e preview da Vercel passarem: `gh pr checks <n> --watch`.
5. `gh pr merge <n> --merge` (merge commit, padrão do repositório).
6. Acompanhar o deploy do commit de merge (status `Vercel` = success) e rodar
   `python3 scripts/check-pages.py https://www.pedrolopes.tech`.
7. `git switch master && git pull --ff-only`.
8. Atualizar `PLANO-EVOLUCAO.md` quando a mudança for estrutural.

Não inclua no PR: rascunhos do blog, `.env`, `next-env.d.ts` alterado pelo
`next dev`. O bloco entre `<!-- BEGIN/END:nextjs-agent-rules -->` do
`AGENTS.md` é gerado pelo Next — escreva fora dele.
