function calculateTotalMortgage(percent, contribution, amount, date) {
let amount = 500000;
let contribution = 90000;
let s = amount - contribution;
let percent = 45;
let p = percent/(12*100);
let date = 60;
let n = 12;
let monthlyPayment = s*(p + p / (((1+p) ** n)-1)).toPrecision(2);

console.log($ {monthlyPayment.percent()});

let totalAmount = monthlyPayment * date; 

console.log(${totalAmount});
 
    return totalAmount;
 }
  

  
 function getGreeting() {
    let name = prompt("Введите имя");
    if (name != "null") {
    console.log('Привет, мир! Меня зовут' + ' ' + name);
}   else  {
    console.log('Привет, мир! Меня зовут' + ' ' + 'Аноним');
};
    return greeting;
 }
     console.log(getGreeting (''))
     console.log(getGreeting ('')); 
     console.log(getGreeting ());
     console.log(getGreeting (null)); 

