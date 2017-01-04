const SPENDING_TRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;

function addTax(amount){
  amount = amount + (amount * TAX_RATE);

  return amount;
}

function formatAmount(amount){
  return "$" + amount.toFixed(2);
}

while ( amount < bank_balance){
  amount = amount + PHONE_PRICE;

  if(amount < SPENDING_TRESHOLD){
    amount = amount + ACCESSORY_PRICE;
  }
}

amount = addTax(amount);

console.log(formatAmount(amount));

if (amount > bank_balance){
  console.log("Oh no you dont have enough money");

}
