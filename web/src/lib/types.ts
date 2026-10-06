export type Pilar = "proeminencia" | "valorizacao" | "fidelidade";

export interface Marca {
  slug: string;
  nome: string;
  nomeDados: string;
  total: number | null;
  percentil: number | null;
  pilares: Record<Pilar, number | null>;
  ia: { mencao: number | null; primeira: number | null; fontePropria: number | null; ic95: string | null; soGrupo: number | null };
  resposta: { porComentario: number | null; respondidos: number | null; horasMediana: number | null };
  categoriaTop10: number | null;
  materias: number | null;
  seguidores: { instagram: number | null; facebook: number | null; youtube: number | null };
  buscaMarca: number | null;
  posicaoModal: number | null;
  /** Share of 2,000 random-weight draws at each position. */
  posicoes: Record<number, number> | null;
  submarcas: { nome: string; descritiva: boolean }[];
}

export interface ValorSub {
  marca: string;
  valor: number | null;
  participacao: number | null;
  percentil: number | null;
}

export interface Submetrica {
  codigo: string;
  nome: string;
  descricao: string;
  pilar: Pilar;
  unidade: string;
  naNota: boolean;
  nota: string | null;
  valores: ValorSub[];
}

export interface Elo {
  volume: string;
  slug: string;
  segmento: string;
  nome: string;
  unidade: "marca" | "grupo";
  /** Share each brand would have if all were equal (100 / n). */
  referencia: number;
  marcas: Marca[];
  submetricas: Submetrica[];
}

export interface DocumentoMeta {
  arquivo: string;
  slug: string;
  volume: string;
  segmento: string;
  titulo: string;
  tipo: string;
  data: string;
  versao: string;
  sha256: string;
}

export interface Serie {
  geradoEm: string;
  elos: Elo[];
  documentos: DocumentoMeta[];
  glossario: { termo: string; definicao: string }[];
}
