const express = require('express')
const app = express()
app.get('/', function(req,res){
    res.send("Ola mari!")
})

app.listen(3000,function(){
    console.log("Conexão inicializada na porta 3000")
})