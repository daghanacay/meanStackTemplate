// app/routes.js
// combines all the routes under one resource definition

module.exports = function(app) {
			require('./nerdRoutes')(app);
			require('./gadgetRoutes')(app);
  			 // frontend routes =========================================================
        		// route to handle all angular requests
			app.get('*', function(req, res) {
			    res.sendfile('./public/index.html'); // load our public/index.html file
			});
		};


