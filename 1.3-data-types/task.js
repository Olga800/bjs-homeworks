
let amount = 5000000;
let contribution = 120000;
let s = amount - contribution;
let percent = 25;
let p = percent/(12*100); 
let n = 12;
let date = 60;

let calculation = s * (p + p/ (((1+p) ^ n)-1)).toFixed(2);

console.log(calculation);

let  totalAmount = calculation * date;

console.log(totalAmount);

function calculateTotalMortgage(percent, contribution, amount, date) {
   
    return totalAmount;
}
  
Задача № 2

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}
