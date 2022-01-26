class Student extends Person {
  constructor(
    firstName,
    lastName,
    age,
    gender,
    intests,
    grade,
    classes,
    studyType
  ) {
    super(firstName, lastName, age, gender, intests);
    this.grade = grade;
    this.classes = classes;
    this.studyType = studyType;
  }

  greetingStudent() {
    return "Hello, my name is " + this.name + "I study " + this.classes;
  }
};