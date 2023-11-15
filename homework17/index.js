class Student {
    constructor(name, yearOfBirth) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.marks = [];
        this.attendance = new Array(25);
    }
    getAge() {
        const currentDate = new Date().getFullYear();
        return currentDate - this.yearOfBirth;
    }
    getAverageMark() {
        let sumOfMarks = 0;
        for(let i = 0; i < this.marks.length; i++) {
            sumOfMarks += this.marks[i];
        }
        return sumOfMarks / this.marks.length;
    }
    estimate(mark) {
        if(!isNaN(mark)) {
            this.marks.push(mark);
        }
    }
    present() {
        for(let i = 0; i < this.attendance.length; i++) {
            if(this.attendance[i] === undefined) {
                this.attendance[i] = true;
                break;
            }
        }
    }
    absent() {
        for(let i = 0; i < this.attendance.length; i++) {
            if(this.attendance[i] === undefined) {
                this.attendance[i] = false;
                break;
            }
        }
    }
    summary() {
        const averageMark = this.getAverageMark();
        const averageAttendance = this.getCountOfPresence() / this.attendance.length;
        //console.log(this.name + '`s average attendance: ' + averageAttendance);
        if(averageMark >= 90 && averageAttendance >= 0.9) {
            return this.name + ', well done!';
        }
        else if(averageMark < 90 && averageAttendance < 0.9) {
            return this.name + ', you`re silly billy!';
        }
        else if(averageMark < 90 || averageAttendance < 0.9) {
            return this.name + ', good, but it can be better';
        }
    }
    getCountOfPresence() {
        let countOfPresence = 0;
        for(let i = 0; i < this.attendance.length; i++) {
            if(this.attendance[i] === true) countOfPresence++;
        }
        return countOfPresence;
    }
}

// student 1
const student1 = new Student('Diana', 2002);

console.log(student1.name, '`s age: ', student1.getAge());

student1.estimate(100);
student1.estimate(95);
student1.estimate(92);
student1.estimate(99);
student1.estimate(100);

console.log(student1.name, '`s average mark: ', student1.getAverageMark());

student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();

student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();

student1.present();
student1.present();
student1.present();
student1.present();
student1.present();

student1.present();
student1.present();
student1.present();
student1.present();
student1.present();

student1.present();
student1.present();
student1.present();
student1.present();
student1.present();

console.log(student1.summary());

console.log('**********************');

// student 2
const student2 = new Student('Kaveh', 2000);

console.log(student2.name, '`s age: ', student2.getAge());

student2.estimate(85);
student2.estimate(90);
student2.estimate(93);
student2.estimate(80);
student2.estimate(60);

console.log(student2.name, '`s average mark: ', student2.getAverageMark());

student2.present();
student2.present();
student2.present();
student2.present();
student2.present();

student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();

student2.present();
student2.present();
student2.present();
student2.present();
student2.present();

student2.present();
student2.present();
student2.present();
student2.present();
student2.present();

student2.present();
student2.present();
student2.present();
student2.present();
student2.present();

console.log(student2.summary());

console.log('**********************');

// student 3
const student3 = new Student('Childe', 2001);

console.log(student3.name, '`s age: ', student3.getAge());

student3.estimate(80);
student3.estimate(81);
student3.estimate(60);
student3.estimate(87);
student3.estimate(89);

console.log(student3.name, '`s average mark: ', student3.getAverageMark());

student3.present();
student3.present();
student3.present();
student3.absent();
student3.present();

student3.present();
student3.present();
student3.present();
student3.present();
student3.absent();

student3.present();
student3.present();
student3.absent();
student3.absent();
student3.present();

student3.present();
student3.present();
student3.present();
student3.present();
student3.present();

student3.absent();
student3.absent();
student3.absent();
student3.present();
student3.present();

console.log(student3.summary());




