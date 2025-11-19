var dashModel = require("../models/dashModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Your email is undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Your password is undefined!");
    } else {

        dashModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                                    res.json({
                                        id: resultadoAutenticar[0].id,
                                        email: resultadoAutenticar[0].email,
                                        id: resultadoAutenticar[0].id,
                                        senha: resultadoAutenticar[0].senha,
                                    });
                                
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nFailed to login! Error: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.idServer;
    var model = req.body.modelServer;
    var about = req.body.descrServer;

    // Faça as validações dos valores
    if (id == undefined) {
        res.status(400).send("Your id is undefined!");
    } else if (model == undefined) {
        res.status(400).send("Your model is undefined!");
    } else if (about == undefined) {
        res.status(400).send("Your about is undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        dashModel.cadastrar(id, model, about)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nFailed to Register! Error: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}