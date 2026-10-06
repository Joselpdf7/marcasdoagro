import raw from "../data/serie.json";
import type { Elo, Marca, Pilar, Serie } from "./types.ts";
import type {
  DumbbellPayload,
  PanelPayload,
  PillarsPayload,
  PositionsPayload,
  SharePayload,
  SlopePayload,
  StripPayload,
} from "./charts/payloads.ts";
import { median } from "./format.ts";
import { anchor } from "./anchor.ts";
import { url } from "./url.ts";
export { anchor };

export const serie = raw as Serie;
export const elos: Elo[] = serie.elos;

export function eloBySlug(slug: string): Elo {
  const e = elos.find((x) => x.slug === slug);
  if (!e) throw new Error(`unknown elo ${slug}`);
  return e;
}

export function eloBySegmento(seg: string): Elo | undefined {
  return elos.find((x) => x.segmento === seg);
}

/** Brands with a total first (desc), then those without (study rule: N/A is never zero). */
export function ranked(e: Elo): Marca[] {
  return [...e.marcas].sort((a, b) => {
    if (a.total === null && b.total === null) return a.nome.localeCompare(b.nome);
    if (a.total === null) return 1;
    if (b.total === null) return -1;
    return b.total - a.total;
  });
}

export function leader(e: Elo): Marca {
  return ranked(e)[0]!;
}

export function pillarLeader(e: Elo, p: Pilar): Marca {
  return [...e.marcas].filter((m) => m.pilares[p] !== null).sort((a, b) => b.pilares[p]! - a.pilares[p]!)[0]!;
}

export const SHARED_XMAX = 30;

export function panelPayload(e: Elo, xMax = SHARED_XMAX): PanelPayload {
  const r = ranked(e);
  return {
    kind: "panel",
    rows: r.map((m, i) => ({ nome: m.nome, total: m.total, lider: i === 0 })),
    referencia: e.referencia,
    xMax,
  };
}

export function slopePayload(e: Elo, a: Pilar = "proeminencia", b: Pilar = "fidelidade"): SlopePayload {
  const rows = e.marcas
    .filter((m) => m.pilares[a] !== null && m.pilares[b] !== null)
    .map((m) => ({ nome: m.nome, a: m.pilares[a]!, b: m.pilares[b]! }));
  const max = Math.max(...rows.flatMap((r) => [r.a, r.b]));
  return { kind: "slope", left: "Proeminência", right: "Fidelidade", rows, yMax: Math.ceil(max / 5) * 5 };
}

export function dumbbellPayload(e: Elo): DumbbellPayload {
  const rows = [...e.marcas]
    .sort((x, y) => (y.ia.mencao ?? -1) - (x.ia.mencao ?? -1))
    .map((m) => ({ nome: m.nome, mencao: m.ia.mencao, primeira: m.ia.primeira }));
  return { kind: "dumbbell", rows, xMax: 80 };
}

export function stripAcrossElos(
  pick: (m: Marca) => number | null,
  opts: { unit: string; xMax: number; labelAbove: number },
): StripPayload {
  return {
    kind: "strip",
    unit: opts.unit,
    xMax: opts.xMax,
    labelAbove: opts.labelAbove,
    rows: elos.map((e) => {
      const points = e.marcas.flatMap((m) => {
        const v = pick(m);
        return v === null ? [] : [{ nome: m.nome, v }];
      });
      return { label: shortName(e), points, median: median(points.map((p) => p.v)) };
    }),
  };
}

export function sitePayload(e: Elo): StripPayload {
  const sub = (prefix: string) => e.submetricas.find((s) => s.codigo.startsWith(prefix));
  const v5 = sub("V5_");
  const v6 = sub("V6a_");
  const name = (slug: string) => e.marcas.find((m) => m.slug === slug)?.nome ?? slug;
  const row = (label: string, s: typeof v5, scale: number) => {
    const points = (s?.valores ?? []).flatMap((v) => (v.valor === null ? [] : [{ nome: name(v.marca), v: v.valor * scale }]));
    return { label, points, median: median(points.map((p) => p.v)) };
  };
  return {
    kind: "strip",
    unit: "",
    xMax: 100,
    labelAbove: 101,
    rows: [row("Autoatendimento", v5, 100), row("Desempenho", v6, 1)],
  };
}

export function pressPayload(): SharePayload {
  return {
    kind: "share",
    rows: elos.map((e) => {
      const r = [...e.marcas].filter((m) => m.materias !== null).sort((a, b) => b.materias! - a.materias!);
      const total = r.reduce((s, m) => s + m.materias!, 0);
      const rest = r.slice(2).reduce((s, m) => s + m.materias!, 0);
      return {
        label: shortName(e),
        total,
        parts: [
          { nome: r[0]!.nome, v: r[0]!.materias!, tone: 0 as const },
          { nome: r[1]!.nome, v: r[1]!.materias!, tone: 1 as const },
          { nome: "Demais", v: rest, tone: 2 as const },
        ],
      };
    }),
  };
}

export function positionsPayload(e: Elo): PositionsPayload {
  const r = ranked(e).filter((m) => m.posicoes);
  const n = r.length;
  const cells: [number, number, number][] = [];
  r.forEach((m, i) => {
    for (let pos = 1; pos <= n; pos++) cells.push([pos - 1, i, m.posicoes?.[pos] ?? 0]);
  });
  // heatmap expects [x, y, value] with x = position, y = brand
  return { kind: "positions", marcas: r.map((m) => m.nome), n, cells: cells.map(([x, y, v]) => [x, y, v]) };
}

export function pillarsPayload(e: Elo): PillarsPayload {
  const rows = ranked(e).map((m) => ({ nome: m.nome, ...m.pilares, total: m.total }));
  const max = Math.max(...rows.flatMap((r) => [r.proeminencia, r.valorizacao, r.fidelidade, r.total].filter((v): v is number => v !== null)));
  return { kind: "pillars", rows, xMax: Math.ceil((max + 2) / 10) * 10, referencia: e.referencia };
}

export function shortName(e: Elo): string {
  return { defensivos: "Defensivos", maquinas: "Máquinas", fertilizantes: "Fertilizantes", sementes: "Sementes" }[e.slug] ?? e.nome;
}

export function brandUrl(e: Elo, m: Marca): string {
  return url(`/marcas/${e.slug}/${m.slug}/`);
}

export function docUrl(arquivo: string, secao?: string): string {
  const slug = arquivo.replace(/\.md$/, "");
  return url(`/documentos/${slug}/${secao ? `#${anchor(secao)}` : ""}`);
}


/** Probability that the brand holds its modal position. */
export function modalShare(m: Marca): number | null {
  if (!m.posicoes || m.posicaoModal === null) return null;
  return m.posicoes[m.posicaoModal] ?? null;
}
