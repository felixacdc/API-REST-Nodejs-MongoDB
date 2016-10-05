var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var serietv = new Schema({
    titulo: String,
    temporada: Number,
    pais: String,
    genero: {
        type: String,
        enum: ['Comedia', 'Fantasia', 'Drama', 'Terror', 'Sci-fi']
    }
});

module.exports = mongoose.model('SerieTV', serietv);