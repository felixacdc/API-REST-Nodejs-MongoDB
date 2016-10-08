var express = require('express');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var bodyParser = require('body-parser');
var methodOverride = require("method-override");

var app = express();
var router = express.Router();

mongoose.connect('mongodb://localhost/seriestv', function(err, res) {
    if(err) console.log('ERROR: Conectando a la DB:' + err);
    else console.log('Conexión a la DB realizada');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

require('./routes')(app);

app.get('/', function(req, res) {
    res.send('Hola Mundo!');
});

app.listen(5000, function() {
    console.log('Servidor escuchando en puerto 5000');
});