const express = require('express');
const app = express();

app.get("/", function (req, res) { //rotas
    //res.send('helo word11222');
    res.sendFile(__dirname + "/src/index.html");// _dirname para carregar neste caminho 
})
app.get("/sobre-nid", function (req, res) {
    //res.send('helo word1');
    res.sendFile(__dirname + "/src/sobre-nid.html");// _dirname para carregar neste caminho 
})
app.get("/contato", function (req, res) {
    res.send('helo word8');
})

app.listen(8080, () =>{
    console.log("servidor iniciando na porta 8080");
});

