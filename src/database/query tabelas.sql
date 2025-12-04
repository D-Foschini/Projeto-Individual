CREATE DATABASE shakai;

USE shakai;

CREATE TABLE cadastro (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nick VARCHAR(45) UNIQUE,
    email VARCHAR(45) UNIQUE,
    passwrd VARCHAR(45)
);

CREATE TABLE veiculo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fkCadastro INT,
    CONSTRAINT fk_cadastro_veiculo FOREIGN KEY (fkCadastro) REFERENCES cadastro (id),
    modelo VARCHAR(45),
    descricao VARCHAR(420)
);

select * from veiculo;

CREATE TABLE informa (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fkVeiculo INT,
    CONSTRAINT fk_veiculo_informa FOREIGN KEY (fkVeiculo) REFERENCES veiculo (id),
    mass INT,
    bar INT,
    country VARCHAR(45),
    dtProd INT,
    tipo VARCHAR(45),
    trans VARCHAR(45),
    gear INT,
    drive VARCHAR(45),
    cylinder VARCHAR(45),
    motor VARCHAR(45),
    accelerate INT
);

CREATE TABLE grafico (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fkVeiculo INT,
    CONSTRAINT fk_veiculo_grafico FOREIGN KEY (fkVeiculo) REFERENCES veiculo (id),
    hp_A INT,
    hp_B INT,
    hp_C INT,
    hp_D INT,
    hp_E INT,
    hp_F INT,
    hp_G INT,
    hp_H INT,
    hp_I INT,
    hp_J INT,
    hp_K INT,
    hp_L INT,
    hp_M INT,
    hp_N INT,
    hp_O INT,
    trq_A INT,
    trq_B INT,
    trq_C INT,
    trq_D INT,
    trq_E INT,
    trq_F INT,
    trq_G INT,
    trq_H INT,
    trq_I INT,
    trq_J INT,
    trq_K INT,
    trq_L INT,
    trq_M INT,
    trq_N INT,
    trq_O INT
);