const express   = require("express");
const app       = express();
const port      = 9090;
const produtosRoute = require("./routes/produtosRoute")



app.use(express.json());


app.get('/',(req, res)=>{
    res.send(`Uma API SIMPLES`);
});

app.use('/produtos', produtosRoute);



app.listen(port, ()=>{
    console.log(`Servidor rodando no link http://localhost:${port}`)
});

