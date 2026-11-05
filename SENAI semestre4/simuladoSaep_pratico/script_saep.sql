CREATE DATABASE IF NOT EXISTS saep_db;
USE saep_db;

-- ---------------------------------------------------------------------
-- USUARIOS (login no sistema)
-- Só a estrutura por enquanto: os registros entram via código (Parte 4),
-- pois a senha precisa ser salva com hash bcrypt.
-- bcrypt gera hash de 60 caracteres; VARCHAR(255) deixa folga.
-- ---------------------------------------------------------------------
CREATE TABLE usuarios (
  id_usuario  INT          NOT NULL AUTO_INCREMENT,
  nome        VARCHAR(100) NOT NULL,
  email       VARCHAR(150) NOT NULL,
  senha_hash  VARCHAR(255) NOT NULL,
  criado_em   DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT pk_usuarios PRIMARY KEY (id_usuario),
  CONSTRAINT uq_usuarios_email UNIQUE (email)
);

-- ---------------------------------------------------------------------
-- CLIENTES
-- cpf é VARCHAR(255) porque na versão final (Parte 4) ele será salvo
-- criptografado, e o texto cifrado é bem maior que os 14 caracteres
-- de um CPF formatado.
-- ---------------------------------------------------------------------
CREATE TABLE clientes (
  id_cliente  INT          NOT NULL AUTO_INCREMENT,
  nome        VARCHAR(100) NOT NULL,
  cpf         VARCHAR(255) NOT NULL,
  telefone    VARCHAR(20)  NOT NULL,
  email       VARCHAR(150) NOT NULL,
  CONSTRAINT pk_clientes PRIMARY KEY (id_cliente)
);

-- ---------------------------------------------------------------------
-- VEICULOS (N veículos : 1 cliente)
-- ---------------------------------------------------------------------
CREATE TABLE veiculos (
  id_veiculo  INT         NOT NULL AUTO_INCREMENT,
  modelo      VARCHAR(60) NOT NULL,
  marca       VARCHAR(60) NOT NULL,
  placa       VARCHAR(8)  NOT NULL,
  id_cliente  INT         NOT NULL,
  CONSTRAINT pk_veiculos PRIMARY KEY (id_veiculo),
  CONSTRAINT uq_veiculos_placa UNIQUE (placa),
  CONSTRAINT fk_veiculos_clientes
    FOREIGN KEY (id_cliente) REFERENCES clientes (id_cliente)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
);

-- ---------------------------------------------------------------------
-- AGENDAMENTOS (N agendamentos : 1 veículo)
-- A UNIQUE (data_agendamento, horario, vaga) impede dois agendamentos no mesmo
-- horário para a mesma vaga/profissional (RF-003).
-- ---------------------------------------------------------------------
CREATE TABLE agendamentos (
  id_agendamento  INT          NOT NULL AUTO_INCREMENT,
  data_agendamento DATE         NOT NULL,
  horario         TIME         NOT NULL,
  vaga            TINYINT      NOT NULL,
  motivo_servico  VARCHAR(255) NOT NULL,
  id_veiculo      INT          NOT NULL,
  CONSTRAINT pk_agendamentos PRIMARY KEY (id_agendamento),
  CONSTRAINT uq_agendamentos_horario_vaga UNIQUE (data_agendamento, horario, vaga),
  CONSTRAINT fk_agendamentos_veiculos
    FOREIGN KEY (id_veiculo) REFERENCES veiculos (id_veiculo)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
);

-- =====================================================================
-- DADOS DE EXEMPLO (fictícios)
-- Ordem: clientes -> veículos -> agendamentos, respeitando as FKs.
-- =====================================================================

INSERT INTO clientes (nome, cpf, telefone, email) VALUES
  ('Ana Souza',      '111.111.111-11', '(11) 98888-1111', 'ana.souza@email.com'),
  ('Bruno Lima',     '222.222.222-22', '(11) 97777-2222', 'bruno.lima@email.com'),
  ('Carla Mendes',   '333.333.333-33', '(11) 96666-3333', 'carla.mendes@email.com');

-- Ana (id 1) tem 2 veículos, Bruno (id 2) tem 1 e Carla (id 3) tem 1.
INSERT INTO veiculos (modelo, marca, placa, id_cliente) VALUES
  ('Onix',   'Chevrolet',  'ABC1D23', 1),
  ('Gol',    'Volkswagen', 'DEF4G56', 1),
  ('Corolla','Toyota',     'HIJ7K89', 2),
  ('HB20',   'Hyundai',    'LMN0P12', 3);

-- Veículo 1 (Onix) tem 2 agendamentos.
INSERT INTO agendamentos (data_agendamento, horario, vaga, motivo_servico, id_veiculo) VALUES
  ('2026-11-10', '08:00:00', 1, 'Troca de óleo',          1),
  ('2026-11-17', '09:00:00', 1, 'Revisão dos freios',     1),
  ('2026-11-10', '08:00:00', 2, 'Alinhamento e balanceamento', 3),
  ('2026-11-12', '14:30:00', 1, 'Troca de pneus',         4);

-- Inserir usuarios 
INSERT INTO usuarios (nome, email, senha_hash, criado_em) VALUES
	('Moniquinha', 'moniquinha@gmail.com', '$2b$10$HrBCNVPMIhKM3qlGThozt.lnROaU1Uk/Hsl4I4gHAaVhYGUiac8H.', '2026-11-05');
  