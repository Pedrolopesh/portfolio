import type { BlogPost } from "../types";

export const triper: BlogPost = {
  slug: "triper-estudando-nextjs-e-animacoes-css",
  title: "Triper: o site de viagens que construí para aprender Next.js e animações CSS",
  excerpt:
    "Um projeto de estudo com conteúdo fictício e objetivo real: entender renderização no servidor, performance e como animar uma página sem pesar a navegação.",
  coverImage: "/img/projects/banner/project_gallery_banner_5.png",
  tags: ["Next.js", "React", "CSS", "Animações"],
  category: "projetos-pessoais",
  publishedAt: "2026-11-14",
  content: `
O Triper é um site de viagens — mas viagem foi só o pretexto. Eu queria aprofundar três coisas: **Next.js**, **animações CSS** e **código limpo**. Todo o conteúdo do site é ilustrativo; o que importava era o que acontecia por baixo.

## O contexto

O Next.js resolve problemas que o React puro deixa para você: renderização no servidor e geração de páginas estáticas, que ajudam na performance e na experiência de navegação. Eu já tinha lido sobre isso, mas queria entender na prática *por que* e *quando* cada abordagem faz diferença.

## Os desafios

- **Animar sem atrapalhar.** Animação bonita que trava a rolagem é pior do que nenhuma animação.
- **Decidir quando animar.** Nem todo elemento precisa se mexer, e o momento da animação muda a percepção da página.
- **Organizar o código** como num projeto profissional, mesmo sendo um projeto de estudo.

## O que eu construí

Um site em Next.js com animações de elementos da página e **keyframes** para movimentos personalizados, deixando a navegação mais fluida e suave. Segui padrões de organização de código e documentação e, depois, comparei o resultado com aplicações reais do mercado para ver onde eu estava acertando e onde podia melhorar.

![O site do Triper](/img/projects/exemple/tripper_web_site.png)

## O que aprendi

- Next.js muda a forma de pensar performance: o que pode ser gerado antes, deve ser.
- Animação é design de tempo — a lógica de *quando* algo se move importa tanto quanto *como*.
- Projeto de estudo também merece código limpo; é nele que os bons hábitos se formam.

## O resultado

O Triper virou meu laboratório: de tempos em tempos volto nele para melhorar visual, performance e navegação, comparando o antes e o depois. E ele ainda me serve de referência para dúvidas do dia a dia. Veja em [tripper-landing.netlify.app](https://tripper-landing.netlify.app).
`,
};

export const theChat: BlogPost = {
  slug: "the-chat-comunicacao-em-tempo-real-com-socket-io",
  title: "The Chat: aprendendo comunicação em tempo real com Socket.IO",
  excerpt:
    "Um chat construído do zero para entender backend e tempo real: sessões com Socket.IO, rotas protegidas por token e upload de imagens com Express.",
  coverImage: "/img/projects/banner/project_gallery_banner_2.png",
  tags: ["Node.js", "Socket.IO", "Express", "Backend"],
  category: "projetos-pessoais",
  publishedAt: "2026-11-14",
  content: `
O The Chat foi meu projeto para estudar **backend** com um foco específico: **comunicação em tempo real**. A inspiração veio dos apps que todo mundo usa — Telegram, WhatsApp e outros mensageiros —, observando o comportamento deles e tentando reproduzir a lógica por trás.

## O contexto

Num chat, o usuário espera que a mensagem chegue *agora*. Isso muda tudo em relação a uma API tradicional, em que o cliente pergunta e o servidor responde: aqui, o servidor também precisa avisar o cliente quando algo novo acontece.

## Os desafios

- **Sessões em tempo real.** Implementar o **Socket.IO** para criar uma sessão em que dois usuários logados ao mesmo tempo pudessem trocar mensagens.
- **Upload de imagens** e comunicação com o banco de dados usando **Express** como framework do Node.js.
- **Segurança.** Proteger as rotas do sistema em todos os momentos com **autenticação por token**.

## O que eu construí

Um sistema que armazena os dados dos usuários e permite cadastro, login e acesso às mensagens por uma interface web. No backend, rotas seguras e comunicação constante com o banco e com as sessões do Socket.IO; no frontend, as telas para os usuários se cadastrarem, entrarem e conversarem em tempo real.

![O The Chat](/img/projects/exemple/the_chat_web_site.png)

## O que aprendi

- Tempo real é outro modelo mental: eventos no lugar de requisições.
- Autenticação não é um detalhe para depois — ela atravessa todas as rotas e todas as conexões.
- Um sistema "relativamente simples" por fora pode exigir várias tecnologias bem integradas por dentro.

## O resultado

O chat funciona com dois usuários conversando em tempo real e segue recebendo melhorias no frontend e no backend. O próximo passo planejado é um site de apresentação, para que novas pessoas conheçam o projeto antes de se cadastrar. Teste em [thechat-app.netlify.app](https://thechat-app.netlify.app).
`,
};

export const petSystem: BlogPost = {
  slug: "petsystem-meu-primeiro-projeto",
  title: "PetSystem: meu primeiro projeto, um ERP de pet shop sem frameworks",
  excerpt:
    "Antes de React, Vue ou Next.js, teve o PetSystem: um sistema de pet shop feito só com o básico da web. O que ele me ensinou ainda vale hoje.",
  coverImage: "/img/projects/banner/project_gallery_banner_12.png",
  tags: ["HTML", "CSS", "JavaScript", "Fundamentos"],
  category: "projetos-pessoais",
  publishedAt: "2026-11-14",
  content: `
Todo dev tem um primeiro projeto. O meu foi o **PetSystem**, feito quando eu ainda estava entendendo como o mundo do desenvolvimento funcionava. Em vez de ir direto para os frameworks do momento, decidi me concentrar no básico: **programação e estilização com as tecnologias nativas da web**.

## O contexto

A ideia era um **ERP para pet shop**: um sistema em que o dono da loja pudesse cadastrar produtos, registrar compras e vendas e ter controle do negócio. Ambicioso para um primeiro projeto — e foi exatamente isso que o tornou tão útil para aprender.

## Os desafios

- **Fazer tudo sem frameworks.** Cada tela, cada interação e cada regra precisou ser escrita do zero.
- **Guardar dados sem banco de dados.** O projeto não tem backend: as informações ficam salvas apenas no navegador, por um período, e depois são apagadas.
- **Organizar um sistema com muitas funcionalidades** quando eu ainda estava aprendendo a organizar código.

## O que eu construí

Um sistema com cadastro de produtos, controle de compras e vendas e outras funcionalidades típicas de gestão de um pet shop, todo feito com as tecnologias base da web e com os dados vivendo no próprio navegador.

![O PetSystem](/img/projects/exemple/pet_system_web_site.png)

## O que aprendi

- Os fundamentos são o que sobra quando os frameworks mudam — e eles mudam o tempo todo.
- Escrever "na mão" o que um framework faria me ajudou a entender *por que* os frameworks existem.
- Escopo é uma escolha: um ERP inteiro é complexo demais para um primeiro projeto, e isso também é aprendizado.

## O resultado

O PetSystem não teve continuação, justamente pela complexidade do que foi implementado. Mas ele segue sendo uma fonte de consulta: volto nele para rever boas práticas e funcionalidades que podem ser reaproveitadas em projetos do dia a dia. Está no ar em [pet-sytem.netlify.app](https://pet-sytem.netlify.app/pet-system-website/home/home).
`,
};
