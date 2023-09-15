function student(name, age, pass){
    this.name = name;
    this.age = age;
    this.pass = pass;

    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.pass);
    }
}
var student1 = new student("Rahul", 21, [1,2,3]);
var student2 = new student("Rahul", 21, [1,2,3]);
var student3 = new student("Rahul", 21, [1,2,3]);
var student4 = new student("Rahul", 21, [1,2,3]);

student1.display();
student2.display();