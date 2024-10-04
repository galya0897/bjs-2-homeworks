function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}
new Student()
new Student()


Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.marks !== undefined) {
        this.marks.push(...marks);
    } else {
        return this.marks;
    }
}

Student.prototype.getAverage = function () {
    if (this.marks === undefined || this.marks.length === 0) {
        return 0
    } else if (this.marks.length > 0) {
        let result = this.marks.reduce((acc, mark) => acc + mark, 0);
        return result / this.marks.length;
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
