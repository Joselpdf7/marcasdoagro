import { describe, expect, it } from "vitest";
import { dodge } from "./builders.ts";

describe("dodge", () => {
  it("keeps labels at least the gap apart, in the same order", () => {
    const vals = [10, 10.2, 10.4, 30];
    const out = dodge(vals, 40, 400, 12); // 0.1 units per px → gap 1.2
    const sorted = [...out].sort((a, b) => b - a);
    for (let i = 1; i < sorted.length; i++) expect(sorted[i - 1]! - sorted[i]!).toBeGreaterThanOrEqual(1.2 - 1e-9);
    expect(out[3]).toBe(30); // far value untouched
    expect(out[2]! > out[1]! && out[1]! > out[0]!).toBe(true);
  });
  it("never goes below zero", () => {
    const out = dodge([0.1, 0.1, 0.1], 10, 100, 10);
    expect(Math.min(...out)).toBeGreaterThanOrEqual(0);
  });
});

import { niceInterval } from "./builders.ts";
describe("niceInterval", () => {
  it("picks round steps", () => {
    expect(niceInterval(30)).toBe(10);
    expect(niceInterval(100)).toBe(20);
    expect(niceInterval(60)).toBe(20);
    expect(niceInterval(80)).toBe(20);
    expect(niceInterval(40)).toBe(10);
  });
});
