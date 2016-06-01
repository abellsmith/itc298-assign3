var Course = require("./models/courses.js");

new Course({course: 'chambersbay', city: 'universityplace'}).save();
new Course({course: 'thehomecourse', city: 'dupont'}).save();
new Course({course: 'goldmountain', city: 'bremerton'}).save();
new Course({course: 'tacomacgc', city: 'lakewood'}).save();

Course.find(function(err, courses){
    console.log(courses);
});