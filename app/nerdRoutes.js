// app/routes.js

// grab the nerd model we just created
var Nerd = require('./models/nerd');
var Gadget = require('./models/gadget');


    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // Routes for Nerd
        app.get('/api/nerds', function(req, res) {
            // use mongoose to get all nerds in the database
            Nerd.find(function(err, nerds) {
                // if there is an error retrieving, send the error. 
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(nerds); // return all nerds in JSON format
            });
        });

        
        // route to handle creating goes here (app.post)
        app.post('/api/nerds', function(req, res) {
            Nerd.create({
                   name:req.body.name,
		   // Adds everything under the address hash
                   address:req.body.address
                 },
                 function(err, nerds) {
                   if (err)
                     res.send(err);
	           Nerd.find(function(err, nerds) {
                     if (err)
                        res.send(err);
                     res.json(nerds); // return all nerds in JSON format
                   });
            });        
        });
        
   	// route to handle delete goes here (app.delete)
        app.delete('/api/nerd/:id', function(req, res) {
                Nerd.remove({
                  _id : req.params.id
                },
                function(err, nerds) {
                  if (err)
                    res.send(err);
		  Nerd.find(function(err, nerds) {
                   if (err)
                    res.send(err);
                   res.json(nerds); // return all nerds in JSON format
                  });
            });
        });

        // route to get all gadgets for a nerd
        app.get('/api/nerd/:id/gadgets', function(req, res) {
          Gadget.find({belongsToNerd:req.params.id}).exec(function(err, gadgets) {
                  if (err)
                    res.send(err);
		  res.json(gadgets); // return all nerds in JSON format
           });      
        });

    };
