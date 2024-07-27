const express = require("express");
const route   = express.Router();
const produtosController = require("../controllers/produtosController");


route.get('/', produtosController.pegarDados);


module.exports = route;