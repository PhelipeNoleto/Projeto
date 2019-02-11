using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebService
{
    public class createDB : CreateDatabaseIfNotExists<handsonEntities>
    {
        protected override void Seed(handsonEntities context)
        {
            context.acoes.Add(new acoes()
            {
                id = "BTG Pactual",
                datacotacao = DateTime.Now,
                valorcotacao = 150.00M
            });

            context.clientes.Add(new clientes()
            {
                nome = "Fabio",
                cpfcnpj = "010101010101",
                nascimento = Convert.ToDateTime("01/02/1991"),
                tipopessoa = ""
            });

            context.ordens.Add(new ordens()
            {
                idcliente = 1,
                idacao = "BTG Pactual",
                datacompra = null,
                dataordem = DateTime.Now,
                impostorenda = 0,
                taxacorretagem = 0,
                quantidadeacao = 1,
                tipoordem = "C",
                valorordem = 150M
            });

            base.Seed(context);
        }
    }
}