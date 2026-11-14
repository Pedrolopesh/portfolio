import type { BlogPost } from "../types";

export const electrolux: BlogPost = {
  slug: "migrando-a-loja-da-electrolux-para-vtex-io",
  title: "Migrando a loja da Electrolux para VTEX IO sem parar de vender",
  excerpt:
    "Como foi trocar a base de uma das maiores lojas de eletroportáteis do Brasil — página por página, de olho na conversão — e o que isso me ensinou sobre migrações.",
  coverImage: "/img/projects/banner/project_gallery_banner_1.png",
  tags: ["VTEX IO", "E-commerce", "Frontend", "Migração"],
  category: "trabalho",
  publishedAt: "2026-11-14",
  content: `
A Electrolux está no Brasil desde 1926 e vende milhares de produtos por ano. Quando entrei no time de engenharia que atende a loja online, a missão era grande e nada glamourosa: tirar a loja de uma versão antiga do VTEX (o modelo CMS tradicional) e levá-la para o **VTEX IO**, a arquitetura headless da plataforma.

## O contexto

Uma loja desse tamanho não pode simplesmente "sair do ar para manutenção". Cada página é receita. E uma marca centenária tem uma expectativa de experiência que não combina com bugs visuais ou fluxos de compra quebrados no meio da transição.

## Os desafios

- **Migrar sem big bang.** Trocar tudo de uma vez seria o caminho mais rápido no papel e o mais arriscado na prática.
- **Medir se a mudança era boa.** Não bastava a página nova funcionar: ela precisava converter pelo menos tão bem quanto a antiga.
- **Conviver com duas stacks ao mesmo tempo.** Durante meses, parte da loja rodava no modelo antigo e parte no novo.

## O que eu construí

A estratégia foi gradual: migrávamos uma ou duas páginas para o VTEX IO, observávamos como o público reagia e acompanhávamos as conversões antes de seguir para as próximas. Meu trabalho como engenheiro de software foi construir essas novas páginas no modelo headless e participar dessa análise de cada etapa.

![A loja da Electrolux depois da migração](/img/projects/exemple/electrolux_web_site.png)

## O que aprendi

> Migração boa é a que o cliente nem percebe — ele só sente que a loja ficou melhor.

- Migrar em pedaços pequenos transforma um projeto assustador numa sequência de decisões fáceis de validar (e de desfazer).
- Métrica de negócio (conversão) é o critério de pronto de verdade, não "funciona na minha máquina".
- Paciência é técnica: segurar a vontade de acelerar foi o que manteve a loja estável.

## O resultado

A migração foi concluída e a nova loja ficou no ar para todos os clientes. O objetivo de aumentar a conversão de vendas foi alcançado, e a loja passou a ser mais performática, com uma experiência diferente do que o mercado de eletroportáteis oferecia.

Depois disso, segui no squad de **Web Experience**, trabalhando em melhorias contínuas na experiência de quem navega pela loja — a parte do trabalho que nunca termina, e ainda bem.

Quer ver a loja? Está em [loja.electrolux.com.br](https://loja.electrolux.com.br/).
`,
};

export const genesisBank: BlogPost = {
  slug: "reconstruindo-o-app-da-genesis-bank",
  title: "Reconstruindo o app mobile de um banco B2B, da tela de login ao pagamento",
  excerpt:
    "Bastidores da reconstrução do aplicativo da Genesis Bank: transformar o design do time de UX em telas reais, do login ao fluxo de pagamento.",
  coverImage: "/img/projects/banner/project_gallery_banner_10.png",
  tags: ["Mobile", "Frontend", "Fintech", "UX"],
  category: "trabalho",
  publishedAt: "2026-11-14",
  content: `
A Genesis Bank é uma plataforma financeira B2B que funciona só por convite. A proposta é ajudar empresários a se formalizar e a se bancarizar: abertura de empresa, contabilidade, pagamento de impostos, aconselhamento jurídico — tudo num lugar só. Entrei como engenheiro de software frontend no projeto de **reconstrução do aplicativo mobile**.

## O contexto

O time de UX/UI tinha desenhado uma nova interface para o app. Meu papel era dar vida a esse design: transformar as telas do Figma em um aplicativo de verdade, que funcionasse bem para pessoas que muitas vezes estão dando os primeiros passos na formalização do próprio negócio.

## Os desafios

- **Fidelidade ao design sem perder usabilidade.** Um layout bonito no Figma precisa continuar bonito com textos longos, telas pequenas e dados reais.
- **Fluxos sensíveis.** Login, cadastro e, principalmente, pagamento são os momentos em que o usuário menos tolera dúvida ou erro.
- **Acessibilidade.** O público é amplo e não necessariamente acostumado com apps financeiros.

## O que eu construí

Comecei pela base do app — **login, cadastro e dashboard** — e fui avançando até o **fluxo de pagamento dentro do aplicativo**. Em cada tela, o foco era manter a consistência visual (espaçamentos, simetria, hierarquia) que o time de design propôs, porque essa consistência é o que faz um app financeiro passar confiança.

![O aplicativo da Genesis Bank](/img/projects/exemple/genesis_bank_web_site.png)

## O que aprendi

- Em produto financeiro, **clareza vale mais que criatividade**: cada tela precisa responder "o que eu faço agora?" sem esforço.
- Trabalhar colado com o time de UX encurta muito o caminho — várias decisões de implementação melhoram o design quando são conversadas cedo.
- Construir na ordem do usuário (entrar → ver a conta → pagar) ajuda a encontrar problemas de fluxo antes deles virarem retrabalho.

## O resultado

A nova interface deixou o app mais acessível e com uma identidade visual mais consistente, para que os usuários se sentissem bem ao usar a ferramenta. O produto seguiu evoluindo com uma equipe dedicada de desenvolvimento e de especialistas em negociação com empresários.

Saiba mais em [genesisbank.com.br](https://www.genesisbank.com.br/).
`,
};

export const blueToken: BlogPost = {
  slug: "explicando-um-token-de-criptomoedas-num-site",
  title: "Como explicar um token de criptomoedas em um site: o caso do BLUE",
  excerpt:
    "O BLUE reúne uma cesta de criptomoedas em um único token. Meu desafio foi construir um site que tornasse isso simples de entender.",
  coverImage: "/img/projects/banner/project_gallery_banner_6.png",
  tags: ["Web3", "Frontend", "Website", "Comunicação"],
  category: "trabalho",
  publishedAt: "2026-11-14",
  content: `
O BLUE é um token digital que representa uma **cesta de criptomoedas**. Criado na Binance Smart Chain (BSC), ele permite que uma pessoa tenha exposição a várias criptomoedas ao mesmo tempo mantendo um único token — diversificação com a conveniência de um ativo só. Participei da construção do produto como engenheiro de software, e a parte que mais marcou foi o **novo website** da marca.

## O contexto

A marca queria uma nova aparência, e o site era a principal porta de entrada para quem ainda não conhecia o BLUE. O problema: o produto é sofisticado, e o público vai de investidores experientes a curiosos que nunca compraram cripto.

## Os desafios

- **Traduzir um conceito técnico** (token lastreado numa cesta, blockchain, regras do contrato) em uma mensagem que qualquer pessoa entenda em poucos segundos.
- **Mostrar funcionalidades e benefícios** sem transformar a página num manual.
- **Passar confiança** num mercado em que desconfiança é o padrão.

## O que eu construí

Um site com foco em apresentar as características do token e dar uma visão ampla das funcionalidades e dos benefícios de ter BLUE — organizado para que a pessoa entenda primeiro *o que é*, depois *por que vale a pena* e só então *os detalhes*.

![O site do BLUE token](/img/projects/exemple/blue_token_web_site.png)

## O que aprendi

- Site de produto financeiro é, antes de tudo, um exercício de **comunicação**. O código serve à mensagem.
- Ordem importa: explicar o conceito antes dos números reduz muito a sensação de "isso não é pra mim".
- Transparência gera confiança — e o próprio BLUE fazia isso fora do site, com relatórios trimestrais de performance para os usuários.

## O resultado

O site entregou a nova cara da marca e virou a vitrine do produto. O BLUE seguiu sendo mantido pela empresa, com os relatórios trimestrais mantendo os usuários atualizados sobre seus investimentos.

Conheça em [bluetoken.io](https://bluetoken.io/homepage).
`,
};

export const toroToken: BlogPost = {
  slug: "site-do-toro-token-produto-em-construcao",
  title: "TORO: construindo o site de um produto que ainda estava nascendo",
  excerpt:
    "Um portfólio tokenizado com estratégias como stop loss e shorting — e um site que precisava apresentar tudo isso enquanto o produto ainda estava em pré-venda.",
  coverImage: "/img/projects/banner/project_gallery_banner_8.png",
  tags: ["Web3", "Frontend", "Website", "Produto"],
  category: "trabalho",
  publishedAt: "2026-11-14",
  content: `
O TORO se apresentava como o primeiro **portfólio tokenizado** do seu tipo: um único token programado para seguir estratégias ativas e passivas em benefício de quem o detém — **stop loss, stop buy, shorting** e distribuições de rede. A ideia era simplificar a montagem de um portfólio de ativos digitais, buscando ganhos e mitigando perdas. Trabalhei como engenheiro de software frontend na criação do **novo website** da marca.

## O contexto

Diferente de um produto pronto, o TORO estava em plena construção e em **pré-venda**. O site precisava apresentar uma proposta ambiciosa e atrair os primeiros usuários, enquanto as funcionalidades ainda estavam sendo desenvolvidas por um time de especialistas em estratégias de mercado de ações e criptomoedas.

## Os desafios

- **Explicar estratégias de trading** (stop loss, shorting…) para quem não opera no mercado todos os dias.
- **Vender o futuro sem prometer demais**: apresentar o que estava por vir de forma clara e honesta.
- **Construir uma identidade nova** para uma marca que ainda estava se formando.

## O que eu construí

Um website focado em mostrar as características do token e dar uma visão ampla das funcionalidades e benefícios para quem adquirisse TORO, com uma aparência nova para a marca.

![O site do TORO token](/img/projects/exemple/toro_token_web_site.png)

## O que aprendi

- Construir para um produto em evolução exige **flexibilidade**: seções e mensagens mudam conforme o produto amadurece, então o site precisa ser fácil de alterar.
- Termos técnicos precisam vir acompanhados do *benefício* que entregam — "stop loss" importa porque protege o investimento.
- Trabalhar em paralelo ao time de produto me ensinou a perguntar cedo "o que já é verdade hoje?" antes de escrever qualquer texto na tela.

## O resultado

O site foi a vitrine da pré-venda e da nova identidade da marca, enquanto o time seguia construindo novas funcionalidades para os usuários.

Veja em [torotoken.io](https://torotoken.io/).
`,
};
