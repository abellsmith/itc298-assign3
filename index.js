var express = require('express');
var app = express();

//set express
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
var bodyParser = require("body-parser");
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies

//set handlebars
var viewsPath = __dirname + '/views'; 
var handlebars = require('express-handlebars').create({defaultLayout: 'main', extname:'.hbs', layoutsDir: viewsPath + '/layouts',  partialsDir: viewsPath + '/partials' });
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs' );




// CORS
app.use('/api', require('cors')());





//routes
var routes = require("./lib/routes.js")(app);



//custom 404 pg
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port'));
});