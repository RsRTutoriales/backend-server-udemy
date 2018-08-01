// Requires

var express = require('express');
var mongoose = require('mongoose');
var colors = require('colors');


// Inicializar variables
var app = express();

// Conexion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos:', 'Online'.green); // outputs green text
});

// Rutas
app.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        mensaje: 'Peticion  realizada correctamente'
    });
});

// Escuchar peticiones
app.listen(3000, () => {
    // console.log('Express: \x1b[32m%s\x1b[0m', 'levantado');
    console.log('Express:', 'Online'.green); // outputs green text
});