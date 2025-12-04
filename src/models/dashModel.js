const { Types } = require("mysql2");
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

function selectinfo(idVeiculo) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectveiculo(): "
  );
  var instrucaoSql = `
    SELECT mass, bar, country, dtprod, tipo, trans, gear, drive, cylinder, motor, accelerate, hp_A, hp_B, hp_C, hp_D, hp_E, hp_F, hp_G, hp_H, hp_I, hp_J, hp_K, hp_L, hp_M, hp_N, hp_O,
    trq_A, trq_B, trq_C, trq_D, trq_E, trq_F, trq_G, trq_H, trq_I, trq_J, trq_K, trq_L, trq_M, trq_N, trq_O
     FROM informa i JOIN grafico g ON g.fkVeiculo = i.fkVeiculo
    WHERE i.fkVeiculo = ${idVeiculo};
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function deleteveiculo(idVeiculo) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectveiculo(): "
  );
  var instrucaoSql = `
    DELETE FROM grafico WHERE fkVeiculo = ${idVeiculo};
    DELETE FROM informa WHERE fkVeiculo = ${idVeiculo};
    DELETE FROM veiculo WHERE id = ${idVeiculo};
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

function cadastrarinfo(
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
) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarinfo():"
  );
  var instrucaoSql = `
        INSERT INTO informa (
            fkVeiculo, mass, bar, country, dtprod, tipo, trans, gear, drive, cylinder, motor, accelerate
        ) VALUES (
            ${fkServer}, ${massServer}, ${barServer}, '${countryServer}', ${yearServer}, '${typeServer}', '${transmissionServer}', ${gearServer}, '${driveServer}', '${cylinderServer}', '${engineServer}', ${accelerationServer}
        );

        INSERT INTO grafico (
            fkVeiculo,
            hp_A, hp_B, hp_C, hp_D, hp_E, hp_F, hp_G, hp_H, hp_I, hp_J, hp_K, hp_L, hp_M, hp_N, hp_O,
            trq_A, trq_B, trq_C, trq_D, trq_E, trq_F, trq_G, trq_H, trq_I, trq_J, trq_K, trq_L, trq_M, trq_N, trq_O
        ) VALUES (
            ${fkServer},
            ${hp_A_Server}, ${hp_B_Server}, ${hp_C_Server}, ${hp_D_Server}, ${hp_E_Server}, ${hp_F_Server}, ${hp_G_Server}, ${hp_H_Server}, ${hp_I_Server}, ${hp_J_Server}, ${hp_K_Server}, ${hp_L_Server}, ${hp_M_Server}, ${hp_N_Server}, ${hp_O_Server},
            ${trq_A_Server}, ${trq_B_Server}, ${trq_C_Server}, ${trq_D_Server}, ${trq_E_Server}, ${trq_F_Server}, ${trq_G_Server}, ${trq_H_Server}, ${trq_I_Server}, ${trq_J_Server}, ${trq_K_Server}, ${trq_L_Server}, ${trq_M_Server}, ${trq_N_Server}, ${trq_O_Server}
        );`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  selectveiculo,
  cadastrarveiculo,
  cadastrarinfo,
  selectinfo,
  deleteveiculo,
};
