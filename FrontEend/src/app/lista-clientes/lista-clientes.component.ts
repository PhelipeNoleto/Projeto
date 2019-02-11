import { Component, OnInit } from '@angular/core';
import { ApiService, clientes } from '../api-service/api.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  listaClientes: clientes[];

  constructor(private api: ApiService) { }

  obterClientes() {
    this.api.listCliente().subscribe(
      (data) => {
        console.log(data);
        this.listaClientes = JSON.parse((data as any)._body);
      },
      () => {
        console.log("Erro ao obter lista de clientes");
      }
    )
  }

  salvar(cliente: clientes) {
    this.api.updateCliente(cliente).subscribe(
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

  excluir(cliente: clientes) {
    this.api.deleteCliente(cliente).subscribe(
      (data) => {
        console.log(data);
        this.listaClientes.splice(this.listaClientes.indexOf(cliente), 1);
      },
      () => {
        console.log("Erro ao obter lista de clientes");
        alert("registro excluido com sucesso.");
      }
    )
  }

  ngOnInit() {
    this.obterClientes();
  }

}
