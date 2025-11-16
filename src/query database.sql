CREATE DATABASE shakai;
USE shakai;

CREATE TABLE cadastro(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nick VARCHAR(45),
    email VARCHAR(45) UNIQUE,
    passwrd VARCHAR(45)
);

CREATE TABLE veiculo(
	id INT PRIMARY KEY AUTO_INCREMENT,
    fkCadastro INT,
    CONSTRAINT fk_cadastro_veiculo FOREIGN KEY (fkCadastro) REFERENCES cadastro(id),
    modelo VARCHAR(45),
    descricao VARCHAR(420)
);

CREATE TABLE informa(
	id INT PRIMARY KEY AUTO_INCREMENT,
    fkVeiculo INT,
    CONSTRAINT fk_veiculo_informa FOREIGN KEY (fkVeiculo) REFERENCES veiculo(id),
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

CREATE TABLE grafico(
	id INT PRIMARY KEY AUTO_INCREMENT,
    fkVeiculo INT,
    CONSTRAINT fk_veiculo_grafico FOREIGN KEY (fkVeiculo) REFERENCES veiculo(id),
    rpmIndex INT,
	horsePower INT,
    torque INT
);

