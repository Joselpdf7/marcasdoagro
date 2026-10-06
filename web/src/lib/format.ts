const nf = (d: number) => new Intl.NumberFormat("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });
const cache = new Map<number, Intl.NumberFormat>();
const fmtd = (d: number) => {
  let f = cache.get(d);
  if (!f) {
    f = nf(d);
    cache.set(d, f);
  }
  return f;
};

export const NA = "N/A";

export function n(v: number | null | undefined, digits = 1): string {
  return v === null || v === undefined ? NA : fmtd(digits).format(v);
}

export function pct(v: number | null | undefined, digits = 1): string {
  return v === null || v === undefined ? NA : `${fmtd(digits).format(v)}%`;
}

/** 244801 → "245 mil"; 2718002 → "2,7 mi". */
export function compact(v: number | null | undefined): string {
  if (v === null || v === undefined) return NA;
  if (v >= 1_000_000) return `${fmtd(1).format(v / 1_000_000)} mi`;
  if (v >= 1_000) return `${fmtd(0).format(v / 1_000)} mil`;
  return fmtd(0).format(v);
}

export function int(v: number | null | undefined): string {
  return v === null || v === undefined ? NA : fmtd(0).format(v);
}

export function median(values: number[]): number | null {
  if (!values.length) return null;
  const s = [...values].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m]! : (s[m - 1]! + s[m]!) / 2;
}

/** Native value with a short, executive unit (e.g. "12,6%", "84/100", "245 mil seguidores"). */
export function native(v: number | null | undefined, unit: string): string {
  if (v === null || v === undefined) return NA;
  const u = unit.toLowerCase().trim();
  if (/^(taxa|parcela|respostas)/.test(u)) return pct(v * 100);
  if (u.startsWith("0 a 100")) return `${n(v, 0)}/100`;
  if (u === "ms") return `${int(v)} ms`;
  if (u.startsWith("buscas/mês")) return `${int(v)} buscas/mês`;
  if (u.startsWith("palavras-chave")) return `${compact(v)} palavras`;
  if (u.startsWith("seguidores")) return `${compact(v)} seguidores`;
  if (u.startsWith("views")) return `${compact(v)} visualizações`;
  if (u.startsWith("matérias")) return `${int(v)} matérias`;
  if (u.startsWith("peças/semana")) return `${n(v, 1)} por semana`;
  if (u.startsWith("interações/peça")) return `${compact(v)} por peça`;
  if (u.startsWith("por 1.000")) return `${n(v, 1)} por mil`;
  if (u.startsWith("cultivares")) return `${int(v)} cultivares`;
  return `${n(v)} ${unit}`;
}
