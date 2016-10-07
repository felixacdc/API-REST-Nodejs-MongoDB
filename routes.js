module.exports = function(app) {
    var SerieTV = require('./serietv');
    
    // GET
    findAllSeriesTv = function(req, res) {
        SerieTV.find(function(err, serietv) {
            if(!err) 
                res.send(serietv);
            else 
                console.log("ERROR: " + err);
        });
    };
    
    // GET
    findByID = function(req, res) {
        SerieTV.findById(req.params.id, function(err, serietv) {
            if(!err) 
                res.send(serietv);
            else 
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
        
        serietv.save(function(err) {
            if(!err) {
                console.log('SerieTV Guardada!');
                res.send(SerieTV);
            } else 
                console.log("ERROR: " + err);
        });
    };
    
    // PUT
    updateSerieTV = function(req, res) {
        SerieTV.findById(req.params.id, function(err, serietv) {
            if(!err) {
                serietv.titulo = req.body.titulo;
                serietv.temporada = req.body.temporada;
                serietv.pais = req.body.pais;
                serietv.genero = req.body.genero;
                
                serietv.save(function(err) {
                    if(!err) {
                        console.log('SerieTV Actualizada!');
                    } else 
                        console.log("ERROR: " + err);
                });
            } else 
                console.log("ERROR: " + err);
        });
        
        
    };
    
    // DELETE
    deleteSerieTV = function(req, res) {
        SerieTV.findById(req.params.id, function(err, serietv) {
            serietv.remove(function(err) {
                if(!err) {
                    console.log('SerieTV Borrada!');
                } else 
                    console.log("ERROR: " + err); 
            });
        });
    }
    
    // API Routes
    app.get('/seriestv', findAllSeriesTv);
    app.get('/seriestv/:id', findByID);
    app.post('/seriestv', addSerieTV);
    app.put('/seriestv/:id', updateSerieTV);
    app.delete('/seriestv/:id', deleteSerieTV);
}