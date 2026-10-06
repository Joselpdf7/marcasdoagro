/**
 * ECharts option builders. Principles (Tufte / dataviz skill):
 * - maximise data-ink: no chart borders, recessive axes, no gridline clutter;
 * - direct labels instead of legends wherever the form allows;
 * - gray for context, the brand ink for the one thing to see;
 * - text always in ink tokens, never in series colours;
 * - every mark gets a hover tooltip.
 */
import type { EChartsCoreOption } from "echarts/core";
import type {
  ChartPayload,
  DumbbellPayload,
  PanelPayload,
  PillarsPayload,
  PositionsPayload,
  SharePayload,
  SlopePayload,
  StripPayload,
} from "./payloads.ts";

export interface Tokens {
  ink: string;
  ink2: string;
  ink3: string;
  rule: string;
  ruleStrong: string;
  paper: string;
  paper3: string;
  brand: string;
  muted: string;
  p: { proeminencia: string; valorizacao: string; fidelidade: string };
  seq: [string, string, string, string, string];
  sans: string;
  dark: boolean;
}

const fmt = (v: number, d = 1) => v.toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });

function tooltip(t: Tokens) {
  return {
    trigger: "item" as const,
    confine: true,
    backgroundColor: t.paper,
    borderColor: t.ruleStrong,
    borderWidth: 1,
    padding: [8, 10],
    textStyle: { color: t.ink, fontFamily: t.sans, fontSize: 12 },
    extraCssText: "box-shadow:0 6px 24px rgba(0,0,0,.08);border-radius:6px;",
  };
}

/** Round tick step that divides `max` into at most five parts. */
export function niceInterval(max: number): number {
  for (const c of [5, 10, 20, 25, 50, 100]) if (max % c === 0 && max / c <= 5) return c;
  return max / 4;
}

function valueAxis(t: Tokens, max: number, unit = "") {
  return {
    type: "value" as const,
    min: 0,
    max,
    interval: niceInterval(max),
    axisLine: { show: false },
    axisTick: { show: false },
    splitLine: { show: true, lineStyle: { color: t.rule, width: 1, type: [2, 3] as number[] } },
    axisLabel: { color: t.ink3, fontFamily: t.sans, fontSize: 11, formatter: (v: number) => `${fmt(v, 0)}${unit}` },
  };
}

function categoryAxis(t: Tokens, data: string[], fontSize = 12) {
  return {
    type: "category" as const,
    data,
    inverse: true,
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { color: t.ink2, fontFamily: t.sans, fontSize, margin: 12 },
  };
}

const base = (t: Tokens) => ({
  animationDuration: 600,
  animationEasing: "cubicOut" as const,
  textStyle: { fontFamily: t.sans },
  tooltip: tooltip(t),
  aria: { enabled: true },
});

/* 1. Ranked dot plot of a panel (small multiple unit). */
function panel(p: PanelPayload, t: Tokens): EChartsCoreOption {
  const rows = p.rows;
  return {
    ...base(t),
    grid: { left: 4, right: 44, top: 10, bottom: 22, containLabel: true },
    xAxis: valueAxis(t, p.xMax),
    yAxis: categoryAxis(t, rows.map((r) => r.nome)),
    series: [
      {
        type: "custom",
        silent: true,
        renderItem: (_: unknown, api: { value: (i: number) => number; coord: (v: number[]) => number[]; style: () => object }) => {
          const y = api.value(1);
          const [x0, yy] = api.coord([0, y]) as [number, number];
          const [x1] = api.coord([api.value(0), y]) as [number];
          return { type: "line", shape: { x1: x0, y1: yy, x2: x1, y2: yy }, style: { stroke: t.rule, lineWidth: 1 } };
        },
        data: rows.map((r, i) => (r.total === null ? [0, i] : [r.total, i])),
        z: 1,
      },
      {
        type: "scatter",
        symbolSize: (_v: number[], params: { dataIndex: number }) => (rows[params.dataIndex]?.lider ? 11 : 8),
        data: rows.map((r, i) => (r.total === null ? null : { value: [r.total, i], itemStyle: { color: r.lider ? t.brand : t.ink2 } })),
        label: {
          show: true,
          position: "right",
          distance: 6,
          color: t.ink2,
          fontSize: 11,
          formatter: (x: { value: number[] }) => fmt(x.value[0] ?? 0),
        },
        tooltip: { formatter: (x: { dataIndex: number }) => `<b>${rows[x.dataIndex]?.nome}</b><br/>Participação: ${fmt(rows[x.dataIndex]?.total ?? 0)}` },
        markLine: {
          silent: true,
          symbol: "none",
          lineStyle: { color: t.ink3, type: [4, 3], width: 1 },
          label: { show: false },
          data: [{ xAxis: p.referencia }],
        },
        z: 3,
      },
    ],
  };
}

export const SLOPE = { height: 340, top: 30, bottom: 16, gapPx: 13 };

/**
 * Label dodging: given values on a linear scale (0..max over `plotPx`), returns
 * label positions (same units) at least `gapPx` apart, keeping order and bounds.
 */
export function dodge(values: number[], max: number, plotPx: number, gapPx: number): number[] {
  const unit = max / plotPx;
  const gap = gapPx * unit;
  const order = values.map((v, i) => [v, i] as const).sort((a, b) => b[0] - a[0]);
  const pos = order.map(([v]) => v);
  for (let k = 1; k < pos.length; k++) pos[k] = Math.min(pos[k]!, pos[k - 1]! - gap);
  // if pushed below zero, shift the tail back up
  const lowest = pos[pos.length - 1] ?? 0;
  if (lowest < 0) {
    pos[pos.length - 1] = 0;
    for (let k = pos.length - 2; k >= 0; k--) pos[k] = Math.max(pos[k]!, pos[k + 1]! + gap);
  }
  const out = new Array<number>(values.length);
  order.forEach(([, i], k) => (out[i] = pos[k]!));
  return out;
}

/* 2. Slopegraph: left pillar → right pillar, dodged labels on both ends. */
function slope(p: SlopePayload, t: Tokens): EChartsCoreOption {
  const top = [...p.rows].sort((a, b) => b.b - b.a - (a.b - a.a))[0]?.nome;
  const plotPx = SLOPE.height - SLOPE.top - SLOPE.bottom;
  const la = dodge(p.rows.map((r) => r.a), p.yMax, plotPx, SLOPE.gapPx);
  const lb = dodge(p.rows.map((r) => r.b), p.yMax, plotPx, SLOPE.gapPx);
  const colorOf = (r: SlopePayload["rows"][number]) => (r.nome === top ? t.brand : r.b > r.a ? t.ink2 : t.muted);
  const lines = p.rows.map((r) => {
    const hl = r.nome === top;
    return {
      type: "line",
      name: r.nome,
      data: [r.a, r.b],
      symbol: "circle",
      symbolSize: hl ? 8 : 6,
      lineStyle: { width: hl ? 2.5 : 1.25, color: colorOf(r) },
      itemStyle: { color: colorOf(r) },
      emphasis: { focus: "series", lineStyle: { width: 2.5 } },
      tooltip: { formatter: () => `<b>${r.nome}</b><br/>${p.left}: ${fmt(r.a)}<br/>${p.right}: ${fmt(r.b)}` },
      z: r.nome === top ? 4 : 2,
    };
  });
  const labels = (side: 0 | 1, ys: number[]) => ({
    type: "scatter",
    silent: true,
    symbolSize: 0,
    data: p.rows.map((r, i) => ({
      value: [side, ys[i]],
      label: {
        show: true,
        position: side === 0 ? "left" : "right",
        distance: 8,
        fontSize: 11,
        color: r.nome === top ? t.brand : t.ink2,
        fontWeight: r.nome === top ? 600 : 400,
        formatter: side === 0 ? `${r.nome}  ${fmt(r.a)}` : `${fmt(r.b)}  ${r.nome}`,
      },
    })),
    z: 5,
  });
  const series = [...lines, labels(0, la), labels(1, lb)];
  return {
    ...base(t),
    grid: { left: 124, right: 124, top: SLOPE.top, bottom: SLOPE.bottom },
    xAxis: {
      type: "category",
      data: [p.left, p.right],
      boundaryGap: false,
      position: "top",
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: t.ink, fontWeight: 600, fontSize: 12, interval: 0 },
      splitLine: { show: true, lineStyle: { color: t.ruleStrong } },
    },
    yAxis: { type: "value", min: 0, max: p.yMax, show: false },
    series,
  };
}

/* 3. Dumbbell: first citation (filled) → mention (hollow). */
function dumbbell(p: DumbbellPayload, t: Tokens): EChartsCoreOption {
  const rows = p.rows;
  return {
    ...base(t),
    grid: { left: 4, right: 40, top: 8, bottom: 22, containLabel: true },
    xAxis: valueAxis(t, p.xMax, "%"),
    yAxis: categoryAxis(t, rows.map((r) => r.nome)),
    series: [
      {
        type: "custom",
        silent: true,
        renderItem: (_: unknown, api: { value: (i: number) => number; coord: (v: number[]) => number[] }) => {
          const [xa, y] = api.coord([api.value(0), api.value(2)]) as [number, number];
          const [xb] = api.coord([api.value(1), api.value(2)]) as [number];
          return { type: "line", shape: { x1: xa, y1: y, x2: xb, y2: y }, style: { stroke: t.ruleStrong, lineWidth: 2 } };
        },
        data: rows.map((r, i) => [r.primeira ?? 0, r.mencao ?? 0, i]),
        z: 1,
      },
      {
        name: "Primeira citação",
        type: "scatter",
        symbolSize: 9,
        itemStyle: { color: t.brand },
        data: rows.map((r, i) => (r.primeira === null ? null : [r.primeira, i])),
        tooltip: { formatter: (x: { value: number[] }) => `<b>${rows[x.value[1] ?? 0]?.nome}</b><br/>Primeira citação: ${fmt(x.value[0] ?? 0)}%` },
        z: 3,
      },
      {
        name: "Menção",
        type: "scatter",
        symbolSize: 9,
        itemStyle: { color: t.paper, borderColor: t.ink2, borderWidth: 1.5 },
        data: rows.map((r, i) => (r.mencao === null ? null : [r.mencao, i])),
        label: { show: true, position: "right", color: t.ink3, fontSize: 10, formatter: (x: { value: number[] }) => `${fmt(x.value[0] ?? 0)}%` },
        tooltip: { formatter: (x: { value: number[] }) => `<b>${rows[x.value[1] ?? 0]?.nome}</b><br/>Menção: ${fmt(x.value[0] ?? 0)}%` },
        z: 3,
      },
    ],
  };
}

/* 4. Strip plot: one row per category, labelled extremes, median tick. */
function strip(p: StripPayload, t: Tokens): EChartsCoreOption {
  const data = p.rows.flatMap((r, i) => {
    const labelled = r.points.filter((pt) => pt.v >= p.labelAbove).sort((a, b) => a.v - b.v);
    const seen = new Map<number, number>();
    const count = new Map<number, number>();
    r.points.forEach((pt) => count.set(pt.v, (count.get(pt.v) ?? 0) + 1));
    return r.points.map((pt) => {
      const k = seen.get(pt.v) ?? 0;
      seen.set(pt.v, k + 1);
      const dy = (k - ((count.get(pt.v) ?? 1) - 1) / 2) * 8;
      return {
        value: [pt.v, i],
        nome: pt.nome,
        row: r.label,
        dy,
        pos: labelled.indexOf(pt) % 2 === 1 ? ("bottom" as const) : ("top" as const),
      };
    });
  });
  return {
    ...base(t),
    grid: { left: 4, right: 24, top: 14, bottom: 24, containLabel: true },
    xAxis: valueAxis(t, p.xMax, p.unit),
    yAxis: { ...categoryAxis(t, p.rows.map((r) => r.label), 12), splitLine: { show: true, lineStyle: { color: t.rule } } },
    series: [
      {
        type: "custom",
        silent: true,
        renderItem: (_: unknown, api: { value: (i: number) => number; coord: (v: number[]) => number[] }) => {
          const [x, y] = api.coord([api.value(0), api.value(1)]) as [number, number];
          return { type: "line", shape: { x1: x, y1: y - 13, x2: x, y2: y + 13 }, style: { stroke: t.ink, lineWidth: 1.5 } };
        },
        data: p.rows.map((r, i) => (r.median === null ? null : [r.median, i])),
        tooltip: { show: false },
        z: 2,
      },
      {
        type: "scatter",
        symbolSize: 11,
        itemStyle: { color: t.brand, opacity: 0.55, borderColor: t.paper, borderWidth: 1.5 },
        emphasis: { itemStyle: { opacity: 1 } },
        data: data.map((d) => ({
          value: d.value,
          symbolOffset: [0, d.dy],
          itemStyle: (d.value[0] ?? 0) >= p.labelAbove ? { opacity: 1 } : undefined,
          label:
            (d.value[0] ?? 0) >= p.labelAbove
              ? { show: true, position: d.pos, distance: 6, color: t.ink2, fontSize: 10.5, formatter: d.nome }
              : undefined,
        })),
        tooltip: {
          formatter: (x: { dataIndex: number }) => {
            const d = data[x.dataIndex];
            return d ? `<b>${d.nome}</b> · ${d.row}<br/>${fmt(d.value[0] ?? 0)}${p.unit}` : "";
          },
        },
        z: 3,
      },
    ],
  };
}

/* 5. 100% horizontal bars: concentration of coverage. */
function share(p: SharePayload, t: Tokens): EChartsCoreOption {
  const tones = [t.brand, t.seq[2], t.paper3];
  const maxParts = Math.max(...p.rows.map((r) => r.parts.length));
  const series = Array.from({ length: maxParts }, (_, k) => ({
    type: "bar",
    stack: "s",
    barWidth: 22,
    itemStyle: { borderColor: t.paper, borderWidth: 2 },
    data: p.rows.map((r) => {
      const part = r.parts[k];
      if (!part) return null;
      return {
        value: (part.v / r.total) * 100,
        itemStyle: { color: tones[part.tone] },
        label: {
          show: part.v / r.total > 0.12,
          position: "inside",
          color: part.tone === 2 ? t.ink2 : "#fff",
          fontSize: 11,
          formatter: `${part.nome} ${fmt((part.v / r.total) * 100, 0)}%`,
        },
        nome: part.nome,
        n: part.v,
      };
    }),
    tooltip: {
      formatter: (x: { data: { nome: string; n: number; value: number } }) =>
        `<b>${x.data.nome}</b><br/>${x.data.n} matérias · ${fmt(x.data.value, 1)}%`,
    },
  }));
  return {
    ...base(t),
    grid: { left: 4, right: 70, top: 6, bottom: 4, containLabel: true },
    xAxis: { type: "value", max: 100, show: false },
    yAxis: categoryAxis(t, p.rows.map((r) => r.label)),
    series: [
      ...series,
      {
        type: "scatter",
        silent: true,
        symbolSize: 0,
        data: p.rows.map((_r, i) => [100, i]),
        label: { show: true, position: "right", distance: 10, color: t.ink3, fontSize: 11, formatter: (x: { dataIndex: number }) => `${p.rows[x.dataIndex]?.total} mat.` },
      },
    ],
  };
}

/* 6. Position-probability matrix (2,000 random-weight draws). */
function positions(p: PositionsPayload, t: Tokens): EChartsCoreOption {
  const cols = Array.from({ length: p.n }, (_, i) => `${i + 1}º`);
  return {
    ...base(t),
    grid: { left: 4, right: 8, top: 26, bottom: 6, containLabel: true },
    xAxis: {
      type: "category",
      data: cols,
      position: "top",
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: t.ink3, fontSize: 11 },
      splitArea: { show: false },
    },
    yAxis: categoryAxis(t, p.marcas),
    visualMap: {
      show: false,
      type: "piecewise",
      dimension: 2,
      pieces: [
        { lt: 0.05, color: t.seq[0] },
        { gte: 0.05, lt: 0.15, color: t.seq[1] },
        { gte: 0.15, lt: 0.35, color: t.seq[2] },
        { gte: 0.35, lt: 0.6, color: t.seq[3] },
        { gte: 0.6, color: t.seq[4] },
      ],
    },
    series: [
      {
        type: "heatmap",
        data: p.cells.map((c) => ({
          value: c,
          label: { color: c[2] >= 0.35 ? (t.dark ? t.paper : "#fff") : t.ink },
        })),
        itemStyle: { borderColor: t.paper, borderWidth: 2, borderRadius: 2 },
        label: {
          show: true,
          fontSize: 10.5,
          formatter: (x: { value: number[] }) => ((x.value[2] ?? 0) >= 0.1 ? fmt((x.value[2] ?? 0) * 100, 0) : ""),
        },
        emphasis: { itemStyle: { borderColor: t.ink, borderWidth: 1 } },
        tooltip: {
          formatter: (x: { value: number[] }) =>
            `<b>${p.marcas[x.value[1] ?? 0]}</b><br/>${(x.value[0] ?? 0) + 1}º lugar em ${fmt((x.value[2] ?? 0) * 100, 1)}% dos sorteios`,
        },
      },
    ],
  };
}

/* 7. Pillar profile: three coloured dots per brand + total tick. */
function pillars(p: PillarsPayload, t: Tokens): EChartsCoreOption {
  const keys = [
    ["proeminencia", "Proeminência"],
    ["valorizacao", "Valorização"],
    ["fidelidade", "Fidelidade"],
  ] as const;
  return {
    ...base(t),
    grid: { left: 4, right: 20, top: 10, bottom: 22, containLabel: true },
    xAxis: valueAxis(t, p.xMax),
    yAxis: categoryAxis(t, p.rows.map((r) => r.nome)),
    series: [
      {
        type: "custom",
        silent: true,
        renderItem: (_: unknown, api: { value: (i: number) => number; coord: (v: number[]) => number[] }) => {
          const [xa, y] = api.coord([api.value(0), api.value(2)]) as [number, number];
          const [xb] = api.coord([api.value(1), api.value(2)]) as [number];
          return { type: "line", shape: { x1: xa, y1: y, x2: xb, y2: y }, style: { stroke: t.rule, lineWidth: 6, lineCap: "round" } };
        },
        data: p.rows.map((r, i) => {
          const vs = [r.proeminencia, r.valorizacao, r.fidelidade].filter((v): v is number => v !== null);
          return vs.length ? [Math.min(...vs), Math.max(...vs), i] : null;
        }),
        z: 1,
      },
      ...keys.map(([k, label]) => ({
        name: label,
        type: "scatter",
        symbolSize: 10,
        itemStyle: { color: t.p[k], borderColor: t.paper, borderWidth: 2 },
        data: p.rows.map((r, i) => (r[k] === null ? null : [r[k], i])),
        tooltip: { formatter: (x: { value: number[] }) => `<b>${p.rows[x.value[1] ?? 0]?.nome}</b><br/>${label}: ${fmt(x.value[0] ?? 0)}` },
        z: 3,
      })),
      {
        name: "Total",
        type: "scatter",
        symbol: "rect",
        symbolSize: [2, 18],
        itemStyle: { color: t.ink },
        data: p.rows.map((r, i) => (r.total === null ? null : [r.total, i])),
        tooltip: { formatter: (x: { value: number[] }) => `<b>${p.rows[x.value[1] ?? 0]?.nome}</b><br/>Total: ${fmt(x.value[0] ?? 0)}` },
        markLine: {
          silent: true,
          symbol: "none",
          lineStyle: { color: t.ink3, type: [4, 3] },
          label: { show: false },
          data: [{ xAxis: p.referencia }],
        },
        z: 4,
      },
    ],
  };
}

export function build(p: ChartPayload, t: Tokens): EChartsCoreOption {
  switch (p.kind) {
    case "panel":
      return panel(p, t);
    case "slope":
      return slope(p, t);
    case "dumbbell":
      return dumbbell(p, t);
    case "strip":
      return strip(p, t);
    case "share":
      return share(p, t);
    case "positions":
      return positions(p, t);
    case "pillars":
      return pillars(p, t);
  }
}

/** Height in px from the number of rows so marks keep a constant density. */
export function heightFor(p: ChartPayload): number {
  switch (p.kind) {
    case "panel":
    case "dumbbell":
    case "pillars":
      return p.rows.length * 30 + 40;
    case "positions":
      return p.marcas.length * 34 + 36;
    case "slope":
      return SLOPE.height;
    case "strip":
      return p.rows.length * 64 + 40;
    case "share":
      return p.rows.length * 44 + 10;
  }
}
