const St = require('./student');

const obj = new St(1, 'Nguyen Van', 20, 'A');

obj.introduce(); 
console.log(obj.getGrade()); 

obj.setGrade('B');
console.log(obj.introduce()); 
