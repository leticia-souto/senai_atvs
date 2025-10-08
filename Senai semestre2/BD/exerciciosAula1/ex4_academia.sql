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