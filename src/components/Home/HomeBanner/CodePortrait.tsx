import { useEffect, useRef } from "react";

/**
 * Retrato que começa como foto e, depois de `delay` ms, é "escaneado"
 * de cima pra baixo e vira código — mantendo a silhueta e o
 * sombreamento do rosto (cada célula da grade herda a luminância do
 * pixel correspondente da foto).
 *
 * Tudo roda num único <canvas>:
 *  1. a foto é recortada do fundo liso (distância de cor até o fundo
 *     estimado por linha, nas bordas da imagem) → vira uma "cutout"
 *     com alpha, usada tanto no estado foto quanto como máscara;
 *  2. a cutout é reduzida pra resolução da grade (cols × rows) e cada
 *     célula guarda luminância + cobertura;
 *  3. o texto de CODE é distribuído só pelas células dentro da
 *     silhueta, em ordem de leitura — o código "preenche" o rosto.
 */

const CODE = `const pedro = { name: "Pedro Lopes", role: "Software Engineer", stack: ["TypeScript", "React", "Next.js", "Node.js", "React Native", "AWS"], location: "Brazil" }; export async function build(idea: Idea): Promise<Product> { const design = await think(idea); const code = write(design, { clean: true, tested: true }); return ship(code); } while (alive) { learn(); build(); share(); } if (problem) solve(problem); else coffee++; // ship it 🚀 `
  .replace(/🚀/g, "")
  .replace(/\s+/g, " ");

const GLITCH = "01{}[]()<>/\\=+-*;:$#&|!?";

// rampas ordenadas da letra mais "leve" (pouca tinta) pra mais "cheia"
const RAMPS = {
  ascii: ".:-=+*#%@",
  symbols: ".,:;-=+<>(){}[]?*$&%#@",
  binary: "0101",
} as const;

/**
 * Como cada célula escolhe o caractere:
 *  - code:    texto de código corrido (o tom só muda a cor)
 *  - ascii:   rampa ASCII clássica pelo tom (.:-=+*#%@)
 *  - symbols: rampa só com símbolos de código pelo tom ({}[]<>;$#…)
 *  - hybrid:  código legível nas áreas claras (rosto), rampa nas escuras
 *  - binary:  0 e 1 (estilo matrix); o tom muda só a cor
 *  - mix:     3 faixas de tom — rampa leve nas sombras, código corrido
 *             nos meios-tons e rampa cheia nos pontos de luz
 */
export type PortraitMode =
  | "code"
  | "ascii"
  | "symbols"
  | "hybrid"
  | "binary"
  | "mix";

// faixa de tom (já com o piso de 0.15) em que o modo mix usa código
const MIX_CODE_FROM = 0.4;
const MIX_CODE_TO = 0.8;

const fromRamp = (ramp: string, lum: number) =>
  ramp[Math.min(ramp.length - 1, Math.max(0, Math.round(lum * (ramp.length - 1))))];

// rampa de cor: azul da marca (sombra) → ciano claro (luz)
const DARK = [47, 111, 239];
const LIGHT = [214, 238, 255];
const LEVELS = 10;

type Cell = {
  x: number;
  y: number;
  lum: number; // 0..1 (já com contraste esticado)
  alpha: number; // cobertura da silhueta 0..1
  ch: string; // caractere original do código
  glitch: string | null; // troca temporária
  glitchUntil: number;
  threshold: number; // momento (0..1 do progresso) em que vira código
};

type Props = {
  src: string;
  alt: string;
  /** espera antes de começar a transformação (ms) */
  delay?: number;
  /** duração do scan (ms) */
  duration?: number;
  className?: string;
  /** modo de escolha dos caracteres */
  mode?: PortraitMode;
  /** colunas ≈ largura / (density × 0.6): maior = grade mais fina */
  density?: number;
  /** alterna foto ⇄ código pra sempre (em vez de transformar uma vez só) */
  loop?: boolean;
  /** no loop, quanto tempo cada estado (foto e código) fica parado (ms) */
  hold?: number;
  /**
   * `src` já é um recorte com fundo transparente (gerado por
   * scripts/make-portrait-cutout.py). Sem isso, o recorte é feito no
   * navegador — funciona, mas com borda pior e sem ampliação de qualidade.
   */
  precut?: boolean;
};

const smoothstep = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

/** Recorta a pessoa do fundo liso da foto. */
function buildCutout(img: HTMLImageElement): HTMLCanvasElement {
  const w = img.naturalWidth;
  const h = img.naturalHeight;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d", { willReadFrequently: true })!;
  ctx.drawImage(img, 0, 0);
  const data = ctx.getImageData(0, 0, w, h);
  const px = data.data;

  // Estima a cor do fundo em cada linha a partir das bordas esquerda e
  // direita. Quando a borda é escura (ombro/camiseta encostando na
  // lateral), reaproveita a última estimativa boa daquele lado.
  const edge = Math.max(3, Math.round(w * 0.02));
  const sampleEdge = (y: number, fromX: number) => {
    let r = 0, g = 0, b = 0;
    for (let x = fromX; x < fromX + edge; x++) {
      const i = (y * w + x) * 4;
      r += px[i]; g += px[i + 1]; b += px[i + 2];
    }
    return [r / edge, g / edge, b / edge];
  };
  const lumOf = (c: number[]) => 0.299 * c[0] + 0.587 * c[1] + 0.114 * c[2];

  let lastL = sampleEdge(0, 0);
  let lastR = sampleEdge(0, w - edge);
  const refL = lumOf(lastL);
  const refR = lumOf(lastR);
  const bgL: number[][] = [];
  const bgR: number[][] = [];
  for (let y = 0; y < h; y++) {
    const l = sampleEdge(y, 0);
    const r = sampleEdge(y, w - edge);
    // compara com a parede do topo (referência fixa), não com a linha
    // anterior: numa transição gradual parede → camiseta a comparação
    // linha a linha "escorregava" pro preto e apagava o ombro
    if (Math.abs(lumOf(l) - refL) < 45) lastL = l;
    if (Math.abs(lumOf(r) - refR) < 45) lastR = r;
    bgL.push(lastL);
    bgR.push(lastR);
  }

  // distância de cor de cada pixel até o fundo estimado
  const dist = new Float32Array(w * h);
  for (let y = 0; y < h; y++) {
    const L = bgL[y];
    const R = bgR[y];
    for (let x = 0; x < w; x++) {
      const t = x / (w - 1);
      const br = L[0] + (R[0] - L[0]) * t;
      const bg = L[1] + (R[1] - L[1]) * t;
      const bb = L[2] + (R[2] - L[2]) * t;
      const i = (y * w + x) * 4;
      const dr = px[i] - br;
      const dg = px[i + 1] - bg;
      const db = px[i + 2] - bb;
      dist[y * w + x] = Math.sqrt(dr * dr + dg * dg + db * db);
    }
  }

  // Flood fill a partir das bordas, andando só por pixels "parecidos
  // com o fundo". Só o que é alcançável assim é fundo — reflexos de luz
  // na testa/nariz (que têm cor parecida com a parede) ficam dentro da
  // silhueta em vez de virarem buracos.
  const BG_MAX = 80;
  const isBg = new Uint8Array(w * h);
  const stack: number[] = [];
  const seed = (x: number, y: number) => {
    const k = y * w + x;
    if (!isBg[k] && dist[k] < BG_MAX) {
      isBg[k] = 1;
      stack.push(k);
    }
  };
  for (let x = 0; x < w; x++) { seed(x, 0); seed(x, h - 1); }
  for (let y = 0; y < h; y++) { seed(0, y); seed(w - 1, y); }
  while (stack.length) {
    const k = stack.pop()!;
    const x = k % w;
    const y = (k - x) / w;
    if (x > 0) seed(x - 1, y);
    if (x < w - 1) seed(x + 1, y);
    if (y > 0) seed(x, y - 1);
    if (y < h - 1) seed(x, y + 1);
  }

  // borda suave só na transição pro fundo
  const alpha = new Float32Array(w * h);
  for (let k = 0; k < w * h; k++) {
    alpha[k] = isBg[k] ? smoothstep(50, BG_MAX, dist[k]) : 1;
  }
  for (let y = 0; y < h; y++) {
    // leve fade na base (a camiseta some no fundo)
    const bottomFade = 1 - smoothstep(0.9, 1, y / h);
    for (let x = 0; x < w; x++) {
      const k = y * w + x;
      // erosão de 1px: tira o halo claro (pixels misturados com a parede)
      const a = Math.min(
        alpha[k],
        x > 0 ? alpha[k - 1] : 1,
        x < w - 1 ? alpha[k + 1] : 1,
        y > 0 ? alpha[k - w] : 1,
        y < h - 1 ? alpha[k + w] : 1
      );
      px[k * 4 + 3] = Math.round(255 * a * bottomFade);
    }
  }
  ctx.putImageData(data, 0, 0);
  return canvas;
}

const CodePortrait = ({
  src,
  alt,
  delay = 2500,
  duration = 2200,
  className = "",
  mode = "code",
  density = 54,
  loop = false,
  hold = 10000,
  precut = false,
}: Props) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d")!;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let cutout: HTMLCanvasElement | null = null;
    let cells: Cell[] = [];
    let byLevel: Cell[][] = [];
    let width = 0;
    let height = 0;
    let fontSize = 8;
    let cellW = 5;
    let cellH = 8;

    let startAt = 0; // timestamp em que o scan começa
    let raf = 0;
    let lastFrame = 0;
    let visible = false;
    let started = false;
    const start = () => {
      if (started || !cutout || !visible) return;
      started = true;
      startAt = performance.now() + delay;
      raf = requestAnimationFrame(render);
    };
    const pointer = { x: -9999, y: -9999 };

    const levelColor = (level: number, alpha = 1) => {
      const t = level / (LEVELS - 1);
      const c = DARK.map((d, k) => Math.round(d + (LIGHT[k] - d) * t));
      return `rgba(${c[0]},${c[1]},${c[2]},${alpha})`;
    };

    const charFor = (lum: number, nextCode: () => string) => {
      switch (mode) {
        // piso de 0.15: áreas escuras usam ":"/"-" em vez de "." pra
        // silhueta (camiseta, cabelo) continuar visível
        case "ascii":
          return fromRamp(RAMPS.ascii, 0.15 + 0.85 * lum);
        case "symbols":
          return fromRamp(RAMPS.symbols, 0.15 + 0.85 * lum);
        case "binary":
          return Math.random() < 0.5 ? "0" : "1";
        case "mix": {
          const t = 0.15 + 0.85 * lum;
          if (t < MIX_CODE_FROM || t > MIX_CODE_TO) return fromRamp(RAMPS.ascii, t);
          const ch = nextCode();
          // espaço do código abriria buraco no rosto: usa a rampa
          return ch === " " ? fromRamp(RAMPS.ascii, t) : ch;
        }
        case "hybrid":
          return lum > 0.5 ? nextCode() : fromRamp(RAMPS.ascii, lum * 1.6);
        default:
          return nextCode();
      }
    };

    // glitch coerente com o modo: nas rampas, troca por um vizinho de
    // tom parecido pra não "furar" o sombreamento
    const glitchFor = (cell: Cell) => {
      if (mode === "mix") {
        const t = 0.15 + 0.85 * cell.lum;
        if (t < MIX_CODE_FROM || t > MIX_CODE_TO) {
          const jitter = (Math.random() - 0.5) * 0.25;
          return fromRamp(RAMPS.ascii, Math.min(1, Math.max(0, t + jitter)));
        }
        return GLITCH[(Math.random() * GLITCH.length) | 0];
      }
      if (mode === "ascii" || mode === "symbols") {
        const jitter = (Math.random() - 0.5) * 0.25;
        return fromRamp(RAMPS[mode], Math.min(1, Math.max(0, 0.15 + 0.85 * cell.lum + jitter)));
      }
      if (mode === "binary") return cell.ch === "0" ? "1" : "0";
      return GLITCH[(Math.random() * GLITCH.length) | 0];
    };

    /** (Re)calcula a grade de caracteres pro tamanho atual. */
    const layout = () => {
      if (!cutout) return;
      const rect = wrap.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // ~90 colunas em qualquer tamanho: detalhe suficiente pro rosto
      fontSize = Math.max(6, width / density);
      cellH = fontSize;
      cellW = fontSize * 0.6;
      const cols = Math.floor(width / cellW);
      const rows = Math.floor(height / cellH);

      const small = document.createElement("canvas");
      small.width = cols;
      small.height = rows;
      const sctx = small.getContext("2d", { willReadFrequently: true })!;
      sctx.imageSmoothingQuality = "high";
      sctx.drawImage(cutout, 0, 0, cols, rows);
      const px = sctx.getImageData(0, 0, cols, rows).data;

      // equalização de histograma só dentro da silhueta: espalha os
      // tons de pele/cabelo/óculos por toda a rampa de cor, senão o
      // rosto vira um bloco de brilho uniforme
      const raw: { lum: number; alpha: number }[] = [];
      const inside: number[] = [];
      for (let i = 0; i < cols * rows; i++) {
        const a = px[i * 4 + 3] / 255;
        const lum =
          (0.299 * px[i * 4] + 0.587 * px[i * 4 + 1] + 0.114 * px[i * 4 + 2]) /
          255;
        raw.push({ lum, alpha: a });
      }

      // realce de bordas (unsharp mask 3×3): óculos, olhos, sobrancelha
      // e contorno da barba ficam marcados mesmo numa grade grossa
      const sharp = raw.map(({ lum, alpha: a }, i) => {
        const r = (i / cols) | 0;
        const c = i % cols;
        let sum = 0, n = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const rr = r + dy, cc = c + dx;
            if (rr < 0 || rr >= rows || cc < 0 || cc >= cols) continue;
            const nb = raw[rr * cols + cc];
            if (nb.alpha < 0.5) continue;
            sum += nb.lum;
            n++;
          }
        }
        const blur = n ? sum / n : lum;
        return a > 0.5 ? Math.min(1, Math.max(0, lum + 1.4 * (lum - blur))) : lum;
      });
      sharp.forEach((lum, i) => {
        raw[i].lum = lum;
        if (raw[i].alpha > 0.5) inside.push(lum);
      });
      inside.sort((x, y) => x - y);
      const lo = inside[Math.floor(inside.length * 0.02)] ?? 0;
      const hi = inside[Math.floor(inside.length * 0.98)] ?? 1;
      const stretch = (lum: number) =>
        Math.min(1, Math.max(0, (lum - lo) / Math.max(0.05, hi - lo)));
      const rank = (lum: number) => {
        let lo = 0, hi = inside.length;
        while (lo < hi) {
          const mid = (lo + hi) >> 1;
          if (inside[mid] < lum) lo = mid + 1;
          else hi = mid;
        }
        return inside.length ? lo / inside.length : lum;
      };

      cells = [];
      let k = 0;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const { lum, alpha } = raw[r * cols + c];
          if (alpha < 0.15) continue;
          const tone = Math.pow(0.45 * rank(lum) + 0.55 * stretch(lum), 1.25);
          cells.push({
            x: c * cellW,
            y: r * cellH,
            lum: tone,
            alpha,
            ch: charFor(tone, () => CODE[k++ % CODE.length]),
            glitch: null,
            glitchUntil: 0,
            threshold: (r / rows) * 0.85 + Math.random() * 0.15,
          });
        }
      }
    };

    const groupByLevel = (boost: (cell: Cell) => number) => {
      byLevel = Array.from({ length: LEVELS }, () => []);
      for (const cell of cells) {
        const l = Math.min(
          LEVELS - 1,
          Math.round(Math.min(1, cell.lum + boost(cell)) * (LEVELS - 1))
        );
        byLevel[l].push(cell);
      }
    };

    const drawPhoto = (clipFromY = 0) => {
      if (!cutout) return;
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, clipFromY, width, height - clipFromY);
      ctx.clip();
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(cutout, 0, 0, width, height);
      ctx.restore();
    };

    /**
     * Quanto do retrato já virou código (0 = foto, 1 = código).
     * Sem loop: 0 → 1 uma vez. Com loop, o ciclo é:
     *   scan pra código (duration) → código parado (hold) →
     *   scan de volta pra foto (duration) → foto parada (hold) → …
     * Na volta o progresso decresce, então a foto reaparece de baixo
     * pra cima, com a linha de scan subindo.
     */
    const codeProgress = (elapsed: number) => {
      if (elapsed < 0) return 0;
      if (!loop) return reducedMotion ? 1 : Math.min(1, elapsed / duration);
      const cycle = 2 * duration + 2 * hold;
      const local = elapsed % cycle;
      if (reducedMotion) return local < duration + hold ? 1 : 0;
      if (local < duration) return local / duration;
      if (local < duration + hold) return 1;
      if (local < 2 * duration + hold) return 1 - (local - duration - hold) / duration;
      return 0;
    };

    const render = (now: number) => {
      raf = requestAnimationFrame(render);
      if (!visible || !cutout) return;
      // ~30fps é suficiente e economiza bateria
      if (now - lastFrame < 33) return;
      lastFrame = now;

      ctx.clearRect(0, 0, width, height);
      const elapsed = now - startAt;
      const p = codeProgress(elapsed);

      // 1) estado foto
      if (p <= 0) {
        drawPhoto();
        return;
      }

      const t = now / 1000;

      // 2) foto abaixo da faixa de transição
      const solidY = Math.max(0, ((p - 0.15) / 0.85) * height);
      if (p < 1) drawPhoto(solidY);

      // 3) código
      // nos modos por tom a letra É o pixel: negrito deixa cada uma mais
      // visível sem perder resolução
      const toneMode = mode === "ascii" || mode === "symbols" || mode === "mix";
      ctx.font = `${toneMode ? 700 : 400} ${fontSize}px "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace`;
      ctx.textBaseline = "top";

      const glitchRate = reducedMotion ? 0 : 0.004;
      for (const cell of cells) {
        if (cell.glitch && now > cell.glitchUntil) cell.glitch = null;
        if (Math.random() < glitchRate) {
          cell.glitch = glitchFor(cell);
          cell.glitchUntil = now + 150 + Math.random() * 400;
        }
      }

      // brilho extra: onda suave descendo + área perto do ponteiro
      groupByLevel((cell) => {
        let b = 0;
        if (!reducedMotion) {
          b += 0.12 * Math.max(0, Math.sin(cell.y / 38 - t * 1.6)) ** 6;
        }
        const dx = cell.x - pointer.x;
        const dy = cell.y - pointer.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 4900) b += 0.5 * (1 - Math.sqrt(d2) / 70);
        return b;
      });

      for (let level = 0; level < LEVELS; level++) {
        const list = byLevel[level];
        if (!list.length) continue;
        for (const cell of list) {
          if (p < cell.threshold) continue;
          const fresh = p - cell.threshold < 0.04 && p < 1;
          // dentro da faixa, apaga a foto embaixo da célula
          if (cell.y + cellH > solidY && p < 1) {
            ctx.clearRect(cell.x, cell.y, cellW + 0.5, cellH + 0.5);
          }
          const floor = toneMode ? 0.45 : 0.22;
          const a = (floor + (1 - floor) * (level / (LEVELS - 1))) * cell.alpha;
          ctx.fillStyle = fresh ? "rgba(255,255,255,0.95)" : levelColor(level, a);
          const near =
            Math.abs(cell.x - pointer.x) < 70 && Math.abs(cell.y - pointer.y) < 70;
          const ch =
            fresh || (near && Math.random() < 0.08)
              ? glitchFor(cell)
              : cell.glitch ?? cell.ch;
          ctx.fillText(ch, cell.x, cell.y);
        }
      }

      // 4) linha de scan
      if (p < 1) {
        const scanY = (p / 0.85) * height;
        const grad = ctx.createLinearGradient(0, scanY - 24, 0, scanY + 2);
        grad.addColorStop(0, "rgba(110,195,240,0)");
        grad.addColorStop(1, "rgba(110,195,240,0.35)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, scanY - 24, width, 26);
        ctx.fillStyle = "rgba(200,235,255,0.9)";
        ctx.fillRect(0, scanY, width, 1.5);
      }
    };

    const restart = () => {
      startAt = performance.now() + 600;
      for (const cell of cells) cell.glitch = null;
    };

    const img = new Image();
    img.decoding = "async";
    img.src = src;
    img.onload = () => {
      if (precut) {
        cutout = document.createElement("canvas");
        cutout.width = img.naturalWidth;
        cutout.height = img.naturalHeight;
        cutout.getContext("2d")!.drawImage(img, 0, 0);
      } else {
        cutout = buildCutout(img);
      }
      layout();
      start();
    };

    const ro = new ResizeObserver(() => layout());
    ro.observe(wrap);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      start();
    });
    io.observe(wrap);

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      pointer.x = pointer.y = -9999;
    };
    // clique/tap volta pra foto e roda a transformação de novo
    // (no loop, reinicia o ciclo a qualquer momento)
    const onClick = () => {
      if (loop || performance.now() - startAt > duration) restart();
    };
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    canvas.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      img.onload = null;
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      canvas.removeEventListener("click", onClick);
    };
  }, [src, delay, duration, mode, density, loop, hold, precut]);

  return (
    <div
      ref={wrapRef}
      className={`relative aspect-[448/600] w-full ${className}`}
    >
      <canvas
        ref={canvasRef}
        role="img"
        aria-label={alt}
        className="absolute inset-0 h-full w-full cursor-pointer"
      />
    </div>
  );
};

export default CodePortrait;
