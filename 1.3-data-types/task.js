
let loanAmount = 5000000;
let initialPayment = 120000;
let s = loanAmount - initialPayment;
let percent = 8;
let P = percent/(12*100); 
let n = 12;
let calculation = s*(P+P/(((1+P)^n)-1));
console.log(calculation);


function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}
