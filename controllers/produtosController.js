const produtos = require("../data/produtos.json");



const pegarDados = (req, res) =>{
    res.send(produtos);
}



module.exports = {
    pegarDados
}
