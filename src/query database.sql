CREATE DATABASE shakai;
USE shakai;

CREATE TABLE cadastro(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nick VARCHAR(45) UNIQUE,
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


select * from cadastro;
DESC informa;
DESC veiculo;
delete from cadastro where id=1;
delete from cadastro where id=7;
alter table cadastro auto_increment = 0;

-- primeiro cadastrar veiculo,
-- depois cadastrar informações

USE shakai;

desc informa;

INSERT INTO veiculo (fkCadastro, modelo, descricao ) VALUES ('${id}', '${model}', '${about}');
select * from veiculo;

delete from veiculo where id >=1;
alter table veiculo auto_increment = 0;
select * from veiculo;

INSERT INTO informa (fkVeiculo, mass, bar, country, dtprod, tipo, trans, gear, drive, cylinder, motor, accelerate) VALUES
(9,1,1,'',2000,'','',6,'','','',1);

SELECT id, fkCadastro FROM veiculo WHERE fkCadastro = 0;

select * from informa;
delete from informa where id >=1;
alter table informa auto_increment = 0;

SELECT descricao FROM veiculo;