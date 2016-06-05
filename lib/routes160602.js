module.exports = function(app) {
    var golf = require("../lib/courses.js");


    // UI routes
    //home page
    app.get('/', function(req, res){
        res.type('text/html');
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


    
    // API routes
    app.get('/api/courses', function(req,res) {
        var courses = golf.getAll();
        if (courses) {
            res.json(courses);    
        } else {
            res.status(404).send("404 - not found");    
        }
    });

    app.get('/api/detail/:course', function(req,res) {
        var found = golf.getCourse(req.params.course);
        if (found) {
            res.json(found);    
        } else {
            res.status(404).send("404 - not found");    
        }
    });
    
}