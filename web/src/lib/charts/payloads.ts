/** Data contracts between Astro pages (build time) and chart builders (browser). */

export interface PanelPayload {
  kind: "panel";
  /** Sorted top → bottom. null total = "sem total". */
  rows: { nome: string; total: number | null; lider: boolean }[];
  referencia: number;
  xMax: number;
}

export interface SlopePayload {
  kind: "slope";
  left: string;
  right: string;
  rows: { nome: string; a: number; b: number }[];
  yMax: number;
}

export interface DumbbellPayload {
  kind: "dumbbell";
  rows: { nome: string; mencao: number | null; primeira: number | null }[];
  xMax: number;
}

export interface StripPayload {
  kind: "strip";
  /** One row per category (elo or metric), each with labelled points. */
  rows: { label: string; points: { nome: string; v: number }[]; median: number | null }[];
  xMax: number;
  unit: string;
  /** Points ≥ this value get a direct label. */
  labelAbove: number;
}

export interface SharePayload {
  kind: "share";
  rows: { label: string; total: number; parts: { nome: string; v: number; tone: 0 | 1 | 2 }[] }[];
}

export interface PositionsPayload {
  kind: "positions";
  marcas: string[];
  n: number;
  /** [brandIndex, position-1, share 0–1] */
  cells: [number, number, number][];
}

export interface PillarsPayload {
  kind: "pillars";
  rows: { nome: string; proeminencia: number | null; valorizacao: number | null; fidelidade: number | null; total: number | null }[];
  xMax: number;
  referencia: number;
}

export type ChartPayload =
  | PanelPayload
  | SlopePayload
  | DumbbellPayload
  | StripPayload
  | SharePayload
  | PositionsPayload
  | PillarsPayload;
