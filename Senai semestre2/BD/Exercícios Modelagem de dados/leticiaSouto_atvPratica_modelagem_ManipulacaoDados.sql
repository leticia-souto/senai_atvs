create database db_papelaria;
use db_papelaria;

create table tbl_clientes(
	id_cliente varchar (40) primary key,
    nome_completo varchar (150) not null,
    telefone_contato varchar (15) not null,
    cidade varchar (200) not null    
);

create table tbl_produtos(
	id_produto varchar (40) primary key,
    nome_produto varchar (100) not null,
    preco_unitario decimal (10,2) not null,
    quantidade_estoque integer not null
);

create table tbl_pedidos(
	id_pedido varchar (40) primary key not null,
    id_cliente varchar (40) not null,
    id_produto varchar (40) not null,
    data_pedido date not null,
    quantidade_itens integer not null,
    dados_cancelamento varchar (150),
    
    constraint fk_id_cliente foreign key (id_cliente) references tbl_clientes(id_cliente),
	constraint fk_id_produto foreign key (id_produto) references tbl_produtos(id_produto)
);

####################################################################################################################

INSERT INTO tbl_clientes(id_cliente, nome_completo, telefone_contato, cidade)
    VALUES ('9904456778','Moniquinha Manfrinatinho', '11988346776', 'Osasco'),
           ('9876543215','Leticinha Soutinho', '11964769887', 'Santos'),
           ('1076343215','Heloisinha Paixãozinha', '11964768990', 'Votorantim'),
           ('5876544515','Paulinha Sbrissinha', '1164788866', 'Sorocaba'),
           ('7786543545','Giovanninha Fonsequinha', '11964768779', 'Campinas');

######################################################################################################################


INSERT INTO tbl_produtos(id_produto, nome_produto, preco_unitario, quantidade_estoque)
    VALUES ('2395775473','Grampeador de morango', '15.90', '70'),
           ('8482161637','Lapiseira Rosa Choque', '7.80', '30'),
           ('9383281626','Post-it multicolor', '10.50', '95'),
           ('2934757488','Fita de cetim azul metro', '5.00', '200'),
           ('0103847557', 'Planner 2026', '50.00', '20');



#########################################################################################################################

INSERT INTO tbl_pedidos(id_pedido, id_cliente, id_produto, data_pedido, quantidade_itens, dados_cancelamento)
    VALUES ('0292845829','9904456778', '2395775473','2025-10-20', 4, 'pedido errado.'),
           ('3029472829','9876543215', '8482161637','2025-09-05', 5, 'pedido com defeito'),
           ('0797555554','5876544515', '2934757488','2025-09-30', 8, 'pedido errado');
           

###########################################################################################################################

#comandos de execução
select * from tbl_clientes;
select * from tbl_produtos;
select * from tbl_pedidos;
drop table tbl_pedidos;

##########################################################################################################################

#comandos update
update tbl_produtos
set preco_unitario = 2.00 
where id_produto = '2934757488';

############################################################################################################################

delete from tbl_clientes
where id_cliente = '7786543545';

###########################################################################################################################


delete from tbl_clientes
where id_cliente = '9904456778';

#O erro SGBD que apareceu foi por que o cliente que tentei excluir está referenciado em outra tabela, impedindo que ele seja excluído.

###########################################################################################################################

select * from tbl_produtos where preco_unitario between 10.00 and 25.00;
select * from tbl_clientes where nome_completo like "A%" or "%Silva";
select * from tbl_produtos where quantidade_estoque < 10.00 and preco_unitario > 50.00;

############################################################################################################################

select * from tbl_clientes where cidade in ("São Paulo", "Rio de Janeiro");
select * from tbl_clientes where cidade not in ("São Paulo", "Rio de Janeiro");

#############################################################################################################################

select * from tbl_pedidos where dados_cancelamento is null;

#############################################################################################################################

select concat(upper(nome_completo), '(', telefone_contato, ')')
as informacoes_contato from tbl_clientes;

insert into tbl_pedidos(id_pedido, id_cliente, id_produto, data_pedido, quantidade_itens, dados_cancelamento)
values ('84938572204','9876543215', '8482161637',curdate(), 2, "produto danificado" );

################################################################################################################################

SELECT 
    id_pedido,
    data_pedido,
    DATEDIFF(CURDATE(), data_pedido) AS dias_desde_pedido
FROM 
    pedidos
WHERE 
    id_pedido = 84938572204; 