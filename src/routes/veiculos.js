var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/selectveiculo", function (req, res) {
    dashboardController.selectveiculo(req, res);
});

router.post("/cadastrarveiculo", function (req, res) {
    dashboardController.cadastrarveiculo(req, res);
})


module.exports = router;