var courses = [
    { id: 0, name: 'chambersbay', city: 'universityplace' },
    { id: 1, name: 'thehomecourse', city: 'dupont' },
    { id: 2, name: 'goldmountain', city: 'bremerton' },
    { id: 3, name: 'tacomacgc', city: 'lakewood' },
];

exports.getCourse = function(name) {
    for(var i = 0; i < courses.length; i++){
    if(courses[i].name == name){
    return courses[i].city
}
}
};


