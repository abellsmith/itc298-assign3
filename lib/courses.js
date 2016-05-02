var courses = [
    { id: 0, name: 'chambersbay', city: 'universityplace' },
    { id: 1, name: 'thehomecourse', city: 'dupont' },
    { id: 2, name: 'goldmountain', city: 'bremerton' },
    { id: 3, name: 'tacomacgc', city: 'lakewood' },
];

//get array for display
exports.getArray = function(name, city) {
    courses.forEach(function(item,index) {
        return courses;
    });
    console.dir(courses);
    return courses;
};

//add function
exports.addCourse = function(addCourse) {
    var found = false;
    courses.forEach(function(item,index) {
        if (item.name == addCourse.name) {
            item = addCourse;
            return true;
        }
    });
    if(!found) {
        courses.push(addCourse);
    }
};

//delete function
exports.deleteCourse = function(deleteCourse) {
    var found = false;
    courses.forEach(function(item,index) {
        if (item.name == deleteCourse.name) {
            item = deleteCourse;
            return true;
        }
    });
    if(!found) {
        courses.splice(deleteCourse);
    }
};

//search function
exports.getCourse = function(name) {
    for(var i = 0; i < courses.length; i++){
    if(courses[i].name == name){
    return courses[i];
}
}
};

//get city for display
// exports.getCity = function(name) {
//     for(var i = 0; i < courses.length; i++){
//     if(courses[i].name == name){
//     return courses[i].city
// }
// }
// };


