import { Component } from '@angular/core';
import { LANCAMENTOS_MOCK } from '../../mocks/receitas.mock';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Receita } from '../../types/receita.types';

@Component({
  selector: 'app-meu-controle',
  imports: [CommonModule, FormsModule],
  templateUrl: './meu-controle.component.html',
  styleUrl: './meu-controle.component.css',
})
export class MeuControleComponent {
  receitas: Receita[] = LANCAMENTOS_MOCK;

  tiposReceita = ['Entrada', 'Saída'];

  novaReceita: Receita = {
    descricao: '',
    tipo: 'Entrada',
    valor: null,
  };

  valoresEntrada() {
    const entradas = this.receitas.filter((r) => r.tipo == 'Entrada');
    return entradas.reduce((acc, e) => acc + (e.valor || 0), 0);
  }

  valoresSaida() {
    const saidas = this.receitas.filter((r) => r.tipo == 'Saída');
    return saidas.reduce((acc, s) => acc + (s.valor || 0), 0);
  }

  adicionarReceita() {
    if (!this.novaReceita.valor || this.novaReceita.valor <= 0) {
      window.alert('O valor não pode ser nulo ou vazio');
    } else {
      this.receitas.push({ ...this.novaReceita });
    }
  }
}
