import * as echarts from "echarts/core";
import { BarChart, CustomChart, HeatmapChart, LineChart, ScatterChart } from "echarts/charts";
import { AriaComponent, GridComponent, MarkLineComponent, TooltipComponent, VisualMapComponent } from "echarts/components";
import { SVGRenderer } from "echarts/renderers";
import { build, heightFor, type Tokens } from "../lib/charts/builders.ts";
import type { ChartPayload } from "../lib/charts/payloads.ts";

echarts.use([
  BarChart,
  CustomChart,
  HeatmapChart,
  LineChart,
  ScatterChart,
  AriaComponent,
  GridComponent,
  MarkLineComponent,
  TooltipComponent,
  VisualMapComponent,
  SVGRenderer,
]);

function tokens(): Tokens {
  const s = getComputedStyle(document.documentElement);
  const v = (name: string) => s.getPropertyValue(name).trim();
  return {
    ink: v("--ink"),
    ink2: v("--ink-2"),
    ink3: v("--ink-3"),
    rule: v("--rule"),
    ruleStrong: v("--rule-strong"),
    paper: v("--paper"),
    paper3: v("--paper-3"),
    brand: v("--brand-ink"),
    muted: v("--mark-muted"),
    p: { proeminencia: v("--p-proeminencia"), valorizacao: v("--p-valorizacao"), fidelidade: v("--p-fidelidade") },
    seq: [v("--seq-0"), v("--seq-1"), v("--seq-2"), v("--seq-3"), v("--seq-4")],
    sans: v("--sans"),
    dark: s.colorScheme === "dark" || s.getPropertyValue("color-scheme").trim() === "dark",
  };
}

const charts = new Map<HTMLElement, { chart: echarts.ECharts; payload: ChartPayload }>();

function render(el: HTMLElement, payload: ChartPayload) {
  el.style.height = `${heightFor(payload)}px`;
  const existing = charts.get(el);
  existing?.chart.dispose();
  const chart = echarts.init(el, undefined, { renderer: "svg" });
  chart.setOption(build(payload, tokens()));
  charts.set(el, { chart, payload });
}

function mountAll() {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        io.unobserve(el);
        const raw = el.dataset["payload"];
        if (!raw) continue;
        try {
          render(el, JSON.parse(raw) as ChartPayload);
        } catch (err) {
          console.error("chart failed", err);
        }
      }
    },
    { rootMargin: "200px" },
  );
  document.querySelectorAll<HTMLElement>(".chart[data-payload]").forEach((el) => {
    el.style.height = `${heightFor(JSON.parse(el.dataset["payload"] ?? "{}") as ChartPayload)}px`;
    io.observe(el);
  });
}

function rerenderAll() {
  charts.forEach(({ payload }, el) => render(el, payload));
}

let resizeTimer = 0;
window.addEventListener("resize", () => {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => charts.forEach(({ chart }) => chart.resize()), 120);
});
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", rerenderAll);
new MutationObserver(rerenderAll).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

mountAll();
