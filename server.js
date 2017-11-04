var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var path = require('path');
var app = express();



// static content is pulled from the public directory 
app.use(express.static(process.cwd() + '/public'));




// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


// setting up the Handlebars view-engine 
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'views' }));
app.set('view engine', 'handlebars');


var router = require('./controllers/burger_controllers.js');

app.use('/index', router);

var PORT = process.env.PORT || 6069;
app.listen(PORT);
console.log("App listening on PORT " + PORT);