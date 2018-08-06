// Requires

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var colors = require('colors');


// Inicializar variables
var app = express();

// Cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Importar rutas
var imagenesRoutes = require('./routes/imagenes');
var appRoutes = require('./routes/app');
var uploadRoutes = require('./routes/upload');
var usuarioRoutes = require('./routes/usuario');
var hospitalRoutes = require('./routes/hospital');
var medicoRoutes = require('./routes/medico');
var loginRoutes = require('./routes/login');
var busquedaRoutes = require('./routes/busqueda');

// Conexion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos:', 'Online'.green); // outputs green text
});

// server index config
// var serveIndex = require('serve-index');
// app.use(express.static(__dirname + '/'))
// app.use('/uploads', serveIndex(__dirname + '/uploads'));

// Rutas
app.use('/img', imagenesRoutes);
app.use('/upload', uploadRoutes);
app.use('/medico', medicoRoutes);
app.use('/hospital', hospitalRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/busqueda', busquedaRoutes);

app.use('/', appRoutes);

// Escuchar peticiones
app.listen(3000, () => {
    // console.log('Express: \x1b[32m%s\x1b[0m', 'levantado');
    console.log('Express:', 'Online'.green); // outputs green text
});