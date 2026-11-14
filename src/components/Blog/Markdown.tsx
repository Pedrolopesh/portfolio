import { Fragment, type ReactNode } from "react";

/**
 * Renderizador de um subconjunto pequeno de Markdown, suficiente pros
 * posts do blog — sem dependência extra e sem `dangerouslySetInnerHTML`
 * (tudo vira elemento React, então conteúdo vindo da API não injeta HTML).
 *
 * Blocos: ## e ### títulos, parágrafos, listas "- ", citações "> ",
 * imagens sozinhas na linha ![alt](src).
 * Inline: **negrito**, *itálico*, `código` e [link](url).
 */

const INLINE = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/g;

const safeHref = (href: string) =>
  /^(https?:|mailto:|\/|#)/i.test(href) ? href : "#";

function inline(text: string): ReactNode[] {
  return text.split(INLINE).map((part, i) => {
    if (!part) return null;
    if (part.startsWith("**") && part.endsWith("**"))
      return (
        <strong key={i} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    if (part.startsWith("`") && part.endsWith("`"))
      return (
        <code
          key={i}
          className="rounded bg-surface px-1.5 py-0.5 font-mono text-[0.9em] text-brand-from"
        >
          {part.slice(1, -1)}
        </code>
      );
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (link) {
      const href = safeHref(link[2]);
      const external = /^https?:/i.test(href);
      return (
        <a
          key={i}
          href={href}
          className="text-brand-from underline decoration-brand-from/40 underline-offset-4 hover:decoration-brand-from"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {link[1]}
        </a>
      );
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2)
      return <em key={i}>{part.slice(1, -1)}</em>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}

const slugify = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/** Títulos ## do post — usados no sumário lateral. */
export const headingsOf = (content: string) =>
  content
    .split("\n")
    .filter((l) => l.startsWith("## "))
    .map((l) => ({ id: slugify(l.slice(3)), text: l.slice(3).trim() }));

const Markdown = ({ content }: { content: string }) => {
  const blocks = content.trim().split(/\n\s*\n/);

  return (
    <div className="space-y-6 text-[1.05rem] leading-8 text-ink-muted">
      {blocks.map((raw, i) => {
        const block = raw.trim();

        if (block.startsWith("### ")) {
          return (
            <h3 key={i} className="pt-2 text-xl font-semibold text-ink">
              {inline(block.slice(4))}
            </h3>
          );
        }
        if (block.startsWith("## ")) {
          const text = block.slice(3);
          return (
            <h2
              key={i}
              id={slugify(text)}
              className="scroll-mt-28 pt-6 text-2xl font-bold text-ink sm:text-3xl"
            >
              {inline(text)}
            </h2>
          );
        }

        const image = block.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/);
        if (image) {
          return (
            <figure key={i} className="py-2">
              <img
                src={safeHref(image[2])}
                alt={image[1]}
                loading="lazy"
                className="w-full rounded-2xl border border-border"
              />
              {image[1] && (
                <figcaption className="mt-3 text-center text-sm text-ink-muted/80">
                  {image[1]}
                </figcaption>
              )}
            </figure>
          );
        }

        const lines = block.split("\n");
        if (lines.every((l) => l.trim().startsWith("- "))) {
          return (
            <ul key={i} className="space-y-3 pl-1">
              {lines.map((l, j) => (
                <li key={j} className="flex gap-3">
                  <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-from" />
                  <span>{inline(l.trim().slice(2))}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (lines.every((l) => l.trim().startsWith(">"))) {
          return (
            <blockquote
              key={i}
              className="border-l-2 border-brand-from bg-surface/60 py-4 pl-6 pr-4 text-lg italic text-ink"
            >
              {inline(lines.map((l) => l.replace(/^\s*>\s?/, "")).join(" "))}
            </blockquote>
          );
        }

        return <p key={i}>{inline(lines.join(" "))}</p>;
      })}
    </div>
  );
};

export default Markdown;
