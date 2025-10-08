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