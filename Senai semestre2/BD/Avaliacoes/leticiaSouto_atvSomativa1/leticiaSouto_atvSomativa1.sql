create database db_biblioteca_comunitaria;
use db_biblioteca_comunitaria;

create table tbl_livros(
	isbn character(50) primary key not null,
    titulo varchar(100) not null,
    ano_publicacao date,
    editora varchar(100) not null
);

create table tbl_autores(
	id_autor int primary key not null,
    nome varchar(100) not null,
    nacionalidade varchar(50)
);

create table tbl_exemplares(
	id_exemplar int primary key not null,
    isbn character(50) not null,
    status varchar(50) not null
);

create table tbl_membros(
	id_membros int primary key not null,
    nome_completo varchar(200) not null, 
    endereco char not null,
    telefone numeric (11)
);

create table tbl_emprestimos(
	id_membros int not null,
    id_exemplar int not null,
    data_emprestimo date not null,
    previsao_devolucao date,
    data_devolucao date not null
);

create user 'estagiario'@'localhost' identified by 'mudar123';
grant alter on db_biblioteca_comunitaria.tbl_livros to 'estagiario'@'localhost';


alter table tbl_livros add column genereo varchar(50);

drop database db_biblioteca_comunitaria;
drop table tbl_emprestimos;
drop table tbl_livros;
drop table tbl_membros;
drop table tbl_exemplares;
drop table tbl_autores;