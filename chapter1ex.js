// Chapter one practice / exercise



var money = 303.91;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE= 9.99;
const SPENDING_TRESHOLD = 200;

function addTax(amt){
  amt = amt + (amt * TAX_RATE);

  return amt;
}

function formatAmount(){
  return "$" + a.toFixed( 2 );
}


// a = total price before tax
for (var i = PHONE_PRICE; i <=money; i = i + PHONE_PRICE) {
  if (i < SPENDING_TRESHOLD){
    i = i + ACCESSORY_PRICE;
  }
  a = i;
}

addTax(a);
console.log("The price with tax is " + addTax(a))
console.log("The price formatted at the store is " + formatAmount(a))
