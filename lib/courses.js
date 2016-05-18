var courses = [
    { id: 0, course: 'chambersbay', city: 'universityplace' },
    { id: 1, course: 'thehomecourse', city: 'dupont' },
    { id: 2, course: 'goldmountain', city: 'bremerton' },
    { id: 3, course: 'tacomacgc', city: 'lakewood' },
];

//get array for display
exports.getArray = function(course) {
    return courses.find(function(item) {
        return item.courses === courses;
    });
};

//add function
exports.addCourse = function(addCourse) {
    var found = false;
    courses.forEach(function(item,index) {
        if (item.course == addCourse.course) {
            item[index] = addCourse;
            found = true;
        }
    });
    if(!found) {
        addCourse.id = courses.length;
        courses.push(addCourse);
    }
    var action = (found) ? "updated" : "added";
    return {"added": !found, "total": courses.length};
};

//delete function
exports.delete = function(course) {
    var action = "";
    console.log(course);
    // this always fails because you pass a string parameter
    // and compare it's (non-existent) course property against
    // existing course names. 
    // Also, if the comparison succeeded your code would update
    // the found item rather than delete it
    
    courses.forEach(function(item,index) {
        if (item.course == course) {
            console.log(item);
            courses.splice(index, 1);
            action = "deleted";
        }
    });
    return {"action": action, "total": courses.length};
};

//search function
exports.getCourse = function(course) {
    for(var i = 0; i < courses.length; i++){
    if(courses[i].course == course){
    return courses[i];
}
}
};


exports.getAll = function(){
    return courses;
};


exports.getCount = function(){
    return courses.length;
};