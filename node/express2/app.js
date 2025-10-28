//importacion de express
const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("Hola mundo")
});

const port = 3009;

app.listen(port, ()=>{
    console.log(`Servidor desde: http:localhost:${port}`);
});