const express   = require("express");
const app       = express();
const port      = 9090;




app.use(express.json());


app.get('/',(req, res)=>{
    res.send(`Uma API SIMPLES`);
})

// app.get('/produtos', (req, res)=>{
//     res.send(produtos)
// })



// API REST 
// HTTP GET, POST, PUT, PATCH DELETE

app.listen(port, ()=>{
    console.log(`Servidor rodando no link http://localhost:${port}`)
});


// const listagem = [
//     {

//     }
// ];


// map, foreach, filter, find