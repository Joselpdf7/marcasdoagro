import type { Pilar } from "./types.ts";

export const ELOS_META: Record<string, { slug: string; segmento: string; nome: string; arquivo: string; curto: string }> = {
  "1": { slug: "defensivos", segmento: "defensivos", nome: "Defensivos agrícolas", arquivo: "defensivos", curto: "Defensivos" },
  "2": { slug: "maquinas", segmento: "maquinario", nome: "Máquinas agrícolas", arquivo: "maquinario", curto: "Máquinas" },
  "3": { slug: "fertilizantes", segmento: "fertilizantes", nome: "Fertilizantes", arquivo: "fertilizantes", curto: "Fertilizantes" },
  "4": { slug: "sementes", segmento: "sementes", nome: "Sementes", arquivo: "sementes", curto: "Sementes" },
};

export const PILARES: { id: Pilar; nome: string; pergunta: string }[] = [
  { id: "proeminencia", nome: "Proeminência", pergunta: "Quando o produtor procura, a marca aparece?" },
  { id: "valorizacao", nome: "Valorização", pergunta: "Quando o produtor chega, o que a marca entrega?" },
  { id: "fidelidade", nome: "Fidelidade", pergunta: "A relação continua?" },
];

/** Sub-metrics outside the score in each volume (diagnostic or descriptive). */
export const FORA_DA_NOTA: Record<string, string[]> = {
  "1": ["P2_", "V6c_"],
  "2": ["P2_", "V6c_", "V7_"],
  "3": ["P2_", "V1_", "V6c_"],
  "4": ["P2_", "P7c_", "V2_", "V6c_", "V7_"],
};

const REDE: Record<string, string> = { instagram: "Instagram", facebook: "Facebook", youtube: "YouTube" };

export function SUBMETRICAS(codigo: string): { nome: string; descricao: string } {
  const rede = REDE[codigo.split("_").at(-1) ?? ""] ?? "";
  const c = codigo.split("_")[0] ?? codigo;
  const map: Record<string, [string, string]> = {
    P1: ["Busca pela marca", "Buscas mensais pelo nome da marca com intenção do segmento."],
    P2: ["Autoridade do domínio", "Pontuação de autoridade do domínio raiz. Diagnóstico, fora da nota."],
    P3: ["Palavras-chave orgânicas", "Palavras-chave em que o site da marca aparece na busca orgânica."],
    P4: ["Busca de categoria", "Parcela das consultas sem marca em que a marca tem página própria no top 10."],
    P5: [`Seguidores no ${rede}`, `Seguidores do perfil oficial no ${rede}, no dia da coleta.`],
    P6: ["Imprensa", "Matérias em que a marca é o assunto nos 15 veículos do elo, em 12 meses."],
    P7a: ["Menção nas IAs", "Parcela das respostas dos quatro assistentes em que a marca aparece."],
    P7b: ["Primeira citação nas IAs", "Parcela das respostas em que a marca é a primeira do painel a aparecer."],
    P7c: ["Menção só ao grupo", "Respostas que citam só o nome do grupo, sem a divisão. Fora da nota."],
    V1: [
      codigo.includes("modelo") ? "Busca por modelo" : codigo.includes("cultivar") ? "Busca por cultivar" : "Busca por produto",
      codigo.includes("modelo")
        ? "Buscas mensais por marca mais modelo."
        : codigo.includes("cultivar")
          ? "Buscas mensais pelas cultivares da marca."
          : "Buscas mensais por produto mais bula.",
    ],
    V2: ["Cultivares com página própria", "Cultivares da cesta com página própria no site. Descritiva."],
    V3: [`Visualizações no ${rede}`, `Visualizações medianas por peça no ${rede}.`],
    V5: ["Autoatendimento", "Parcela de dez itens de autoatendimento presentes no site."],
    V6a: ["Desempenho do site", "Nota de desempenho em três páginas comparáveis (0 a 100)."],
    V6b: ["Acessibilidade do site", "Nota de acessibilidade em três páginas comparáveis (0 a 100)."],
    V6c: ["Experiência de campo", "Dados de campo de carregamento no celular. Diagnóstico, fora da nota."],
    V7: ["Fonte própria nas IAs", "Respostas apoiadas em página da própria marca julgada pertinente."],
    F1: [`Cadência no ${rede}`, `Peças publicadas por semana no ${rede}.`],
    F2: [`Interações por peça no ${rede}`, `Interações medianas por peça no ${rede}.`],
    F3: [`Engajamento por mil no ${rede}`, `Interações por mil seguidores no ${rede}, só com base de 5 mil ou mais.`],
    F5: ["Resposta ao público", "Respostas da marca por comentário do público no Instagram."],
  };
  const [nome, descricao] = map[c] ?? [codigo, ""];
  return { nome, descricao };
}

/** Same wording rule applied to the query base. */
export function cleanNote(note: string): string {
  return note.replace("dentro do saldo de unidades", "dentro do limite de consultas");
}

export function slugify(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
