const produtos = require("../data/produtos.json");
const fs = require("fs");
const path = require("path")


const pegarDados = (req, res) => {
    res.send(produtos);
}


const pegarDadosId = (req, res) => {
    const idProduto = req.params.id;

    const produtoById = produtos.find((item) => item.id == idProduto);

    if (produtoById) {
        res.send(produtoById)
    } else {
        res.status(404).send("Produto não encontrado");
    }
}

const createDados = (req, res) => {
    const novoDado = req.body;

    try {

        produtos.push(novoDado);
        escreverDados(produtos)
        res.send(novoDado);

    } catch (error) {
        console.log("Porque deu erro?", error)
    }


}


const atualizarDados = (req, res) =>{
    const idDado = req.params.id;
    const index = produtos.findIndex((item)=> item.id == idDado);

    if(index != -1){
        const produtoAtualizado = req.body;
        produtos[index] = produtoAtualizado;
        escreverDados(produtos);
        res.send(produtoAtualizado);
    } else {
        res.status(404).send("Produto não encontrado")
    }

}

const excluirDados = (req, res) =>{
    const idDado = req.params.id;
    const novoArray = produtos.filter((cada) => cada.id != idDado);
    escreverDados(novoArray);
    res.status(204).send("Produto excluido com sucesso")
}



const escreverDados = (produtos) => {
    fs.writeFileSync(path.join(__dirname,'../data/produtos.json'), JSON.stringify(produtos), 'utf-8');
}


module.exports = {
    pegarDados,
    pegarDadosId,
    createDados,
    atualizarDados,
    excluirDados
}
