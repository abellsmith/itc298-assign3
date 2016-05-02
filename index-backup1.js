var golf = require("./lib/courses.js");

var express = require('express');

var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);

//home
app.get('/', function(req, res){
    res.type('text/html');
    res.sendfile('./public/home.html');
}); 

//about
app.get('/about', function(req, res){
    res.type('text/plain');
    res.send('About');
});

app.post('/search', function(req, res) {
    res.type('text/html');
    var header = "Searching for Course: " + req.body.course;
    var found = golf.getCourse(req.body.course);
    console.log(req.body.course);
    
    if (found) {
        res.send(header + ", City: " + found);
    } else {
        res.send(header + ' Not Found');
    }
});

//custom 404 pg
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

//custom 500 pg
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port'));
});



