var mongoose = require('mongoose');
var path = require('path');

var fs = require('fs');

mongoose.connect('mongodb://localhost/book-event');

var models_path = path.join(__dirname, './../models');

// var uristring =
// process.env.MONGOLAB_URI ||
// process.env.MONGOHQ_URL ||
// 'mongodb://kevin:123456@ds261917.mlab.com:61917/eventbooking'
// mongoose.connect(uristring);


fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
	    require(models_path + '/' + file);
	}
})
