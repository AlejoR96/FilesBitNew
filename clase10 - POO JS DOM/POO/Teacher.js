class Teacher extends Person {
    constructor(
        firstName,
        lastName,
        age,
        gender,
        intests,
        groupDirector,
        title,
        salary,
        classes,
        prefix
    ) {
        super( firstName,lastName,age,gender,intests);
        this.groupDirector = groupDirector;
        this.title = title;
        this.salary = salary;
        this.classes = classes;
        this.prefix = prefix;
    }

    getSalary(){
        return this.salary;
    }
    setSalary(){
        return this.salary;
    }

    greetingAsTeacher(){
        return "hello, my name is " + this.prefix + " " + this.name + " and I teach " + this.classes[0]
    };
};