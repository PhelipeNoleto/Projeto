import { Component, OnInit } from '@angular/core';
import { ordens, ApiService, acoes, clientes } from '../api-service/api.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-cadastro-ordens',
  templateUrl: './cadastro-ordens.component.html',
  styleUrls: ['./cadastro-ordens.component.css']
})
export class CadastroOrdensComponent implements OnInit {

  ordem = new ordens
  listaAcoes: acoes[];
  listaClientes: clientes[];
  listaOrdens: ordens[];
  valoracao: number;

  constructor(private api: ApiService) { }

  cadastrar() {
    let datacotacao:Date = this.obterAcao(this.ordem.idacao).datacotacao;
    
    alert(formatDate(this.ordem.dataordem,"dd/MM/yyyy","pt"));
    //if (datacotacao == this.ordem.dataordem) {

      if (this.ordem.tipoordem == "V")
        this.ordem.datacompra = new Date();

      this.api.insertOrdens(this.ordem).subscribe(
        (data) => {
          alert("Ordem criada com sucesso.");
          console.log(data);
          this.ordem = new ordens;
        },
        (error) => {
          console.log("Erro ao finalizar cadastro, verifique as informações e tente novamente.");
        }
      );
    /*} else
      alert("Operação não permitida, não existem cotações para a data de hoje.")
      */}

  obterAcoes() {
    this.api.listAcoes().subscribe(
      (data) => {
        console.log(data);
        this.listaAcoes = JSON.parse((data as any)._body);
      },
      (error) => {
        console.log("Erro ao obter lista de clientes");
      }
    )
  }

  obterOrdens() {
    this.api.listAcoes().subscribe(
      (data) => {
        console.log(data);
        this.listaOrdens = JSON.parse((data as any)._body);
      },
      (error) => {
        console.log("Erro ao obter lista de ordens");
      }
    )
  }

  obterClientes() {
    this.api.listCliente().subscribe(
      (data) => {
        console.log(data);
        this.listaClientes = JSON.parse((data as any)._body);
      },
      (error) => {
        console.log("Erro ao obter lista de clientes");
      }
    )
  }

  obterAcao(id: string): acoes {
    return this.listaAcoes.find(acao => acao.id == id);
  }

  obterCliente(id: number): clientes {
    return this.listaClientes.find(cliente => cliente.id == id);
  }

  calcularValorOrdem() {
    let valorcotacao: number = this.obterAcao(this.ordem.idacao).valorcotacao;
    this.ordem.valorordem = this.ordem.quantidadeacao * valorcotacao;
  }

  calcularTaxaCorretagem() {
    let tipopessoa: string = this.obterCliente(this.ordem.idcliente).tipopessoa;

    if (this.ordem.tipoordem == "C")
      if (this.ordem.valorordem < 20000)
        if (tipopessoa == "F")
          this.ordem.taxacorretagem = 0
        else
          this.ordem.taxacorretagem = 0.25;
      else
        if (this.ordem.valorordem >= 20000)
          if (tipopessoa == "F")
            this.ordem.taxacorretagem = 0.75
          else
            this.ordem.taxacorretagem = 0.45
        else
          if (tipopessoa == "F")
            this.ordem.taxacorretagem = 0.70;
          else
            this.ordem.taxacorretagem = 0.60;
  }

  calculcarImpostoRenda() {
    if (this.ordem.tipoordem == "C")
      this.ordem.impostorenda = 0;
    else {
      if (this.listaOrdens.length < 0) {
        let ordemCompra: ordens = this.listaOrdens.find(ordem => ordem.dataordem == new Date && this.ordem.idacao == ordem.idacao);
        let cotacaoCompra: number = ordemCompra.valorordem / ordemCompra.quantidadeacao;
        let cotacaoHoje: number = this.obterAcao(this.ordem.idacao).valorcotacao;

        if (cotacaoCompra < cotacaoHoje) {
          let variacao: number = cotacaoHoje - cotacaoCompra;
          this.ordem.impostorenda = (variacao * this.ordem.quantidadeacao) * 0.15;
        }
        else
          this.ordem.impostorenda = 0;
      }
    }
  }

  calcularDescontos() {
    this.calcularValorOrdem();
    this.calcularTaxaCorretagem();
    this.calculcarImpostoRenda();
  }

  ngOnInit() {
    this.ordem.dataordem = new Date();

    this.obterClientes();
    this.obterAcoes();
    this.obterOrdens();
  }

}
