var dashModel = require("../models/dashModel");

function selectveiculo(req, res) {
  var fk_cadastro = req.body.fk_cadastro;

  if (fk_cadastro == undefined) {
    res.status(400).send("Your fk_cadastro is undefined!");
  } else {
    dashModel
      .selectveiculo(fk_cadastro)
      .then(function (resultadoVeiculo) {
        console.log(`\nResultados encontrados: ${resultadoVeiculo.length}`);
        console.log(`Resultados: ${JSON.stringify(resultadoVeiculo)}`); // transforma JSON em String

        if (resultadoVeiculo.length >= 1) {
          console.log(resultadoVeiculo);
          res.json(resultadoVeiculo); //select inteiro
        } else if (resultadoVeiculo.length == 0) {
          res.status(403).send("Usuario inválido(s)");
        } else {
          res.status(403).send("Mais de um usuário com o mesmo login e senha!");
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log("\nFailed to login! Error: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function selectinfo(req, res) {
  var idVeiculo = req.body.idVeiculo;

  if (idVeiculo == undefined) {
    res.status(400).send("Your idVeiculo is undefined!");
  } else {
    dashModel
      .selectinfo(idVeiculo)
      .then(function (resultadoVeiculo) {
        console.log(`\nResultados encontrados: ${resultadoVeiculo.length}`);
        console.log(`Resultados: ${JSON.stringify(resultadoVeiculo)}`); // transforma JSON em String

        if (resultadoVeiculo.length >= 1) {
          console.log(resultadoVeiculo);
          res.json(resultadoVeiculo); //select inteiro
        } else if (resultadoVeiculo.length == 0) {
          res.status(403).send("Usuario inválido(s)");
        } else {  
          res.status(403).send("Mais de um usuário com o mesmo login e senha!");
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log("\nFailed to login! Error: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrarveiculo(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var fk_cadastro = req.body.idServer;
  var model = req.body.modelServer;
  var about = req.body.descrServer;

  // Faça as validações dos valores
  if (fk_cadastro == undefined) {
    res.status(400).send("Your fk_cadastro is undefined!");
  } else if (model == undefined) {
    res.status(400).send("Your model is undefined!");
  } else if (about == undefined) {
    res.status(400).send("Your about is undefined!");
  } else {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    dashModel
      .cadastrarveiculo(fk_cadastro, model, about)
      .then(function (resultado) {
    res.json({ id: resultado.insertId });
      })
      .catch(function (erro) {
        console.log(erro);
        console.log("\nFailed to create vehicle! Error: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrarinfo(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var fkServer = req.body.fkServer;
  var barServer = req.body.barServer;
  var massServer = req.body.massServer;

  var countryServer = req.body.countryServer;
  var yearServer = req.body.yearServer;
  var typeServer = req.body.typeServer;
  var transmissionServer = req.body.transmissionServer;
  var gearServer = req.body.gearServer;
  var driveServer = req.body.driveServer;
  var cylinderServer = req.body.cylinderServer;
  var engineServer = req.body.engineServer;
  var accelerationServer = req.body.accelerationServer;

  var hp_A_Server = req.body.hp_A_Server;
  var hp_B_Server = req.body.hp_B_Server;
  var hp_C_Server = req.body.hp_C_Server;
  var hp_D_Server = req.body.hp_D_Server;
  var hp_E_Server = req.body.hp_E_Server;
  var hp_F_Server = req.body.hp_F_Server;
  var hp_G_Server = req.body.hp_G_Server;
  var hp_H_Server = req.body.hp_H_Server;
  var hp_I_Server = req.body.hp_I_Server;
  var hp_J_Server = req.body.hp_J_Server;
  var hp_K_Server = req.body.hp_K_Server;
  var hp_L_Server = req.body.hp_L_Server;
  var hp_M_Server = req.body.hp_M_Server;
  var hp_N_Server = req.body.hp_N_Server;
  var hp_O_Server = req.body.hp_O_Server;

  var trq_A_Server = req.body.trq_A_Server;
  var trq_B_Server = req.body.trq_B_Server;
  var trq_C_Server = req.body.trq_C_Server;
  var trq_D_Server = req.body.trq_D_Server;
  var trq_E_Server = req.body.trq_E_Server;
  var trq_F_Server = req.body.trq_F_Server;
  var trq_G_Server = req.body.trq_G_Server;
  var trq_H_Server = req.body.trq_H_Server;
  var trq_I_Server = req.body.trq_I_Server;
  var trq_J_Server = req.body.trq_J_Server;
  var trq_K_Server = req.body.trq_K_Server;
  var trq_L_Server = req.body.trq_L_Server;
  var trq_M_Server = req.body.trq_M_Server;
  var trq_N_Server = req.body.trq_N_Server;
  var trq_O_Server = req.body.trq_O_Server;

  // Faça as validações dos valores
  if (fkServer == undefined) {
    res.status(400).send("Your fkServer is undefined!");
  } else {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    dashModel
      .cadastrarinfo(
        fkServer,
        massServer,
        barServer,
        countryServer,
        yearServer,
        typeServer,
        transmissionServer,
        gearServer,
        driveServer,
        cylinderServer,
        engineServer,
        accelerationServer,
        hp_A_Server,
        hp_B_Server,
        hp_C_Server,
        hp_D_Server,
        hp_E_Server,
        hp_F_Server,
        hp_G_Server,
        hp_H_Server,
        hp_I_Server,
        hp_J_Server,
        hp_K_Server,
        hp_L_Server,
        hp_M_Server,
        hp_N_Server,
        hp_O_Server,
        trq_A_Server,
        trq_B_Server,
        trq_C_Server,
        trq_D_Server,
        trq_E_Server,
        trq_F_Server,
        trq_G_Server,
        trq_H_Server,
        trq_I_Server,
        trq_J_Server,
        trq_K_Server,
        trq_L_Server,
        trq_M_Server,
        trq_N_Server,
        trq_O_Server
      )
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log("\nFailed to create vehicle! Error: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  selectveiculo,
  cadastrarveiculo,
  cadastrarinfo,
  selectinfo,
};
