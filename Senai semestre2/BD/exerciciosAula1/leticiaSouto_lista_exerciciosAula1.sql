create database db_escola_b;
use db_escola_b;

create table tbl_alunos(
	id_aluno INT,
    nome VARCHAR(100),
    data_nascimento DATE,
    media_final DECIMAL(4,2)
);


alter table tbl_alunos add email varchar(150);

drop table tbl_alunos;
drop database db_escola_b;

    
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


create database db_rh_empresa_b;
use db_rh_empresa_b;

create table tbl_funcionarios(
	id_funcionario INT,
    nome_completo VARCHAR(150),
    data_admissao date
);

alter table tbl_funcionarios add salario decimal(10,2);

drop table tbl_funcionarios;
drop database db_rh_empresa_b;


create database db_academia_b;
use db_academia_b;

create table tbl_membros(
	id_membro INT,
    nome VARCHAR(100),
    tipo_plano VARCHAR(50)
);

alter table tbl_membros add column data_incricao date;

drop table tbl_membros;
drop database db_academia_b;