/**
 * Builds the site's data layer from the study's deliverables:
 *  - data/Dados_da_Serie.xlsx            (numbers)
 *  - data/base/marcas.json                (names, sub-brands)
 *  - data/base/documentos/*sensibilidades_fase4.md (position distributions)
 *  - data/base/manifesto.json             (document list + hashes)
 * Outputs:
 *  - web/src/data/serie.json              (consumed by Astro pages)
 *  - data/contexto_chat.md                (fixed context for the chat API)
 */
import ExcelJS from "exceljs";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { Elo, Marca, Serie, Submetrica, DocumentoMeta, Pilar } from "../src/lib/types.ts";
import { ELOS_META, SUBMETRICAS, FORA_DA_NOTA, cleanNote, slugify } from "../src/lib/meta.ts";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const DATA = join(ROOT, "data");
const BASE = join(DATA, "base");

type Cell = string | number | null;

function cellValue(v: ExcelJS.CellValue): Cell {
  if (v === null || v === undefined) return null;
  if (typeof v === "number" || typeof v === "string") return v;
  if (typeof v === "object" && "result" in v) return (v.result as Cell) ?? null;
  if (typeof v === "object" && "richText" in v) return v.richText.map((t) => t.text).join("");
  return String(v);
}

function sheetRows(ws: ExcelJS.Worksheet): Record<string, Cell>[] {
  const rows: Cell[][] = [];
  ws.eachRow({ includeEmpty: false }, (row) => {
    const vals = row.values as ExcelJS.CellValue[];
    rows.push(vals.slice(1).map(cellValue));
  });
  const [header = [], ...body] = rows;
  return body.map((r) => Object.fromEntries(header.map((h, i) => [String(h), r[i] ?? null])));
}

const num = (v: Cell | undefined): number | null => (typeof v === "number" && Number.isFinite(v) ? v : null);

/** Parses "1: 0.926; 2: 0.07" style or two-column tables into position → share. */
function eloMeta(volume: string) {
  const meta = ELOS_META[volume];
  if (!meta) throw new Error(`unknown volume ${volume}`);
  return meta;
}

function parsePositions(volume: string, names: string[]): Record<string, Record<number, number>> {
  const file = readFileSync(
    join(BASE, "documentos", `vol${volume}_${eloMeta(volume).arquivo}__sensibilidades_fase4.md`),
    "utf8",
  );
  const out: Record<string, Record<number, number>> = {};
  if (volume === "1" || volume === "2") {
    const section = file.split(/## Pesos aleatórios/)[1]?.split(/\n## /)[0] ?? "";
    for (const line of section.split("\n")) {
      const [, name = "", , , dist = ""] = line.split("|").map((c) => c.trim());
      if (!names.includes(name)) continue;
      out[name] = Object.fromEntries(dist.split(";").map((p) => p.split(":").map((x) => Number(x.trim()))).map(([k, v]) => [k, v]));
    }
  } else {
    const section = file.split(/## pesos aleatorios dirichlet 2000/)[1]?.split(/\n## /)[0] ?? "";
    for (const block of section.split(/\n### /).slice(1)) {
      const name = (block.split("\n")[0] ?? "").trim();
      if (!names.includes(name)) continue;
      const dist: Record<number, number> = {};
      for (const line of block.split("\n")) {
        const m = line.match(/^\|\s*(\d+)\s*\|\s*([\d.]+)\s*\|/);
        if (m) dist[Number(m[1])] = Number(m[2]);
      }
      out[name] = dist;
    }
  }
  return out;
}

function yamlField(text: string, key: string): string {
  return text.match(new RegExp(`^${key}:\\s*"?(.*?)"?\\s*$`, "m"))?.[1] ?? "";
}

async function main() {
  const wb = new ExcelJS.Workbook();
  await wb.xlsx.readFile(join(DATA, "Dados_da_Serie.xlsx"));
  const sheet = (name: string) => {
    const ws = wb.getWorksheet(name);
    if (!ws) throw new Error(`missing sheet ${name}`);
    return sheetRows(ws);
  };

  const mestra = sheet("Tabela mestra");
  const ia = sheet("IA por superficie");
  const resposta = sheet("Resposta ao publico");
  const marcasJson = JSON.parse(readFileSync(join(BASE, "marcas.json"), "utf8")) as {
    marcas: { id: string; volume: string; nome_exibicao: string; nome_nos_dados: string; submarcas?: { nome: string; descritiva_fora_da_nota: boolean }[] }[];
  };
  const glossario = sheet("Glossario");

  const elos: Elo[] = [];
  for (const volume of ["1", "2", "3", "4"]) {
    const meta = eloMeta(volume);
    const rows = mestra.filter((r) => String(r["Volume"]) === volume);
    const names = rows.map((r) => String(r["Marca ou grupo"]));
    const positions = parsePositions(volume, names);
    const subRows = sheet(`Vol${volume} submetricas`);

    const marcas: Marca[] = rows.map((r) => {
      const nomeDados = String(r["Marca ou grupo"]);
      const dict = marcasJson.marcas.find((m) => m.volume === volume && m.nome_nos_dados === nomeDados);
      if (!dict) throw new Error(`brand not in dictionary: ${volume} ${nomeDados}`);
      const iaRow = ia.find((x) => String(x["Volume"]) === volume && x["Marca ou grupo"] === nomeDados);
      const rpRow = resposta.find((x) => String(x["Volume"]) === volume && x["Marca ou grupo"] === nomeDados);
      return {
        slug: slugify(dict.nome_exibicao),
        nome: dict.nome_exibicao,
        nomeDados,
        total: num(r["Participação (3 pilares)"]),
        percentil: num(r["Percentil"]),
        pilares: {
          proeminencia: num(r["Proeminência"]),
          valorizacao: num(r["Valorização"]),
          fidelidade: num(r["Fidelidade"]),
        },
        ia: {
          mencao: num(r["Menção IA (%)"]),
          primeira: num(r["Primeira citação IA (%)"]),
          fontePropria: num(r["Fonte própria IA (%)"]),
          ic95: iaRow?.["IC 95% da menção"] ? String(iaRow["IC 95% da menção"]) : null,
          soGrupo: num(iaRow?.["Menção só ao grupo (%)"] ?? null),
        },
        resposta: {
          porComentario: num(r["Resposta ao público (%)"]),
          respondidos: num(rpRow?.["Comentários respondidos (%)"] ?? null),
          horasMediana: num(rpRow?.["Mediana de horas até responder"] ?? null),
        },
        categoriaTop10: num(r["Categoria top 10 (%)"]),
        materias: num(r["Matérias 12 meses"]),
        seguidores: { instagram: num(r["Instagram"]), facebook: num(r["Facebook"]), youtube: num(r["YouTube"]) },
        buscaMarca: num(r["Busca pela marca (mês)"]),
        posicaoModal: num(r["Posição modal"]),
        posicoes: positions[nomeDados] ?? null,
        submarcas: dict.submarcas?.map((s) => ({ nome: s.nome, descritiva: s.descritiva_fora_da_nota })) ?? [],
      };
    });

    const codes = [...new Set(subRows.map((r) => String(r["Submétrica"])))];
    const submetricas: Submetrica[] = codes.map((codigo) => {
      const rs = subRows.filter((r) => r["Submétrica"] === codigo);
      const first = rs[0];
      if (!first) throw new Error(`no rows for ${codigo}`);
      const def = SUBMETRICAS(codigo);
      const pilarRaw = String(first["Pilar"]);
      const pilar: Pilar = pilarRaw.startsWith("Proem") ? "proeminencia" : pilarRaw.startsWith("Valor") ? "valorizacao" : "fidelidade";
      return {
        codigo,
        nome: def.nome,
        descricao: def.descricao,
        pilar,
        unidade: String(first["Unidade"] ?? ""),
        naNota: !(FORA_DA_NOTA[volume] ?? []).some((p) => codigo.startsWith(p)),
        nota: first["Nota"] ? cleanNote(String(first["Nota"])) : null,
        valores: rs.map((r) => {
          const m = marcas.find((x) => x.nomeDados === r["Marca ou grupo"]);
          return {
            marca: m?.slug ?? slugify(String(r["Marca ou grupo"])),
            valor: num(r["Valor nativo"]),
            participacao: num(r["Participação (%)"]),
            percentil: num(r["Percentil"]),
          };
        }),
      };
    });

    elos.push({
      volume,
      slug: meta.slug,
      segmento: meta.segmento,
      nome: meta.nome,
      unidade: volume === "4" ? "grupo" : "marca",
      referencia: Math.round((1000 / rows.length)) / 10,
      marcas,
      submetricas,
    });
  }

  const manifesto = JSON.parse(readFileSync(join(BASE, "manifesto.json"), "utf8")) as {
    documentos: { arquivo: string; volume: string; segmento: string; sha256: string }[];
  };
  const documentos: DocumentoMeta[] = manifesto.documentos.map((d) => {
    const text = readFileSync(join(BASE, "documentos", d.arquivo), "utf8");
    return {
      arquivo: d.arquivo,
      slug: d.arquivo.replace(/\.md$/, ""),
      volume: d.volume,
      segmento: d.segmento,
      titulo: yamlField(text, "titulo") || d.arquivo,
      tipo: yamlField(text, "tipo"),
      data: yamlField(text, "data"),
      versao: yamlField(text, "versao"),
      sha256: d.sha256,
    };
  });

  const serie: Serie = {
    geradoEm: new Date().toISOString().slice(0, 10),
    elos,
    documentos,
    glossario: glossario.map((g) => ({ termo: String(g["Termo"]), definicao: String(g["Definição"]) })),
  };
  mkdirSync(join(ROOT, "web/src/data"), { recursive: true });
  writeFileSync(join(ROOT, "web/src/data/serie.json"), JSON.stringify(serie));
  writeFileSync(join(DATA, "contexto_chat.md"), chatContext(serie));
  console.log(`serie.json: ${elos.length} elos, ${elos.reduce((a, e) => a + e.marcas.length, 0)} marcas, ${documentos.length} documentos`);
}

function fmt(v: number | null, suffix = ""): string {
  return v === null ? "N/A" : `${String(v).replace(".", ",")}${suffix}`;
}

function chatContext(s: Serie): string {
  const lines: string[] = [
    "# Tabela mestra da série (fonte: Dados_da_Serie.xlsx)",
    "Participação = parcela da marca no total observado do seu elo (média dos três pilares). Só se compara dentro do mesmo elo. N/A nunca é zero.",
    "Posição modal = posição mais frequente em 2.000 sorteios de pesos aleatórios.",
    "",
  ];
  for (const e of s.elos) {
    lines.push(`## Volume ${e.volume}: ${e.nome} (${e.marcas.length} ${e.unidade === "grupo" ? "grupos" : "marcas"}; referência de igualdade ${fmt(e.referencia)})`);
    lines.push("| Marca | Participação | Proeminência | Valorização | Fidelidade | Posição modal | Menção IA | 1ª citação IA | Fonte própria IA | Resposta ao público | Categoria top 10 | Matérias 12m | Instagram | Busca pela marca/mês |");
    lines.push("|---|---|---|---|---|---|---|---|---|---|---|---|---|---|");
    for (const m of e.marcas) {
      lines.push(
        `| ${m.nome}${m.nome !== m.nomeDados ? ` (${m.nomeDados})` : ""} | ${fmt(m.total)} | ${fmt(m.pilares.proeminencia)} | ${fmt(m.pilares.valorizacao)} | ${fmt(m.pilares.fidelidade)} | ${fmt(m.posicaoModal)} | ${fmt(m.ia.mencao, "%")} | ${fmt(m.ia.primeira, "%")} | ${fmt(m.ia.fontePropria, "%")} | ${fmt(m.resposta.porComentario, "%")} | ${fmt(m.categoriaTop10, "%")} | ${fmt(m.materias)} | ${fmt(m.seguidores.instagram)} | ${fmt(m.buscaMarca)} |`,
      );
    }
    const semTotal = e.marcas.filter((m) => m.total === null).map((m) => m.nome);
    if (semTotal.length) {
      lines.push(
        "",
        `Sem total: ${semTotal.join(" e ")}. Nenhuma submarca desses grupos tem perfil próprio nas redes com cobertura suficiente para o pilar Fidelidade, e a regra da série não soma audiência de perfil genérico de grupo. A leitura com o perfil genérico está publicada como sensibilidade (nela, a Bayer teria o maior total). A Bayer é, ainda assim, a primeira em cinco submétricas de Proeminência.`,
      );
    }
    const subs = e.marcas.filter((m) => m.submarcas.length);
    if (subs.length) {
      lines.push("", "Submarcas por grupo: " + subs.map((m) => `${m.nome}: ${m.submarcas.map((x) => x.nome + (x.descritiva ? " (descritiva)" : "")).join(", ")}`).join("; ") + ".");
    }
    lines.push("");
  }
  lines.push("# Glossário", ...s.glossario.map((g) => `- ${g.termo}: ${g.definicao}`));
  return lines.join("\n") + "\n";
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
