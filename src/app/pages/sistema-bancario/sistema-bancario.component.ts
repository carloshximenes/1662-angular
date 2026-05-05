import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Conta } from '../../types/conta.types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sistema-bancario',
  imports: [CommonModule, FormsModule],
  templateUrl: './sistema-bancario.component.html',
  styleUrl: './sistema-bancario.component.css',
})
export class SistemaBancarioComponent {
  tipoConta = [
    { codigo: 'CC', descricao: 'Conta Corrente' },
    { codigo: 'CP', descricao: 'Conta Poupança' },
  ];

  filtroTipoConta = '';

  novaConta: Conta = {
    titular: '',
    cpf: '',
    tipoConta: 'CC',
    valorDeposito: 0,
    limiteConta: 40,
  };

  listaDeContas: Conta[] = [
    {
      titular: 'Carlos Silva',
      cpf: '123.456.789-00',
      tipoConta: 'CC',
      valorDeposito: 5000,
      limiteConta: 2000,
    },
    {
      titular: 'Ana Oliveira',
      cpf: '987.654.321-00',
      tipoConta: 'CP',
      valorDeposito: 10000,
      taxaRendimento: 0.015,
    },
    {
      titular: 'Marcos Pereira',
      cpf: '111.222.333-44',
      tipoConta: 'CC',
      valorDeposito: 2500,
      limiteConta: 1000,
    },
    {
      titular: 'Juliana Souza',
      cpf: '555.666.777-88',
      tipoConta: 'CP',
      valorDeposito: 8000,
      taxaRendimento: 0.02,
    },
    {
      titular: 'Fernanda Costa',
      cpf: '999.888.777-66',
      tipoConta: 'CC',
      valorDeposito: 15000,
      limiteConta: 5000,
    },
  ];

  alterarTipoConta(event: any) {
    const novoTipoConta = event.target.value;
    this.novaConta.tipoConta = novoTipoConta;
  }

  adicionarConta() {
    // const novaContaDesestruturada = { ...this.novaConta };
    // this.listaDeContas.push(novaContaDesestruturada);

    this.listaDeContas.push({ ...this.novaConta });
    this.limparDadosConta();
  }

  limparDadosConta() {
    this.novaConta = {
      titular: '',
      cpf: '',
      tipoConta: 'CC',
      valorDeposito: 0,
      limiteConta: 40,
    };
  }

  aplicarFiltroConta(event: any) {
    this.filtroTipoConta = event.target.value;
  }

  listarContasFiltradas() {
    if (this.filtroTipoConta == '') {
      return this.listaDeContas;
    }

    return this.listaDeContas.filter(
      (conta) => conta.tipoConta == this.filtroTipoConta,
    );
  }

  encerrarConta(cpf: string) {
    this.listaDeContas = this.listaDeContas.filter((conta) => conta.cpf != cpf);
  }
}
