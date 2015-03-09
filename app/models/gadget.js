var mongoose = require('mongoose')

module.exports =  mongoose.model('Gadget',
  {
    'name' : {'type':'String','default':'default gadget'},
    'belongsToNerd': {'type':'String'}
  });
