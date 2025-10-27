CREATE DATABASE db_saber_e_cia_b;
drop database db_saber_e_cia_b;

USE db_saber_e_cia_b;

drop table tbl_livro;
drop table tbl_autor_livro;
drop table tbl_exemplar;

CREATE TABLE tbl_livro(
    isbn VARCHAR(30) PRIMARY KEY,
    titulo_livro VARCHAR(200) NOT NULL,
    ano_publicacao YEAR NOT NULL,
    editora VARCHAR(200) NOT NULL
);

INSERT INTO tbl_livro(isbn, titulo_livro, ano_publicacao, editora)
    VALUES ('123456789','Java - Como programar.', '2000', 'SENAI'),
           ('987654321','Java - Como programar 2', '2010', 'SENAI');
           
INSERT INTO tbl_livro(isbn, titulo_livro, ano_publicacao, editora)
values ('978-85-325-3078-3', 'Harry Potter e a Pedra Filosofal', '1997', 'Rocco'),
		('978-85-7126-061-0', 'Dom Casmurro', '1901', 'Editora Clássica');
        
select * from tbl_livro;

CREATE TABLE tbl_autor(
    id_autor INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome_autor VARCHAR(200) NOT NULL,
    nacionalidade VARCHAR(200) NOT NULL
);

INSERT INTO tbl_autor(nome_autor, nacionalidade)
    VALUES ('Daniel Manoel','Brasileiro');
    
insert into tbl_autor (nome_autor, nacionalidade)
values ('Machado de Assis', 'Brasileiro');

insert into tbl_autor (nome_autor, nacionalidade)
values ('J.K. Rowling', 'Briatanica');

select * from tbl_autor;

CREATE TABLE tbl_autor_livro(
    isbn VARCHAR(30) NOT NULL,
    id_autor INTEGER NOT NULL,
   
    CONSTRAINT fk_isbn_tbl_autor_livro FOREIGN KEY (isbn)
        REFERENCES tbl_livro(isbn),
   
    CONSTRAINT fk_id_autor_tbl_autor_livro FOREIGN KEY (id_autor)
        REFERENCES tbl_autor(id_autor)
);

CREATE TABLE tbl_exemplar(
    id_exemplar INTEGER PRIMARY KEY,
    status_exemplar VARCHAR(16) NOT NULL,
    isbn VARCHAR(30) NOT NULL,
   
    CONSTRAINT fk_isbn_tbl_exemplar FOREIGN KEY (isbn)
        REFERENCES tbl_livro(isbn)
   
);

CREATE TABLE tbl_membro(
    id_membro INTEGER PRIMARY KEY,
    nome_membro VARCHAR(200) NOT NULL,
    endereco VARCHAR(200) NOT NULL,
    telefone VARCHAR(16) NOT NULL
    
);
insert into tbl_membro (id_membro, nome_membro, endereco, telefone)
values ('101', 'Ana Silva', 'Rua A', '11-98765-4321');

insert into tbl_membro (id_membro, nome_membro, endereco, telefone)
values ('102', 'Bruno Costa', 'Av. B, 456', '11-91234-5678');

insert into tbl_membro (id_membro, nome_membro, endereco, telefone)
values ('103', 'Carla Dias', 'Praça C, 789', '11-95555-4444');

select * from tbl_membro;

CREATE TABLE tbl_emprestimo(
    id_emprestimo INTEGER PRIMARY KEY,
    data_emprestimo DATE NOT NULL,
    data_devolucao DATE NOT NULL,
    data_devolucao_efetiva DATE,
    id_exemplar INTEGER NOT NULL,
    id_membro INTEGER NOT NULL,
   
    CONSTRAINT fk_id_exemplar_tbl_emprestimo FOREIGN KEY (id_exemplar)
        REFERENCES tbl_exemplar(id_exemplar),
       
    CONSTRAINT fk_id_membro_tbl_emprestimo FOREIGN KEY (id_membro)
        REFERENCES tbl_membro(id_membro)
);

##################################################################################################################################################
update tbl_autor
set nacionalidade = 'Brasileiro'
where id_autor = 1;

##################################################################################################################################################
delete from tbl_livro
where isbn = '978-85-7126-061-0';

delete from tbl_livro
where isbn = '978-85-325-3078-3';

##################################################################################################################################################
CREATE USER 'estagiario'@'localhost' IDENTIFIED BY 'Mudar123';

GRANT ALTER ON db_saber_e_cia_b.tbl_livro TO 'estagiario'@'localhost';

ALTER TABLE tbl_livro ADD COLUMN genero VARCHAR(50);

drop table tbl_livro;

