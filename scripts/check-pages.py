"""
Verificação rápida das páginas do portfólio num navegador de verdade.

    python3 scripts/check-pages.py http://localhost:3124        # next start
    python3 scripts/check-pages.py https://www.pedrolopes.tech  # produção

Pra cada página: status HTTP, erros de console/JS, violações de CSP e
elementos de <Reveal> que ficaram escondidos depois de rolar a página
inteira. Sai com código 1 se algo falhar. Requer `pip install playwright`
e `playwright install chromium`.
"""

import sys

from playwright.sync_api import sync_playwright

PAGES = [
    "/",
    "/Project",
    "/blog",
    "/blog/migrando-a-loja-da-electrolux-para-vtex-io",
    "/Contact",
    "/Stacks",
    "/banner",
]


def main(base: str) -> int:
    failed = False
    with sync_playwright() as p:
        browser = p.chromium.launch()
        for path in PAGES:
            page = browser.new_page(viewport={"width": 1440, "height": 900})
            problems: list[str] = []
            page.on(
                "console",
                lambda m: problems.append(f"{m.type}: {m.text}") if m.type == "error" else None,
            )
            page.on("pageerror", lambda e: problems.append(f"pageerror: {e}"))

            res = page.goto(base + path, wait_until="networkidle", timeout=120_000)
            height = page.evaluate("document.body.scrollHeight")
            for y in range(0, height, 600):  # dispara reveals e lazy loading
                page.evaluate(f"window.scrollTo(0, {y})")
                page.wait_for_timeout(120)
            page.wait_for_timeout(600)
            hidden = page.evaluate("document.querySelectorAll('[data-reveal=hidden]').length")

            ok = res is not None and res.status == 200 and not problems and hidden == 0
            failed |= not ok
            status = res.status if res else "sem resposta"
            print(f"{'OK  ' if ok else 'FAIL'} {status} {path} | escondidos: {hidden} | {problems[:3]}")
            page.close()
        browser.close()
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1].rstrip("/") if len(sys.argv) > 1 else "http://localhost:3124"))
