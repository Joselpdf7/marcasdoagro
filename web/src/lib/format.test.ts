import { describe, expect, it } from "vitest";
import { compact, median, n, pct } from "./format.ts";

describe("format", () => {
  it("uses Brazilian decimals and never turns null into zero", () => {
    expect(n(26.21)).toBe("26,2");
    expect(pct(43.8)).toBe("43,8%");
    expect(n(null)).toBe("N/A");
    expect(pct(undefined)).toBe("N/A");
  });
  it("compacts follower counts", () => {
    expect(compact(244801)).toBe("245 mil");
    expect(compact(2718002)).toBe("2,7 mi");
    expect(compact(950)).toBe("950");
  });
  it("computes medians", () => {
    expect(median([3, 1, 2])).toBe(2);
    expect(median([4, 1, 2, 3])).toBe(2.5);
    expect(median([])).toBeNull();
  });
});

import { native } from "./format.ts";
describe("native", () => {
  it("shortens units for executives", () => {
    expect(native(0.9, "parcela de itens presentes entre verificáveis")).toBe("90,0%");
    expect(native(0.126, "respostas da marca por comentário do público (emenda 3)")).toBe("12,6%");
    expect(native(63.6, "0 a 100 a partir do LCP p75 celular")).toBe("64/100");
    expect(native(160110, "seguidores")).toBe("160 mil seguidores");
    expect(native(7020, "buscas/mês, marca + modelo")).toBe("7.020 buscas/mês");
    expect(native(2.7, "por 1.000 seguidores")).toBe("2,7 por mil");
    expect(native(null, "taxa")).toBe("N/A");
  });
});
