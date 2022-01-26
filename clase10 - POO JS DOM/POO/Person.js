class Person{
    constructor(firstName,lastName,age,gender,intests){
        this.name = [firstName,lastName];
        this.age = age;
        this.gender = gender;
        this.intests = intests;
    };

    bio(){
        return this.name[0] +  " is " + this.age + "Years old. they like" + this.intests;
    };

    greeting(){
        return "hi i'm " + this.name;
    };
}