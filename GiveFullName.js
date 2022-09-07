const test = require('asm-first-calc');

test.addNumber(6,7);

function GiveFullName(firstName,lastName){
    var fullName = firstName+' '+lastName;
    console.log(fullName);
}

module.exports.getFullName = GiveFullName;


// console.log(module);