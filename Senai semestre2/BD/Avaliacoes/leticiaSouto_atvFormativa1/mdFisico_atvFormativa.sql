create database db_plataforma_b;
use db_plataforma_b;

drop table tbl_alunos;
drop table tbl_matricula;
drop table tbl_cursos;
drop table tbl_aulas;
drop table tbl_instrutor;

create table tbl_alunos(
	email INT primary key not null,
    CPF INT,
    nome_completo varchar(100),
    id_matricula int
);

create table tbl_matricula(
	id_matricula int primary key not null,
    data_matricula date,
    id_cursos int,
    status_matricula varchar(20) 
);

create table tbl_cursos(
	id_cursos int primary key not null,
    carga_horaria int,
    nivel_dificuldade varchar(100),
    id_aula int,
    id_instrutor int,
    id_matricula int
);

create table tbl_aulas(
	id_aula int primary key not null,
    titulo varchar(200),
    link_videoAula varchar(1000),
    id_instrutor int,
    id_cursos int
);

create table tbl_instrutor(
	id_instrutor int primary key not null,
    nome_completo varchar(200),
    biografia text(2000),
    id_cursos int
);
