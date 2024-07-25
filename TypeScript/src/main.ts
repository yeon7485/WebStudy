import { getFullName, User } from './user';

const yeon: User = {
  firstName: 'yeon',
  lastName: 'Park',
  age: 1,
  isValid: true,
};
const fullName = getFullName(yeon);

console.log(fullName);
console.log(yeon.isValid);
