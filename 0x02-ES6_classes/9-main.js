import { HolbertonClass, listOfStudents, StudentHolberton } from './9-hoisting';

console.log(listOfStudents);

const listPrinted = listOfStudents.map((student) => student.fullStudentDescription());

console.log(listPrinted);

console.log(
  'listOfStudents has the correct length:',
  listOfStudents.length === 5,
);

console.log(
  'initialization works correctly:',
  listOfStudents[0] instanceof StudentHolberton,
  listOfStudents[0].holbertonClass instanceof HolbertonClass,
);

console.log(
  'fullStudentDescription returns the right strings:',
  listPrinted[0] === 'Guillaume Salva - 2020 - San Francisco',
);
