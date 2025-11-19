var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/carros", function (req, res) {
    dashboardController.cadastrar(req, res);
})

module.exports = router;