import { Component, OnInit } from '@angular/core';
import { ApiService, acoes } from '../api-service/api.service';

@Component({
  selector: 'app-cadastro-acoes',
  templateUrl: './cadastro-acoes.component.html',
  styleUrls: ['./cadastro-acoes.component.css']
})
export class CadastroAcoesComponent implements OnInit {

  acao = new acoes();

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  cadastrar(acao: acoes) {
    this.api.insertAcoes(acao)
      .subscribe((data) => {
        this.acao = new acoes
        alert("Cadastro realizado com sucesso!");
        console.log("Requisição realizada com sucesso!");
      }, (erro) => {
        console.log(erro);
        alert("Erro ao finalizar cadastro, verifique as informações e tente novamente.");
      });
  }

}
