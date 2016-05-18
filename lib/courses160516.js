var courses = [
    { id: 0, name: 'chambersbay', city: 'universityplace' },
    { id: 1, name: 'thehomecourse', city: 'dupont' },
    { id: 2, name: 'goldmountain', city: 'bremerton' },
    { id: 3, name: 'tacomacgc', city: 'lakewood' },
];

//get array for display
exports.getArray = function(name) {
    return courses.find(function(item) {
        return item.courses === courses;
    });
};

//add function
exports.addCourse = function(addCourse) {
    var found = false;
    courses.forEach(function(item,index) {
        if (item.name == addCourse.name) {
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
exports.delete = function(name) {
    var action = "";
    console.log(name);
    // this always fails because you pass a string parameter
    // and compare it's (non-existent) name property against
    // existing course names. 
    // Also, if the comparison succeeded your code would update
    // the found item rather than delete it
    
    courses.forEach(function(item,index) {
        if (item.name == name) {
            console.log(item);
            courses.splice(index, 1);
            result = "action";
        }
    });
    return {"deleted": result, "total": courses.length};
};

//search function
exports.getCourse = function(name) {
    for(var i = 0; i < courses.length; i++){
    if(courses[i].name == name){
    return courses[i];
}
}
};


exports.getCount = function(){
    return courses.length;
};