use db_biblioteca_b;

alter table tbl_livros add genero varchar(50) after id_livro;
alter table tbl_livros drop column genero;
alter table tbl_livros modify id_livro varchar(50) after genero;
alter table tbl_livros modify genero varchar(50) after id_livro;


create index idx_titulo on tbl_livros(titulo);
drop table tbl_alunos