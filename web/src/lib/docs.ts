import { readFileSync } from "node:fs";
import { join } from "node:path";
import { Marked, type Tokens } from "marked";
import { anchor } from "./anchor.ts";

const DOCS_DIR = join(process.cwd(), "..", "data", "base", "documentos");

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const marked = new Marked({
  gfm: true,
  renderer: {
    heading(this: { parser: { parseInline: (t: Tokens.Generic[]) => string } }, { tokens, depth, text }: Tokens.Heading) {
      const id = anchor(text.replace(/[*`]/g, ""));
      return `<h${depth} id="${id}"><a class="h-anchor" href="#${id}" aria-hidden="true">#</a>${this.parser.parseInline(tokens)}</h${depth}>\n`;
    },
    // Documents are data: never pass raw HTML through.
    html(token: Tokens.HTML | Tokens.Tag) {
      return escapeHtml(token.text);
    },
    table(this: { parser: unknown }, token: Tokens.Table) {
      const cell = (c: Tokens.TableCell, tag: "th" | "td") =>
        `<${tag}${c.align ? ` style="text-align:${c.align}"` : ""}>${escapeHtml(c.text)}</${tag}>`;
      const head = `<tr>${token.header.map((c) => cell(c, "th")).join("")}</tr>`;
      const body = token.rows.map((r) => `<tr>${r.map((c) => cell(c, "td")).join("")}</tr>`).join("");
      return `<div class="table-wrap"><table class="t"><thead>${head}</thead><tbody>${body}</tbody></table></div>`;
    },
  },
});

export function renderDoc(arquivo: string): string {
  const raw = readFileSync(join(DOCS_DIR, arquivo), "utf8");
  const body = raw.replace(/^---\n[\s\S]*?\n---\n/, "");
  return marked.parse(body, { async: false });
}
