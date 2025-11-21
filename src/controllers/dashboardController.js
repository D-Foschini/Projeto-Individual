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
          res.json(resultadoVeiculo);//select inteiro
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
};
