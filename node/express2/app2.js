//importacion de express
const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    //res.send("Hola mundo");

    res.sendFile("C:/Users/aaron/Escritorio/clases2026/web217582026/node/express2/index.html");
});

const port = 3009;

app.listen(port, ()=>{
    console.log(`Servidor desde: http:localhost:${port}`);
});