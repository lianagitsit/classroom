var Student = require('./student');

function Class(professor, room){
    this.students = [];

    this.addStudents = function(){
        this.students.push(new Student(name, subject, gpa));
    };

    this.studentCount = this.students.length;
    this.professor = professor;
    this.room = room;
}