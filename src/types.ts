export interface Especialidade {
  id: number;
  titulo: string;
  cor_fundo: string;
  situacoes: SituacaoClinica[];
}

export interface ResultadoNoc {
  resultado: string;
  definicao: string;
  isCorrect: boolean;
}

export interface AtividadeNic {
  texto: string;
  isCorrect: boolean;
}

export interface Intervencao {
  titulo_nic: string;
  atividades_nic: AtividadeNic[];
  isCorrect: boolean;
}

export interface ItemClinico {
  texto: string;
  isCorrect: boolean;
}

export interface Diagnostico {
  titulo_diagnostico: string;
  fatores_relacionados: ItemClinico[];
  caracteristicas_definidoras: ItemClinico[];
  intervencoes: Intervencao[];
  resultados_noc: ResultadoNoc[];
  isCorrect: boolean;
  dica: string;
}

export interface SituacaoClinica {
  id: string;
  cenario: string; // Título
  descricao: string; // Descrição detalhada
  evolucao_base: string; // Used to generate the 10-line evolution later
  diagnosticos: Diagnostico[];
}

export interface MenuPrincipal {
  titulo_tela: string;
  especialidades: Especialidade[];
}
