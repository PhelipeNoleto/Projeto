import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http'

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseURL: string = "http://localhost:24604/api/";

  constructor(private http: Http) { }

  listCliente() {
    return this.http.get(this.baseURL + "clientes/list");
  }

  insertCliente(cliente: clientes) {
    return this.http.post(this.baseURL + "clientes/insert", cliente);
  }

  updateCliente(cliente: clientes) {
    return this.http.put(this.baseURL + "clientes/update", cliente);
  }

  deleteCliente(cliente: clientes) {
    return this.http.delete(this.baseURL + "clientes/delete/" + cliente.id);
  }

  listAcoes() {
    return this.http.get(this.baseURL + "acoes/list");
  }

  insertAcoes(acao: acoes) {
    return this.http.post(this.baseURL + "acoes/insert", acao);
  }

  updateAcoes(acao: acoes) {
    return this.http.put(this.baseURL + "acoes/update", acao);
  }

  deleteAcoes(acao: acoes) {
    return this.http.delete(this.baseURL + "acoes/delete/" + acao.id);
  }

  listOrdens() {
    return this.http.get(this.baseURL + "ordens/list");
  }

  insertOrdens(ordem: ordens) {
    return this.http.post(this.baseURL + "ordens/insert", ordem);
  }

  updateOrdens(ordem: ordens) {
    return this.http.put(this.baseURL + "ordens/update", ordem);
  }

  deleteOrdens(ordem: ordens) {
    return this.http.delete(this.baseURL + "ordens/delete/" + ordem.id);
  }
}

export class clientes {
  id: Number;
  nome: string;
  cpfcnpj: string;
  nascimento: Date;
  tipopessoa: string;

  ordens:ordens[];
}

export class acoes {
  id: string;
  datacotacao: Date;
  valorcotacao: number
  
  ordens:ordens[];
}

export class ordens {
  id: number;
  idcliente: number;
  idacao: string;
  dataordem: Date;
  quantidadeacao: number;
  datacompra: Date;
  valorordem: number;
  taxacorretagem: number;
  impostorenda: number;
  tipoordem: string;

  clientes: clientes;
  acoes: acoes;
}
