const express = require('express');

const app = express();


app.get("/",(req,res)=>{
   res.sendFile("C:/Users/aaron/Escritorio/clases2026/web217582026/node29102025/v1/index.html");

});

const port = 3005;

app.listen(port,()=>{

    console.log(`Server desde: http://localhost:${port}`);
});
