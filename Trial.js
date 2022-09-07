// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(1,1);
// console.log(fruits);

let coaches = [
    {Name : 'Mahela Jaywardane',Team:'MI',Salary:30000000},
    {Name : 'Trevor Bayliss',Team:'SRH',Salary:30000000},
    {Name : 'Simon Katich',Team:'RCB',Salary:28000000},
    {Name : 'Ricky Ponting',Team:'DC',Salary:40000000}
]

function myCallBack(x,y,z){
    console.log(x);
    console.log(`********************************************`);
}

coaches.forEach(myCallBack);

let coachesDetailsForSecondSeason = coaches.map(coach=>coach.Salary+=10000000);
console.log(`New Revised Salary for Coaches`);
console.log(JSON.stringify(coachesDetailsForSecondSeason));
console.log(`********************************************`);

let coachWithHigherSalary = coaches.filter(coach=>coach.Salary>30000000);
console.log(`Highest Salary for Head Coach`);
console.log(coachWithHigherSalary);
console.log(`********************************************`);

let coachWithHighestSalary = coaches.find(coach=>coach.Salary>40000000);
console.log(`Highest Salary Among all Head Coaches`);
console.log(coachWithHighestSalary);
console.log(`********************************************`);



