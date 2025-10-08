create database db_biblioteca_b;

drop database db_biblioteca_b;

use db_biblioteca_b;

create table tbl_livros (
	id_livro int,
    titulo VARCHAR(100),
    autor VARCHAR(100),
    ano_publicacao INT,
    preco DECIMAL(10, 2)
);

create index  idx_titulo on tbl_livros (titulo);
drop index idx_titulo on tbl_livros;


