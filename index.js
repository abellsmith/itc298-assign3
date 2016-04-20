var express = require('express');

var app = express();

/**/ var bodyParser = require("body-parser");
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies


app.set('port', process.env.PORT || 3000);

//home
app.get('/', function(req, res){
    res.type('text/plain');
    res.send('Home');
}); 

//about
app.get('/about', function(req, res){
    res.type('text/plain');
    res.send('About');
});

var courses = [
    { id: 0, name: 'Chambers Bay', city: 'University Place' },
    { id: 1, name: 'The Home Course', city: 'DuPont' },
    { id: 2, name: 'Gold Mountain', city: 'Bremerton' },
    { id: 3, name: 'Tacoma CGC', city: 'Lakewood' },
];



app.post('/api/users', function(req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;
    
    res.send(user_id + ' ' + token + ' ' + geo);
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



