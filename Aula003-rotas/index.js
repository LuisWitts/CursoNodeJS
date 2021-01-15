const express = require("express");
const app = express();

app.get ("/", function(req, res) {
    res.send("Seja bem vindo ao meu app !");     //app.get ("/rota"...  chama a rota)
});

app.get ("/home", function(req, res) {
    res.send("seja bem vindo a home page do meu app !"); 
});

app.get ("/perguntas", function(req, res) {
    res.send("Faça sua pergunta"); 
});



app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
})  //Essa função (app.listen(porta)) inicia o servidor , ela fica sempre no final

