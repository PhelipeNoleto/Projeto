create database handson;

go

use handson;

create table clientes(
	id int not null identity(1,1),
	nome varchar(150) not null,
	cpfcnpj varchar(30) null,
	nascimento date not null,
	tipopessoa char not null,
	constraint pk_clientes_id primary key(id),
	constraint chk_clientes_tipopessoa check (tipopessoa in('F','J'))
)

create table acoes(
	id varchar(10) not null,
	datacotacao date not null,
	valorcotacao decimal(16,4) not null,
	constraint pk_acoes_id primary key(id)
)

create table ordens(
	id int not null identity(1,1),
	idcliente int not null,
	idacao varchar(10) not null,
	dataordem date  null,
	quantidadeacao int not null,
	datacompra date null,
	valorordem decimal(16,4) not null,
	taxacorretagem decimal(16,4) not null,
	impostorenda decimal(16,4) not null,
	tipoordem char not null,
	constraint pk_ordens_id primary key(id),
	constraint chk_ordens_tipopessoa check (tipoordem in('C','V')),
	constraint fk_ordens_idcliente foreign key(idcliente) references clientes(id),
	constraint fk_ordens_idacao foreign key(idacao) references acoes(id)
)
