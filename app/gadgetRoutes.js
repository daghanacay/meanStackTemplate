var Gadget = require('./models/gadget');
 module.exports = function(app) {
// Routes for Gadget
     	//=================
        app.get('/api/gadgets', function(req, res) {
            // use mongoose to get all nerds in the database
            Gadget.find(function(err, gadgets) {
                // if there is an error retrieving, send the error. 
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(gadgets); // return all nerds in JSON format
            });
        });

        
        // route to handle creating goes here (app.post)
        app.post('/api/gadgets', function(req, res) {
            Gadget.create({
                   name : req.body.name,
  		   belongsToNerd : req.body.belongsToNerd
                 },
                 function(err, gadgets) {
                   if (err)
                     res.send(err);
	           Gadget.find(function(err, gadgets) {
                     if (err)
                        res.send(err);
                     res.json(gadgets); // return all nerds in JSON format
                   });
            });        
        });
        
   	// route to handle delete goes here (app.delete)
        app.delete('/api/gadgets/:id', function(req, res) {
                Gadget.remove({
                  _id : req.params.id
                },
                function(err, gadgets) {
                  if (err)
                    res.send(err);
		  Gadget.find(function(err, gadgets) {
                   if (err)
                    res.send(err);
                   res.json(gadgets); // return all nerds in JSON format
                  });
            });
        });

    };
