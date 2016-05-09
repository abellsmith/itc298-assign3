var golf = require("./lib/courses.js");

var express = require('express');

var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);

//home page
app.get('/', function(req, res){
    res.type('text/html');
    res.sendfile('./public/home.html');
}); 

//about page
app.get('/about', function(req, res){
    res.type('text/plain');
    res.send('About');
});

//Search function
app.post('/search', function(req, res) {
    res.type('text/html');
    var headerCourse = req.body.course;
    console.log(req.body.course);
    var result = golf.getCourse(req.body.course);
    var headerArray = golf.getArray();
    // you can use headerArray.length for # of items
    var count = golf.getCount();
    console.log(headerArray);
    
    if (result) {
        res.send(headerCourse + " found.  Total number of golf courses is: " + count);
    } 
    else {
        res.send(headerCourse + ' not found');
    }
});

//Add function
app.post('/add', function(req, res) {
    res.type('text/html');
    // you are adding a city param, but your form doesn't have this field
    var newCourse = {"course":req.body.course, "city":req.body.city};

    // you are passing a string to golf.addCourse instead of the 'newCourse' object, 
    // so addCourse adds the string instead of an object
    var result = golf.addCourse(req.body.course);
    var headerArray = golf.getArray();
    console.log(headerArray);
    
    if (result.added) {
        res.send(req.body.course + " added.  Total number of golf courses is: " + result.total);
    } 
    else {
        res.send("Updated: " + req.body.course);
    }
});

//Delete function
app.post('/delete', function(req, res) {
    res.type('text/html');
    var result = golf.deleteCourse(req.body.course);
    var headerArray = golf.getArray();
    console.log(headerArray);
    
    if (result.deleted) {
        res.send(result.name + " deleted.  Total number of golf courses is: " + result.total);
    } 
    else {
        res.send(req.body.course + ' not found.');
    }
});

//custom 404 pg
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

//custom 500 pg
// app.use(function(err, req, res, next){
//     console.error(err.stack);
//     res.type('text/plain');
//     res.status(500);
//     res.send('500 - Server Error');
// });

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port'));
});



