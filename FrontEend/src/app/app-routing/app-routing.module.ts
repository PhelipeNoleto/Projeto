import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './../content/content.component';
import { CadastroClientesComponent } from './../cadastro-clientes/cadastro-clientes.component';
import { ListaClientesComponent } from '../lista-clientes/lista-clientes.component';
import { CadastroAcoesComponent } from '../cadastro-acoes/cadastro-acoes.component';
import { ListaAcoesComponent } from '../lista-acoes/lista-acoes.component';
import { CadastroOrdensComponent } from '../cadastro-ordens/cadastro-ordens.component';
import { ListaOrdensComponent } from '../lista-ordens/lista-ordens.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'cadastro-clientes', component: CadastroClientesComponent },
  { path: 'lista-clientes', component: ListaClientesComponent },
  { path: 'cadastro-acoes', component: CadastroAcoesComponent },
  { path: 'lista-acoes', component: ListaAcoesComponent },
  { path: 'cadastro-acoes', component: CadastroOrdensComponent },
  { path: 'lista-ordens', component: ListaOrdensComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
