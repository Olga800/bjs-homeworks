
let amount = а;
let contribution = b;
let s = amount - contribution;
let percent = c;
let p = percent/(12*100);
let date = d;
let n = t;
let monthlyPayment = s*(p + p / (((1+p) ** n)-1)).toPrecision(2);

console.log(monthlyPayment);

let totalAmount = monthlyPayment * date; 

console.log(totalAmount);

 function calculateTotalMortgage(percent, contribution, amount, date) {
  
    return totalAmount;
 }
  

  
 function getGreeting() {
    let name = prompt("Введите имя");
    if (name != "null") {
    console.log('Привет, мир! Меня зовут' + ' ' + name);
}   else (!name || name == "null") {
    console.log('Привет, мир! Меня зовут' + ' ' + 'Аноним');
};
    return greeting;
 }
     console.log(getGreeting (''))
     console.log(getGreeting ('')); 
     console.log(getGreeting ());
     console.log(getGreeting (null)); 
}
