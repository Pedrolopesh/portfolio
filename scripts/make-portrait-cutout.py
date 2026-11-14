"""
Gera o recorte (fundo transparente) do retrato usado no banner.

    python3 scripts/make-portrait-cutout.py [entrada] [saida]

Padrão: public/img/pedro-img1.jpg → public/img/profile-cutout.webp

Por que pré-processar em vez de recortar no navegador:
  * a borda fica suave e SEM a linha clara: os pixels da borda são
    mistura pessoa + parede bege; aqui estimamos quanto de cada (alpha)
    e trocamos a cor deles pela cor real do cabelo/pele/camiseta ao
    redor ("descontaminação"), em vez de só deixá-los semitransparentes;
  * a foto é ampliada 2× com Lanczos + leve nitidez, bem melhor que a
    interpolação do canvas ao esticar uma imagem pequena;
  * o navegador só baixa um WebP pronto (~100 KB) e não processa nada.

Requisitos: numpy e Pillow. Funciona pra fotos com fundo liso e claro.
"""

import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
SRC = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "public/img/pedro-img1.jpg"
DST = Path(sys.argv[2]) if len(sys.argv) > 2 else ROOT / "public/img/profile-cutout.webp"
SCALE = 2
BG_MAX = 80  # distância de cor até a parede pra ainda contar como fundo


def lum(c):
    return 0.299 * c[..., 0] + 0.587 * c[..., 1] + 0.114 * c[..., 2]


def _box(a, r, axis):
    """Média móvel de largura 2r+1 ao longo de um eixo (bordas replicadas)."""
    pad = [(0, 0), (0, 0)]
    pad[axis] = (r + 1, r)
    c = np.cumsum(np.pad(a, pad, mode="edge"), axis=axis)
    hi = np.take(c, np.arange(2 * r + 1, c.shape[axis]), axis=axis)
    lo = np.take(c, np.arange(0, c.shape[axis] - 2 * r - 1), axis=axis)
    return (hi - lo) / (2 * r + 1)


def blur(a, sigma):
    """Gaussian blur aproximado (3 passadas de box blur) de um array 2D."""
    out = a.astype(np.float64)
    if sigma <= 0:
        return out
    # largura do box que, aplicado 3×, aproxima a gaussiana de desvio sigma
    r = max(1, int(round((np.sqrt(4 * sigma * sigma + 1) - 1) / 2)))
    for _ in range(3):
        out = _box(_box(out, r, 0), r, 1)
    return out


def morph(mask, size, grow):
    img = Image.fromarray((mask * 255).astype(np.uint8))
    f = ImageFilter.MaxFilter(size) if grow else ImageFilter.MinFilter(size)
    return np.asarray(img.filter(f)) > 127


def smoothstep(a, b, x):
    t = np.clip((x - a) / (b - a), 0, 1)
    return t * t * (3 - 2 * t)


img = np.asarray(Image.open(SRC).convert("RGB")).astype(np.float32)
h, w, _ = img.shape

# 1) cor da parede por linha, a partir das bordas esquerda/direita.
#    Compara sempre com a parede do topo: numa transição gradual
#    parede → camiseta a comparação linha a linha "escorregaria".
edge = max(3, round(w * 0.02))
left = img[:, :edge].mean(1)
right = img[:, w - edge :].mean(1)
ref_l, ref_r = lum(left[0]), lum(right[0])
bg_l, bg_r = left.copy(), right.copy()
for y in range(1, h):
    if abs(lum(left[y]) - ref_l) >= 45:
        bg_l[y] = bg_l[y - 1]
    if abs(lum(right[y]) - ref_r) >= 45:
        bg_r[y] = bg_r[y - 1]
t = np.linspace(0, 1, w)[None, :, None]
bg = bg_l[:, None, :] + (bg_r - bg_l)[:, None, :] * t

dist = np.sqrt(((img - bg) ** 2).sum(2))

# 2) flood fill a partir das bordas: só é fundo o que é alcançável
#    andando por pixels parecidos com a parede (reflexos na testa não
#    viram buraco).
is_bg = np.zeros((h, w), bool)
stack = [(x, y) for x in range(w) for y in (0, h - 1)] + [(x, y) for y in range(h) for x in (0, w - 1)]
while stack:
    x, y = stack.pop()
    if is_bg[y, x] or dist[y, x] >= BG_MAX:
        continue
    is_bg[y, x] = True
    if x > 0: stack.append((x - 1, y))
    if x < w - 1: stack.append((x + 1, y))
    if y > 0: stack.append((x, y - 1))
    if y < h - 1: stack.append((x, y + 1))
fg = ~is_bg

# 3) cor "pura" do primeiro plano perto da borda: média borrada só dos
#    pixels bem de dentro da silhueta (cabelo, pele, camiseta).
interior = morph(fg, 7, grow=False).astype(np.float32)
fg_color = np.zeros_like(img)
weight = np.zeros((h, w), np.float32)
for radius in (4, 10, 24):  # raios crescentes preenchem onde faltou
    wgt = blur(interior, radius)
    col = np.stack([blur(img[..., k] * interior, radius) for k in range(3)], -1)
    take = (weight < 0.05) & (wgt > 0.05)
    fg_color[take] = col[take] / wgt[take, None]
    weight[take] = wgt[take]

# 4) alpha na faixa da borda pela mistura de cor:
#    C = a·F + (1−a)·B  →  a = (C−B)·(F−B) / |F−B|²
band = morph(fg, 9, grow=True) & ~morph(fg, 5, grow=False)
fb = fg_color - bg
num = ((img - bg) * fb).sum(2)
den = np.maximum((fb**2).sum(2), 1.0)
alpha = np.where(fg, 1.0, 0.0).astype(np.float32)
alpha[band] = np.clip(num / den, 0, 1)[band]
# suaviza um pouco o contorno (cabelo crespo, barba)
alpha = np.clip(blur(alpha, 0.8), 0, 1)
alpha[morph(fg, 5, grow=False)] = 1.0

# 5) descontaminação: na borda, a cor vem do primeiro plano estimado
#    (sem bege da parede). Quanto menor o alpha, mais da cor estimada.
mix = (alpha**2)[..., None]
color = np.where(band[..., None], img * mix + fg_color * (1 - mix), img)

# 6) fade suave na base (a camiseta some no fundo do site)
yy = np.arange(h)[:, None] / h
alpha *= 1 - smoothstep(0.9, 1.0, yy)

rgba = np.dstack([np.clip(color, 0, 255), alpha * 255]).astype(np.uint8)
out = Image.fromarray(rgba, "RGBA")

# 7) amplia com alpha pré-multiplicado (evita halo) + leve nitidez
out = out.convert("RGBa").resize((w * SCALE, h * SCALE), Image.LANCZOS).convert("RGBA")
r, g, b, a = out.split()
rgb = Image.merge("RGB", (r, g, b)).filter(ImageFilter.UnsharpMask(radius=1.6, percent=70, threshold=2))
out = Image.merge("RGBA", (*rgb.split(), a))

DST.parent.mkdir(parents=True, exist_ok=True)
out.save(DST, quality=92, method=6)
print(f"{SRC.name} {w}x{h} → {DST.relative_to(ROOT)} {out.width}x{out.height}, {DST.stat().st_size // 1024} KB")
