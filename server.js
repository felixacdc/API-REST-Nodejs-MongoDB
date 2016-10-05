var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require("method-override");

var app = express();
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.get('/', function(req, res) {
    res.send('Hola Mundo!');
});

app.listen(5000, function() {
    console.log('Servidor escuchando en puerto 5000');
});