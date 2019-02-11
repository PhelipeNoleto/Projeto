import { Component, OnInit } from '@angular/core';
import { acoes, ApiService } from '../api-service/api.service';

@Component({
  selector: 'app-lista-acoes',
  templateUrl: './lista-acoes.component.html',
  styleUrls: ['./lista-acoes.component.css']
})
export class ListaAcoesComponent implements OnInit {

  listaAcoes:acoes[];

  constructor(private api: ApiService) { }

  obterAcoes() {
    this.api.listAcoes().subscribe(
      (data) => {
        console.log(data);
        this. listaAcoes = JSON.parse((data as any)._body);
      },
      () => {
        console.log("Erro ao obter lista de clientes");
      }
    )
  }

  salvar(acao: acoes) {
    this.api.updateAcoes(acao).subscribe(
      (data) => {
        console.log(data);
        alert("Alteração realizada com sucesso.");
      },
      () => {
        console.log("Erro ao obter lista de clientes");
        alert("Erro ao relaizar alteração.");
      }
    )
  }

  excluir(acao: acoes) {
    this.api.deleteAcoes(acao).subscribe(
      (data) => {
        console.log(data);
        this.listaAcoes.splice(this.listaAcoes.indexOf(acao), 1);
      },
      () => {
        console.log("Erro ao obter lista de clientes");
        alert("registro excluido com sucesso.");
      }
    )
  }

  ngOnInit() {
    this.obterAcoes();
  }

}
