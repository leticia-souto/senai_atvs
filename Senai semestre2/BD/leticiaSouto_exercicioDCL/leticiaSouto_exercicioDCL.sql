create user 'secretaria'@'localhost' identified by 'escola@sec1';
create user 'professor'@'localhost' identified by 'escola@prof1';

drop user 'secretaria'@'localhost';
drop user 'professor'@'localhost';

create database db_escola_b;
use db_escola_b;

create table tbl_alunos(
	id_aluno INT,
    nome VARCHAR(100),
    data_nascimento DATE,
    media_final DECIMAL(4,2)
);

grant all privileges on db_escola_b.tbl_alunos to 'secretaria'@'localhost';
grant select on db_escola_b.tbl_alunos to 'professor'@'localhost';
grant update on db_escola_b.tbl_alunos to 'professor'@'localhost';

revoke all privileges on db_escola_b.tbl_alunos from 'secretaria'@'localhost';


create database db_biblioteca_b;

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

INSERT INTO tbl_livros (id_livro, titulo, autor, ano_publicacao, preco)
VALUES
(1, 'Dom Casmurro', 'Machado de Assis', 1899, 39.90),
(2, 'O Alquimista', 'Paulo Coelho', 1988, 29.50),
(3, 'A Hora da Estrela', 'Clarice Lispector', 1977, 34.00);

drop table tbl_livros;

