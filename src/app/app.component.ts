import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CrudService } from './services/crud.service';
import { ListaCompraComponent } from './components/lista-compra/lista-compra.component';
import { SistemaBancarioComponent } from './pages/sistema-bancario/sistema-bancario.component';
import { MeuControleComponent } from './pages/meu-controle/meu-controle.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    ListaCompraComponent,
    SistemaBancarioComponent,
    MeuControleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [],
})
export class AppComponent implements OnInit {
  title = 'aula-01';
  inputNome = '';
  inputTelefone = '';
  // listaDeContatos: any[] = [];
  listaDeContatos = [
    {
      _id: '1',
      nome: 'Carlos Ximenes',
      telefone: '11999998888',
    },
    {
      _id: '2',
      nome: 'Ana Silva',
      telefone: '21988887777',
    },
    {
      _id: '3',
      nome: 'João Santos',
      telefone: '31977776666',
    },
  ];

  constructor(private _crudService: CrudService) {}

  ngOnInit() {
    // this.atualizarLista();
  }

  // atualizarLista = () => {
  //   this._crudService.listarContatos().subscribe((res: any) => {
  //     this.listaDeContatos = res;
  //   });
  // };

  botaoInativo = () => {
    return this.inputNome == '' || this.inputTelefone.length == 0;
  };

  adicionarContato = () => {
    const novoContato = {
      _id:
        this.listaDeContatos.length > 0
          ? this.listaDeContatos[this.listaDeContatos.length - 1]._id + 1
          : '1',
      nome: this.inputNome,
      telefone: this.inputTelefone,
    };
    this.listaDeContatos.push(novoContato);
    this.limparCamposContato();

    // this._crudService
    //   .criarContato(this.inputNome, this.inputTelefone)
    //   .subscribe((res) => {
    //     this.limparCamposContato();
    //     this.atualizarLista();
    //   });
  };

  deletarContato = (id: string) => {
    this.listaDeContatos = this.listaDeContatos.filter(
      (contato) => contato._id != id,
    );
    // this._crudService.deletarContato(id).subscribe((res) => {
    //   this.atualizarLista();
    // });
  };

  limparCamposContato = () => {
    this.inputNome = '';
    this.inputTelefone = '';
  };
}
