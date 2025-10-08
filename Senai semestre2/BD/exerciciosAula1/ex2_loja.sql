create database db_loja_virtual_b;
use db_loja_virtual_b;

create table tbl_produtos(
	id_produto INT,
    nome VARCHAR (100),
    preco DECIMAL(10,2)
);

alter table tbl_produtos add column estoque int;

drop table tbl_produtos;
drop database db_loja_virtual_b;


