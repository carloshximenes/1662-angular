import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  url = 'https://crudcrud.com/api/f57d0354793c4e67a7ddf4a36c8bc643';
  urlContatos = this.url + '/contatos';

  constructor(private _http: HttpClient) {}

  // Create
  criarContato(nome: string, telefone: string) {
    const body = {
      nome: nome,
      telefone: telefone,
    };
    return this._http.post(this.urlContatos, body);
  }

  // Read
  listarContatos() {
    return this._http.get(this.urlContatos);
  }
  // Update

  // Delete
  deletarContato(id: string) {
    return this._http.delete(this.urlContatos + '/' + id);
  }
}
