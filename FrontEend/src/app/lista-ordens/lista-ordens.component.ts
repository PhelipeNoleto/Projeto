import { Component, OnInit } from '@angular/core';
import { ApiService, ordens } from '../api-service/api.service';

@Component({
  selector: 'app-lista-ordens',
  templateUrl: './lista-ordens.component.html',
  styleUrls: ['./lista-ordens.component.css']
})
export class ListaOrdensComponent implements OnInit {

  listaOrdens:ordens[];

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.obterOrdens();
  }

  obterOrdens() {
    this.api.listOrdens().subscribe(
      (data) => {
        console.log(data);
        this. listaOrdens = JSON.parse((data as any)._body);
      },
      () => {
        alert("Erro ao obter ordens.");
        console.log("Erro ao obter lista de clientes");
      }
    )
  }

}
