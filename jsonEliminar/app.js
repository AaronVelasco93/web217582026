const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const DATE_FILE = path.join(__dirname, 'data.json');

app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));


//ruta _GET Leer usuario desde el JSON
app.get('/api/usuarios',(req,res)=>{
    const data = fs.readFileSync(DATE_FILE);
    res.json(JSON.parse(data));
});

// Ruta POST: Agregar nuevo usuario

app.post('/api/usuarios',(req,res)=>{
    const data = JSON.parse( fs.readFileSync(DATE_FILE));
    
    const nuevo = req.body;

    nuevo.id = data.length > 0 ? data[data.length -1].id +1 : 1;

    data.push(nuevo);

    fs.writeFileSync(DATE_FILE, JSON.stringify(data,null,2));
    res.json({mensaje: 'Usuario Agregador'});

});