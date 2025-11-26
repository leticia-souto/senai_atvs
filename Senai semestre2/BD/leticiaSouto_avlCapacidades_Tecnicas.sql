-- Estrutura DDL (Data Definition Language)
CREATE DATABASE db_eletronicos_b;
USE db_eletronicos_b;

drop database db_eletronicos_b;

-- Tabela 1: Clientes
CREATE TABLE Clientes ( 
	id_cliente INT PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	cidade VARCHAR(50),
	data_cadastro DATE
);
-- Tabela 2: Produtos
CREATE TABLE Produtos (
	id_produto INT PRIMARY KEY,
	nome_produto VARCHAR(100) NOT NULL,
	categoria VARCHAR(50),
	preco_unitario DECIMAL(10, 2),
	estoque INT
);
-- Tabela 3: Vendas (Transações)
CREATE TABLE Vendas (
	id_venda INT PRIMARY KEY,
	id_cliente INT,
	data_venda DATE,
	valor_total DECIMAL(10, 2),
	FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente)
);
-- Tabela 4: ItensVenda (Detalhes dos Produtos em cada Venda)
CREATE TABLE ItensVenda (
	id_item INT PRIMARY KEY,
	id_venda INT,
	id_produto INT,
	quantidade INT,
	preco_item DECIMAL(10, 2),
	FOREIGN KEY (id_venda) REFERENCES Vendas(id_venda), FOREIGN KEY (id_produto) REFERENCES Produtos(id_produto)
);
-- Tabela de Auditoria (Para uso posterior na Capacidade 12)
CREATE TABLE Log_Estoque (
	id_log INT PRIMARY KEY AUTO_INCREMENT,
	id_produto_afetado INT,
	acao VARCHAR(50) -- Por exemplo: 'Estoque Atualizado' data_hora DATETIME
);

-- DML (Data Manipulation Language) - Dados Iniciais (INSERT)
INSERT INTO Clientes (id_cliente, nome, cidade, data_cadastro) VALUES
(1, 'Alice Pereira', 'Sao Paulo', '2023-01-10'),
(2, 'Bruno Mendes', 'Rio de Janeiro', '2023-03-15'),
(3, 'Carla Souza', 'Sao Paulo', '2023-05-20'),
(4, 'Daniel Lima', 'Belo Horizonte', '2023-11-01');

INSERT INTO Produtos (id_produto, nome_produto, categoria, preco_unitario, estoque) VALUES
(101, 'Smartphone X', 'Telefonia', 1500.00, 50),
(102, 'Notebook Gamer', 'Computadores', 5500.00, 15),
(103, 'Fone Bluetooth Z', 'Acessórios', 250.00, 120),
(104, 'Smartwatch W', 'Vestíveis', 900.00, 30),
(105, 'Mouse Gamer', 'Acessórios', 150.00, 0),
(106, 'Tablet Pro', 'Computadores', 3200.00, 45);

INSERT INTO Vendas (id_venda, id_cliente, data_venda, valor_total) VALUES
(1001, 1, '2024-06-01', 1750.00),
(1002, 3, '2024-06-05', 5500.00),
(1003, 1, '2024-06-10', 900.00),
(1004, 2, '2024-06-12', 3000.00), -- Valor incorreto (deve ser 4200.00)
(1005, 4, '2024-06-15', 0.00);
INSERT INTO ItensVenda (id_item, id_venda, id_produto, quantidade, preco_item) VALUES
(5001, 1001, 101, 1, 1500.00),
(5002, 1001, 103, 1, 250.00),
(5003, 1002, 102, 1, 5500.00),
(5004, 1003, 104, 1, 900.00),
(5005, 1004, 106, 1, 3200.00),
(5006, 1004, 103, 4, 1000.00); -- Preço total correto da venda 1004 = 3200 + 1000 = 4200

################################################################################################################
-- 1A.1
update Vendas
set valor_total = 4000.00
where id_venda = 1004;

select * from vendas;

#################################################################################################################

-- 1A.2 E 1A.3

delete from Produtos
where id_produto = 105;

select * from Produtos;

#################################################################################################################

-- 1B

select P.nome_produto, C.nome
from Clientes C

inner join Vendas V
	on C.id_cliente = V.id_cliente
    
inner join itensvenda IV
	on V.id_venda = IV.id_venda
    
inner join produtos P
	on IV.id_produto = P.id_produto;
    
################################################################################################################

-- 1C

select nome, cidade from clientes
where id_cliente in (
    select id_cliente from vendas where id_venda in(
    select id_venda from itensvenda where id_produto in(
    select id_produto from produtos
    where categoria = "Computadores")));
    
##################################################################################################################

-- 1D

select C.nome, V.id_venda
from clientes C
left join vendas V on
	C.id_cliente = V.id_cliente;

####################################################################################################################

-- 2A

select avg(preco_unitario) as preco_medio_unitario from produtos;

select sum(quantidade) as quantidade_itens_vendidos from itensvenda;

###################################################################################################################
-- 2B

select concat(upper (nome),' - ', year (data_cadastro)) as perfil_registro from clientes;


####################################################################################################################
-- 2C

select categoria, count(estoque) as quantidade_produtos 
from produtos
group by categoria;

######################################################################################################################

-- 2D
select categoria, count(estoque) as quantidade_produtos 
from produtos
group by categoria
having count(estoque) >= 2;

######################################################################################################################

-- 3A
start transaction;

INSERT INTO Produtos (id_produto, nome_produto, categoria, preco_unitario, estoque) VALUES
(115, 'Iphone pro max', 'Telefonia', 15500.00, 20);


rollback;

##########################################################################################################################

-- 3B

delimiter $$
create procedure sp_buscar_cliente_por_cidade (
	in p_cidade varchar (50)
)

begin
	select nome from clientes where cidade = p_cidade;
end$$
delimiter ;

call sp_buscar_cliente_por_cidade("São Paulo");

#drop procedure sp_buscar_cliente_por_cidade;

##################################################################################################################################

-- 3C

delimiter $$
create trigger trg_log_estoque
after update on produtos
for each row

begin
	if old.estoque!= new.estoque then
    insert into log_estoque (id_produto_afetado, acao, data_hora)
    values (old.id_produto, 'Estoque Atualizado', now());
    end if;
end$$
delimiter ;

alter table log_estoque add column data_hora datetime;

update produtos
set estoque = 30 
where id_produto = 102;
select * from produtos;

#drop trigger trg_log_estoque;

##################################################################################################################################
-- 3D

create view V_Produtos_Sem_Estoque as select 
	P.id_produto,
    P.nome_produto, 
    P.categoria, 
    P.preco_unitario, 
    P.estoque
from produtos P;
select * from V_Produtos_Sem_Estoque
where estoque = 0;

