export type Receita = {
  descricao: string;
  tipo: 'Entrada' | 'Saída';
  valor: number | null;
};
