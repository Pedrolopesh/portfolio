# Rascunhos do blog

Esta pasta guarda rascunhos **locais**: tudo aqui (menos este README) é
ignorado pelo git, então nunca vai pro repositório público nem pra produção.

- Aparecem em `/blog` só quando o site roda com `next dev`, com o selo
  **Rascunho**.
- No build de produção não são lidos (ver `src/content/blog/drafts.ts`).

## Formato

Um arquivo `.md` por post — o nome do arquivo vira o slug
(`meu-post.md` → `/blog/meu-post`):

```md
---
title: Título do post
excerpt: Resumo de uma ou duas frases
category: trabalho | projetos-pessoais | faculdade | artigos
tags: React, Next.js, Carreira
coverImage: /img/alguma-imagem.webp
---
## O contexto
...
```

O corpo usa o mesmo markdown dos posts publicados: `##`/`###`, parágrafos,
listas `- `, citações `> `, imagens `![alt](src)`, **negrito**, `código` e
[links](https://exemplo.com).

## Publicar

Quando o texto estiver pronto, mova-o para um post local em
`src/content/blog/posts/` (e inclua em `LOCAL_POSTS`) ou publique pela API
do blog. Todo post segue a estrutura: contexto → desafios → o que eu
construí → o que aprendi → resultado.
