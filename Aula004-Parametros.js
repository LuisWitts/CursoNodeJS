const express = require("express");
const app = express();

app.get ("/", function(req, res) {
    res.send("Seja bem vindo ao meu app !");     //app.get ("/rota"...  chama a rota)
});



app.get ("/ola/:nome", function(req, res) {
    res.send("Ola "+req.params.nome+" seu lindo"); 
});



app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
})  //Essa função (app.listen(porta)) inicia o servidor , ela fica sempre no final

