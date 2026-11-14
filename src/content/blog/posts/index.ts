import type { BlogCategory, BlogPost } from "../types";
import { blueToken, electrolux, genesisBank, toroToken } from "./trabalho";
import { communityAlert, linkLeito, matchCoder, petCare, questGame } from "./faculdade";
import { petSystem, theChat, triper } from "./pessoais";

/**
 * Posts locais, na ordem em que aparecem no blog. Pra adicionar um post:
 * crie o objeto num dos arquivos desta pasta e coloque-o nesta lista.
 * (Posts publicados pela API aparecem automaticamente, antes destes.)
 */
export const LOCAL_POSTS: BlogPost[] = [
  electrolux,
  linkLeito,
  genesisBank,
  theChat,
  triper,
  questGame,
  blueToken,
  toroToken,
  petSystem,
  communityAlert,
  matchCoder,
  petCare,
];

/** Ordem das categorias no filtro do blog (nomes e descrições ficam nas
 *  traduções: blog.categories.<id>). */
export const CATEGORY_ORDER: BlogCategory[] = [
  "trabalho",
  "projetos-pessoais",
  "faculdade",
  "artigos",
];
