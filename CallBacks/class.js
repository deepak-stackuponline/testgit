//class is a template before creating an object

class Student {
    constructor (name,yob){
        this.name = name;
        this.yob = yob;
    }
    getAge(){
        return new Date().getFullYear()-this.yob;
    };
    getName(){
        return this.name;
    };
}

var student1 = new Student("Alen",1980);
var student2 = new Student("Deepak",1980);
var student3 = new Student("Jose",1980);


console.log(student1);
console.log(student2);
console.log(student3);
