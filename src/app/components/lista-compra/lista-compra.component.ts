import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-compra',
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-compra.component.html',
  styleUrl: './lista-compra.component.css',
})
export class ListaCompraComponent {
  inputProduto = '';
  inputQuantidade = 0;
  listaProdutos = [
    {
      id: '1',
      descricao: 'Arroz',
      quantidade: 2,
    },
    {
      id: '2',
      descricao: 'Feijão',
      quantidade: 3,
    },
  ];

  adicionarProduto = () => {
    this.listaProdutos.push({
      id:
        this.listaProdutos.length > 0
          ? this.listaProdutos[this.listaProdutos.length - 1].id + 1
          : '1',
      descricao: this.inputProduto,
      quantidade: this.inputQuantidade,
    });
  };

  deletarProduto = (id: string) => {
    this.listaProdutos = this.listaProdutos.filter(
      (produto) => produto.id != id,
    );
  };

  addQuantidade = (id: string) => {
    this.listaProdutos = this.listaProdutos.map((produto) => {
      if (produto.id == id) {
        produto.quantidade++;
      }
      return produto;
    });
  };

  remQuantidade = (id: string) => {
    this.listaProdutos = this.listaProdutos.map((produto) => {
      if (produto.id == id) {
        produto.quantidade--;
      }
      return produto;
    }).filter(produto => produto.quantidade > 0);
  };
}
