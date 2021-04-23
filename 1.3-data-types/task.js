let amount = 500000;
let contribution = 90000;
let s = amount - contribution;
let percent = 45;
let p = percent/(12*100);
let date = 60;
let n = 60;
let monthlyPayment = s*(p + p / (((1+p) ^ n)-1)).toPrecision(2);

console.log(monthlyPayment);

let totalAmount = monthlyPayment * date; 

console.log(totalAmount);

 function calculateTotalMortgage(percent, contribution, amount, date) {
   
    return totalAmount;
 }


function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}
