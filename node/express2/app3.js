//importacion de express
const express = require("express");
const path = require("path");

const app = express();

app.get("/",(req,res)=>{
    //res.send("Hola mundo");
    //res.sendFile("C:/Users/aaron/Escritorio/clases2026/web217582026/node/express2/index.html");
    
    res.sendFile(path.join(__dirname + "/index.html"));

});

const port = 3009;

app.listen(port, ()=>{
    console.log(`Servidor desde: http:localhost:${port}`);
});