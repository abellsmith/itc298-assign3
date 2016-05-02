var courses = [
    { id: 0, name: 'chambersbay', city: 'universityplace' },
    { id: 1, name: 'thehomecourse', city: 'dupont' },
    { id: 2, name: 'goldmountain', city: 'bremerton' },
    { id: 3, name: 'tacomacgc', city: 'lakewood' },
];

exports.getArray = function(name, city) {
    courses.forEach(function(item,index) {
        return courses;
    });
    console.dir(courses);
    return courses;
};

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

exports.getCourse = function(name) {
    for(var i = 0; i < courses.length; i++){
    if(courses[i].name == name){
    return courses[i];
}
}
};

exports.getCity = function(name) {
    for(var i = 0; i < courses.length; i++){
    if(courses[i].name == name){
    return courses[i].city
}
}
};


