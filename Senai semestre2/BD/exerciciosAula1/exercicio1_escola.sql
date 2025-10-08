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

    