import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastroClientesComponent } from '../cadastro-clientes/cadastro-clientes.component';
import { ListaClientesComponent } from '../lista-clientes/lista-clientes.component';
import { CadastroAcoesComponent } from '../cadastro-acoes/cadastro-acoes.component';
import { ListaAcoesComponent } from '../lista-acoes/lista-acoes.component';
import { CadastroOrdensComponent } from '../cadastro-ordens/cadastro-ordens.component';
import { Router } from '@angular/router';
import { ListaOrdensComponent } from '../lista-ordens/lista-ordens.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    console.log('Component app-header inciado...');
  }

  cadastrarCliente() {
    const dialogRef = this.dialog.open(CadastroClientesComponent, {
      width: '50%',
      height: '70%'
    });
  }

  alterarCliente() {
    const dialogRef = this.dialog.open(ListaClientesComponent, {
      width: '50%',
      height: '70%'
    });
  }

  cadastrarAcao() {
    const dialogRef = this.dialog.open(CadastroAcoesComponent, {
      width: '50%',
      height: '70%'
    });
  }

  alterarAcao() {
    const dialogRef = this.dialog.open(ListaAcoesComponent, {
      width: '50%',
      height: '70%'
    });
  }

  criarOrdem() {
    const dialogRef = this.dialog.open(CadastroOrdensComponent, {
      width: '50%',
      height: '70%'
    });
  }

  abrirOrdens() {
    const dialogRef = this.dialog.open(ListaOrdensComponent, {
      width: '99%',
      height: '70%'
    });
  }
}
