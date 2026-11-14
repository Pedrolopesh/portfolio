import type { BlogPost } from "../types";

export const linkLeito: BlogPost = {
  slug: "link-leito-tecnologia-contra-filas-em-hospitais",
  title: "Link Leito: o que aprendi tentando reduzir filas de hospital na pandemia",
  excerpt:
    "Um software para medir e reduzir o tempo de espera em hospitais durante a COVID-19. A tecnologia funcionou — o maior desafio foi outro.",
  coverImage: "/img/projects/banner/project_gallery_banner_3.png",
  tags: ["Saúde", "Produto", "Dados", "Senai"],
  category: "faculdade",
  publishedAt: "2026-11-14",
  content: `
O Link Leito nasceu quando eu estudava no **Senai de Florianópolis** e a pandemia de COVID-19 se espalhava pelo mundo. Com UTIs superlotadas, a pergunta era direta: dá para usar tecnologia para diminuir o tempo de espera dos pacientes no hospital?

## O contexto

Trabalhamos junto com os funcionários da emergência de um hospital, acompanhando todo o caminho do paciente — da entrada até a alta. A ideia era enxergar onde o processo de internação tinha erros e demoras excessivas, validando cada passo com quem ia usar o software no dia a dia.

## Os desafios

- **Validar em plena pandemia.** O distanciamento social tornou difícil algo essencial: conversar presencialmente com a equipe do hospital. Mesmo assim, mantivemos as validações.
- **Transformar rotina em dado.** Quanto tempo um paciente espera para ser atendido? Quanto tempo leva para um leito ser limpo e voltar a ficar disponível? Ninguém tinha esses números à mão.
- **Adesão.** De longe, o maior desafio: fazer a equipe do hospital adotar uma ferramenta nova no meio da maior crise de saúde das últimas décadas.

## O que eu construí

Construímos um sistema que captava as métricas de tempo de cada etapa do atendimento e as transformava em um **painel administrativo com área de relatórios**. Com ele, o gestor do hospital conseguia enxergar os gargalos e adaptar melhor a equipe de profissionais.

![O painel do Link Leito](/img/projects/exemple/link_leito_web_site.png)

## O que aprendi

> Um software só resolve um problema quando as pessoas escolhem usá-lo.

- Entender o processo a fundo não garante adoção. Mudança de hábito é um problema de produto, não de código.
- Métricas simples (tempo de espera, tempo de limpeza de leito) já mudam conversas de gestão.
- Projetos com propósito real ensinam mais do que qualquer exercício — inclusive quando não terminam como planejado.

## O resultado

Ao longo das validações, vimos melhorias constantes e o projeto cresceu bastante. Mas o hospital acabou seguindo por outro caminho, e a dificuldade de adesão contribuiu para que o Link Leito fosse **desativado temporariamente**.

Ele não foi esquecido: o projeto teve relatos na mídia e virou estudo de caso em trabalhos da universidade. Para mim, segue sendo o projeto que mais me ensinou sobre a distância entre "funciona" e "é usado".

O protótipo ainda pode ser visto em [linkleitoweb.netlify.app](https://linkleitoweb.netlify.app/#/).
`,
};

export const questGame: BlogPost = {
  slug: "quest-game-pontuacao-por-dificuldade",
  title: "Quest Game: criando um quiz competitivo com pontuação por dificuldade",
  excerpt:
    "Um jogo de perguntas e respostas feito para a faculdade, com ranking, login só com nickname e um sistema de pontos que recompensa perguntas difíceis.",
  coverImage: "/img/projects/banner/project_gallery_banner_4.png",
  tags: ["Vue.js", "Node.js", "Express", "Gamificação"],
  category: "faculdade",
  publishedAt: "2026-11-14",
  content: `
O Quest Game começou como um trabalho das aulas de **engenharia de software** da faculdade. A partir de um documento de requisitos entregue em aula, o desafio era construir um modelo competitivo de perguntas e respostas — pensado para estudantes que se preparam para o vestibular.

## O contexto

Em jogo de quiz, a barreira de entrada mata a diversão: se a pessoa precisa criar conta, confirmar e-mail e preencher perfil, ela desiste antes da primeira pergunta. Ao mesmo tempo, competição precisa de identidade — sem ela, não existe ranking.

## Os desafios

- **Entrar rápido, competir de verdade.** O equilíbrio veio do **acesso só com nickname**: sem cadastro prévio, mas com um nome para aparecer no ranking.
- **Pontuação justa.** Acertar uma pergunta fácil não pode valer o mesmo que acertar uma difícil.
- **Manter o ranking consistente** conforme as pontuações são acumuladas.

## O que eu construí

Um sistema em que cada resposta certa soma pontos para o jogador subir no ranking, com **pontuações diferentes por nível de dificuldade**: quanto mais difícil a pergunta, mais pontos para quem acerta. O frontend foi feito em **Vue.js** e o backend em **Node.js com Express**.

![O Quest Game](/img/projects/exemple/quest_game_web_site.png)

## O que aprendi

- Regras de gamificação são regras de negócio: precisam ser pensadas, documentadas e testadas como qualquer outra.
- Reduzir atrito (nickname em vez de cadastro) é uma decisão de produto com impacto direto no engajamento.
- Construir frontend e backend do mesmo projeto me deu uma visão completa de como as decisões de um lado afetam o outro.

## O resultado

O jogo atendeu aos requisitos da disciplina e **continua no ar, gratuito**, para quem quiser testar os conhecimentos: [quest-game.netlify.app](https://quest-game.netlify.app).
`,
};

export const communityAlert: BlogPost = {
  slug: "community-alert-ux-para-alertas-de-catastrofes",
  title: "Community Alert: desenhando um app de alerta de catástrofes com as regras de Shneiderman",
  excerpt:
    "Um estudo de UX/UI para avisar comunidades sobre desastres ecológicos — e como as 8 regras de ouro de Shneiderman guiaram cada tela.",
  coverImage: "/img/projects/banner/project_gallery_banner_7.png",
  tags: ["UX/UI", "Figma", "Design", "Mobile"],
  category: "faculdade",
  publishedAt: "2026-11-14",
  content: `
O Community Alert foi uma proposta das aulas de **projeto de interface** da faculdade: desenhar um aplicativo capaz de alertar a comunidade sobre eventuais **catástrofes ecológicas**. Um app em que, se a interface falha, a informação chega tarde.

## O contexto

Antes de abrir o Figma, fizemos reuniões e planejamento para listar as necessidades do aplicativo e escolher o design system mais adequado para desenhar as telas. A pergunta que guiou tudo: o que a pessoa precisa saber, e em quanto tempo, quando recebe um alerta?

## Os desafios

- **Urgência sem pânico.** A tela precisa chamar atenção para o que importa sem gerar confusão.
- **Hierarquia visual.** Posição, tamanho e aparência dos componentes mudam o impacto que eles causam no usuário.
- **Consistência** entre telas, para que a pessoa não precise reaprender o app numa situação de estresse.

## O que eu construí

Um conjunto de telas mobile pensadas exclusivamente para resolver esse problema, com a disposição de cada componente escolhida pelo impacto que deveria causar. O guia para essas decisões foram as **Regras de Ouro de Shneiderman** — princípios como consistência, feedback informativo e redução da carga de memória do usuário.

![Telas do Community Alert](/img/projects/exemple/project_04.png)

## O que aprendi

- Princípios clássicos de interface continuam atuais: as regras de Shneiderman resolvem problemas que eu teria levado muito mais tempo para descobrir sozinho.
- Desenhar antes de codar economiza retrabalho — e me deu outra perspectiva sobre a primeira etapa da criação de um produto.
- Em apps críticos, cada pixel tem uma função.

## O resultado

O projeto ficou no Figma, como telas de UI, com o objetivo de praticar boas práticas de design e UX. O estudo completo está no [Behance](https://www.behance.net/gallery/127210581/Community-Alert).
`,
};

export const matchCoder: BlogPost = {
  slug: "match-coder-um-tinder-para-vagas-de-ti",
  title: "Match Coder: e se encontrar vaga em TI funcionasse como um match?",
  excerpt:
    "Um protótipo de app em que empresas e devs dão match — e o que personas me ensinaram sobre desenhar para dois públicos ao mesmo tempo.",
  coverImage: "/img/projects/banner/project_gallery_banner_9.png",
  tags: ["UX/UI", "Figma", "Personas", "Requisitos"],
  category: "faculdade",
  publishedAt: "2026-11-14",
  content: `
O Match Coder nasceu nas aulas de **engenharia de requisitos de software**. A proposta: um aplicativo mobile em que **desenvolvedores e empresas dão match** — como no Tinder — para aproximar profissionais de TI das vagas certas e incentivar a contratação na área.

## O contexto

Recrutamento em tecnologia tem atrito dos dois lados: empresas recebem candidatos fora do perfil, e candidatos se aplicam para vagas que não combinam com eles. O "match" resolve isso exigindo interesse mútuo antes da conversa começar.

## Os desafios

- **Dois públicos, um app.** O que a empresa precisa ver é diferente do que o candidato precisa ver — e os dois usam o mesmo produto.
- **Saber para quem desenhar.** Sem entender os usuários, qualquer tela é chute.
- **Clareza e acessibilidade** em telas pequenas, com bastante informação de perfil.

## O que eu construí

Junto com a equipe, fizemos uma **análise de personas** para conhecer quem usaria o app. Isso definiu quais componentes usar e como organizá-los nas telas. A partir daí, produzi diversas telas que traduzem a necessidade inicial: empresas encontrando profissionais com o perfil certo, e candidatos encontrando empresas que combinam com eles.

![Telas do Match Coder](/img/projects/exemple/project_05.png)

## O que aprendi

- **Personas não são burocracia**: foi a partir delas que as decisões de tela pararam de ser opinião.
- Boas práticas de protótipo (clareza visual, estética a serviço da função) deixam a interface mais acessível.
- Ampliei minha visão de design — e passei a enxergar melhor o trabalho de quem desenha antes de mim nos projetos.

## O resultado

O projeto foi feito no Figma, como telas de UI, para praticar design e UX. As telas estão no [Behance](https://www.behance.net/gallery/127211141/Match-Coder).
`,
};

export const petCare: BlogPost = {
  slug: "pet-care-ux-para-ongs-de-protecao-animal",
  title: "Pet Care: técnicas de UX para um sistema de ONGs de proteção animal",
  excerpt:
    "Protótipo de um sistema para ONGs que acolhem animais — e as técnicas de design que usei para deixá-lo intuitivo, como ações fáceis de desfazer.",
  coverImage: "/img/projects/banner/project_gallery_banner_11.png",
  tags: ["UX/UI", "Figma", "Requisitos", "Design"],
  category: "faculdade",
  publishedAt: "2026-11-14",
  content: `
Nas aulas de **engenharia de requisitos**, minha equipe recebeu o desafio de prototipar um sistema de gerenciamento para **ONGs de acolhimento e proteção de animais**.

## O contexto

Em sessões de brainstorming, levantamos quem usaria o sistema e quais eram suas dores. A principal: o **processo de alerta de animais abandonados**. Como fazer esses alertas chegarem a mais gente — tanto para animais em risco quanto para os que já foram resgatados e podem ser adotados por novas famílias?

## Os desafios

- **Divulgação ampla.** O valor do sistema dependia de os alertas alcançarem muitas pessoas.
- **Usuários sob pressão.** Quem opera uma ONG costuma fazer muita coisa ao mesmo tempo, e o sistema não pode exigir atenção extra.
- **Dividir bem o trabalho em equipe**, entre documentação de requisitos e desenho das telas.

## O que eu construí

Enquanto parte da equipe se concentrou na documentação, eu fiquei responsável por **traduzir os requisitos em telas no Figma**. Para manter o design intuitivo e fluido, apliquei técnicas como:

- **Diálogos que indicam o fim de uma ação**, para o usuário saber que deu certo;
- **Fácil reversão de ações**, para errar não custar caro;
- **Redução da carga de memória de curta duração**, mostrando a informação na hora em que ela é necessária.

![Telas do Pet Care](/img/projects/exemple/project_06.png)

## O que aprendi

- Requisitos bem levantados são o melhor briefing de design que existe.
- Técnicas de usabilidade pequenas (um feedback, um "desfazer") mudam completamente a sensação de usar um sistema.
- Dividir papéis na equipe, com uma boa comunicação entre eles, acelera tudo.

## O resultado

O projeto ficou em Figma, como prática de design e UX, e o estudo está no [Behance](https://www.behance.net/gallery/127210829/Pet-care).
`,
};
