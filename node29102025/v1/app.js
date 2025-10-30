const express = require('express');

const app = express();


app.get("/",(req,res)=>{
    res.send("Hola mundo");

});

const port = 3089;

app.listen(port,()=>{

    console.log(`Server desde: http://localhost:${port}`);
});
