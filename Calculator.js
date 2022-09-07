console.log("We are in Calculator module");

function Addition(numberA,numberB){
    let result = numberA+numberB;
    console.log('Addition Result: '+result);
}

function Subtraction(numberA,numberB){
    let result = numberA-numberB;
    console.log('Subtraction Result: '+result);
}

function Multiplication(numberA, numberB){
    let result = numberA*numberB;
    console.log('Multiplication Result: '+result);
}

function Division(numberA,numberB){
    let result = numberA/numberB;
    console.log('Division Result: '+result);
}

module.exports.addNumber=Addition;
module.exports.subtractNumber=Subtraction;
module.exports.multiplyNumber=Multiplication;
module.exports.divideNumber=Division;

exports.adder = (a,b)=>`Add operation Result ${a+b}`
exports.subtract = (a,b)=>`Subtract operation Result ${a-b}`
exports.multiply = (a,b)=>`Multiply operation Result ${a*b}`
exports.divide = (a,b)=>`Divide operation result ${a/b}`