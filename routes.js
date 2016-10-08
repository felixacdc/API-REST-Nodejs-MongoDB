module.exports = function(app) {
    var SerieTV = require('./serietv');
    
    // GET
    findAllSeriesTv = function(req, res) {
        SerieTV.find()
                .then(function(serietv) {
                    res.send(serietv);
                })
                .catch(function(err) {
                    console.log("ERROR: " + err);
                });
    };
    
    // GET
    findByID = function(req, res) {
        SerieTV.findById(req.params.id)
                .then(function(serietv) {
                    res.send(serietv);
                })
                .catch(function(err){
                    console.log("ERROR: " + err);
                });
    };
    
    // POST
    addSerieTV = function(req, res) {
        console.log('POST');
        console.log(req.body);
        
        var serietv = new SerieTV({
            titulo: req.body.titulo,
            temporada: req.body.temporada,
            pais: req.body.pais,
            genero: req.body.genero
        });
        
        serietv.save()
                .then(function(doc) {
                    console.log('SerieTV Guardada!');
                    res.send(doc);
                })
                .catch(function(err) {
                    console.log("ERROR: " + err);
                });
    };
    
    // PUT
    updateSerieTV = function(req, res) {
        SerieTV.findById(req.params.id)
                .then(function(serietv) {
                    serietv.titulo = req.body.titulo;
                    serietv.temporada = req.body.temporada;
                    serietv.pais = req.body.pais;
                    serietv.genero = req.body.genero;

                    serietv.save()
                            .then(function(doc) {
                                console.log('SerieTV Actualizada!');
                                res.send(doc);
                            })
                            .catch(function(err) {
                                console.log("ERROR: " + err);
                            });
                
                })
                .catch(function(err){
                    console.log("ERROR: " + err);
                });
    };
    
    // DELETE
    deleteSerieTV = function(req, res) {
        SerieTV.findById(req.params.id)
                .then(function(serietv) {
                    serietv.remove(function(err) {
                        console.log('SerieTV Borrada!');
                        res.send('Registro eliminado');
                    });
                })
                .catch(function(err) {
                    console.log("ERROR: " + err);
                });
    }
    
    // API Routes
    app.get('/seriestv', findAllSeriesTv);
    app.get('/seriestv/:id', findByID);
    app.post('/seriestv', addSerieTV);
    app.put('/seriestv/:id', updateSerieTV);
    app.delete('/seriestv/:id', deleteSerieTV);
}