var database = require("../database/config");

function selectveiculo(fk_cadastro) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectveiculo(): "
  );
  var instrucaoSql = `
        SELECT id, fkCadastro, modelo, descricao FROM veiculo WHERE fkCadastro = ${fk_cadastro};
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrarveiculo(fk_cadastro, model, about) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarveiculo():",
    fk_cadastro,
    model,
    about
  );
  var instrucaoSql = `
        INSERT INTO veiculo (fkCadastro, modelo, descricao ) VALUES ('${fk_cadastro}', '${model}', '${about}');
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  selectveiculo,
  cadastrarveiculo,
};
