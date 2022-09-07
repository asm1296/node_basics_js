const getName = require('./GiveFullName');
const calculator = require('./Calculator');
const { adder,subtract,multiply,divide} = require('./Calculator');

console.log('running javascript in node js environment');
var name = 'Akshay'  // Here Variable is initialized locally means it is not accessbile to other javascript files
// need to export and import
console.log(name);
getName.getFullName('Akshay','Mane');

calculator.addNumber(7,8);
calculator.subtractNumber(15,5);
calculator.multiplyNumber(16,6);
calculator.divideNumber(49,7);

console.log(adder(4,5));
console.log(subtract(18,6));
console.log(multiply(5,6));
console.log(divide(60,12));