import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ReactiveFormsModule, NgModel } from '@angular/forms';

import {MatMenuModule} from '@angular/material/menu'; 
import {MatSelectModule} from '@angular/material/select'
import { HttpModule } from '@angular/http';
import {MatListModule} from '@angular/material/list';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component'; 
import {MatCardModule} from '@angular/material/card';
import { CadastroAcoesComponent } from './cadastro-acoes/cadastro-acoes.component';
import { ListaAcoesComponent } from './lista-acoes/lista-acoes.component';
import { CadastroOrdensComponent } from './cadastro-ordens/cadastro-ordens.component';
import { ListaOrdensComponent } from './lista-ordens/lista-ordens.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CadastroClientesComponent,
    NgModel,
    ListaClientesComponent,
    CadastroAcoesComponent,
    ListaAcoesComponent,
    CadastroOrdensComponent,
    ListaOrdensComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSelectModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatMenuModule,
    HttpModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
