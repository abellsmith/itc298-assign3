module.exports = function(app) {
    var Course = require("../models/courses.js");


    // UI routes
    
    
    
    
    //home page
    app.get('/', function(req, res){
        Course.find(function (err, courses) {
            if (err) return next(err);
            if (!courses) return next();
            res.type('text/html');
            res.render('home', {courses: courses } );
        });
    }); 
    
    
    
    
    
    
    //single
    app.get('/detail/:course', function(req,res){
        var found = req.params.course;
        Course.findOne({"course": found}, function (err, found) {
            if (err) return next(err);
            if (!found) {
                found = {course: req.params.course};
            }
            res.type('text/html');
            res.render('detail', {course: found} );    
        });
    });
    
    
    
    
    
    
    //about page
    app.get('/about', function(req, res){
        res.type('text/html');
        res.send('About');
    });
    
    
    
    
    
    
    //Search function
    app.post('/search', function(req, res) {
        var found = req.params.course;
        Course.findOne({"course": found}, function (err, found) {
            if (err) return next(err);
            if (!found) {
                found = {course: req.params.course};
            }
            res.type('text/html');
            res.render('detail', {course: found} );    
        });
    });
    
    
    
    
    
    
    
    //Add function
    app.post('/add', function(req, res) {
        var newCourse = {"course":req.body.course, "city":req.body.city};
        Course.findByIdAndUpdate({_id:req.body.id}, newCourse, function(err, result) {
            if (err) {
                new Course(newCourse).save(function(err){
                action = "Added";
                 res.render('detail', {course: newCourse, result: "Added"} );            
                });
            } else {
             res.render('detail', {course: newCourse, result: "Updated"} ); 
            }  
        });
    });
    
    
    
    
    
    
    //Delete function
    app.post('/delete', function(req, res) {
        Course.remove({"_id":req.body.id }, function(err) {
            var action = (err) ? err : "Deleted";
            res.type('text/html');
            res.render('detail', {course: {}, result: action} );            
        });
    });






    
    // API routes
    app.get('/api/courses', function(req,res) {
        Course.find(function (err, courses) {
            if (err) return next(err);
            if (courses) {
                res.json(courses);    
            } else {
                res.status(404).send("404 - not found");    
            }
        });
    });

    app.get('/api/detail/:course', function(req,res) {
        Course.getCourse({"course": req.params.course}, function (err, found) {
            if (found) {
                res.json(found);    
            } else {
                res.status(404).send("404 - not found");    
            }
        });
    });
}