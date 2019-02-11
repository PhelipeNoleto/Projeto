import { Component, OnInit } from '@angular/core';
import { ApiService, clientes } from '../api-service/api.service';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  cliente = new clientes();

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  cadastrar() {
    this.api.insertCliente(this.cliente)
    .subscribe((data) => {
        this.cliente = new clientes
          alert("Cadastro realizado com sucesso!");
          console.log("Requisição realizada com sucesso!");
      }, (erro) => {
        console.log(erro);
        alert("Erro ao finalizar cadastro, verifique as informações e tente novamente.");
      });
  }

}
