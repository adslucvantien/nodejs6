class student {
  constructor(id, name, age, grade) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old and Grade ${this.grade}`;
  }

  getGrade() {
    return this.grade;
  }

  setGrade(newGrade) {
    this.grade = newGrade;
  }
}

module.exports = student;
