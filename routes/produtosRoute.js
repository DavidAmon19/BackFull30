const express = require("express");
const route   = express.Router();
const produtosController = require("../controllers/produtosController");


route.get('/', produtosController.pegarDados);
route.get('/:id', produtosController.pegarDadosId);
route.post('/', produtosController.createDados);
route.put('/:id', produtosController.atualizarDados);
route.delete('/:id',produtosController.excluirDados);

module.exports = route;