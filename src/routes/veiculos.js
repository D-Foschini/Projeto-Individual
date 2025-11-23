var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/selectveiculo", function (req, res) {
    dashboardController.selectveiculo(req, res);
});

router.post("/cadastrarveiculo", function (req, res) {
    dashboardController.cadastrarveiculo(req, res);
})

router.post("/cadastrarinfo", function (req, res) {
    dashboardController.cadastrarinfo(req, res);
})

router.post("/selectinfo", function (req, res) {
    dashboardController.selectinfo(req, res);
})

module.exports = router;