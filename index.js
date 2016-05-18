var express = require('express');
var app = express();
var golf = require("./lib/courses.js");

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





 

//home page
app.get('/', function(req, res){
    res.type('text/html');
    // res.sendfile('./public/home.html');
    res.render('home', {courses: golf.getAll()});  // renders home view using default layout
}); 

app.get('/detail/:course', function(req,res){
    res.type('text/html');
    var found = golf.getCourse(req.params.course);
    if (!found) {
        // note - new course has no ID yet
        found = {course: req.params.course};
    }
    res.render('detail', {course: found} );    
});


//about page
app.get('/about', function(req, res){
    res.type('text/html');
    res.send('About');
});

//Search function
app.post('/search', function(req, res) {
    res.type('text/html');
    console.log(req.body.course);
    var foundCourse = golf.getCourse(req.body.course);
    if (!foundCourse) {
        // note - new course has no ID yet
        foundCourse = {course: req.body.course};
    }
    console.log(foundCourse)
    res.render('detail', {course: foundCourse} );
});

//Add function
app.post('/add', function(req, res) {
    res.type('text/html');
    // you are adding a city param, but your form doesn't have this field
    var newCourse = {"course":req.body.course, "city":req.body.city};
    // you are passing a string to golf.addCourse instead of the 'newCourse' object, 
    // so addCourse adds the string instead of an object
    var result = golf.addCourse(newCourse);
    res.render('detail', {course: newCourse, result: result});
});

//Delete function
app.post('/delete', function(req, res) {
    res.type('text/html');
    var result = golf.delete(req.body.course);
    res.render('detail', {result: result});
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