/*
a = 21;
b = a * 2;
console.log( b );
*/

// alert( b ); to popup window

/* Brings up a prompt

age = prompt( "Please tell me your age:");
console.log( age );
*/

/*

You need var in every progra, asi it's the primary way you delcare (aka create) vairables.

var a = 20;

a = a +1;
a = a *2;

console.log( a );
*/

/* Chane the string a 42 to a Number
var a = "42";
var b = Number( a);

console.log ( a);
console.log( b);
*/

// convert the var "amount" to sting and add "$" on the beginning
/*
var amount = 99.99;
amount = "$" + String( amount );
console.log( amount );
*/

// In javascript constant variables are usually CAPITALIZED with underscores _
// eg: TAX_RATE = 0.08;
// ES6 uses const TAX_RATE = 0.08; to delcare constants.

// console.log ( amount.toFixed (2)); toFixed(X) specifies amount of decimals
/*    - if statement (if x is true do{this})
var bank_balance = 302.13;
var amount = 99.99;

if (amount < bank_balance) {
  console.log( "i want to buy this phone!");
}
*/

/* Else statement for when If is false
   - if statement (if x is true do{this})
var bank_balance = 302.13;
var amount = 99.99;

if (amount < bank_balance) {
  console.log( "i want to buy this phone!");
}
else {
  console.log ("No, Thanks")
}
*/
/* while loop, while the var numOfCustomers is more than 0 the consoloe prints how may
I help you, then it takes numOfCustomers -1, repeats until numOfCustomers !> 0
while (numOfCustomers > 0) {
  console.log( "How may I help you");

  numOfCustomers = numOfCustomers -1;
}
*/

/* (do..while) loops will always run the first time
do {
  consoloe.log ("How may I help you?")

  numOfCustomers = numOfCustomers -1;
} while (numOfCustomers > 0);
*/

/*
var i = 0;

// a  while loop would run forever, right?

while (true) {
// once i is no longer <= 9 the loops brakes
  if ((i <= 9) === false) {
    break;
  }

  console.log( i);
  i = i + 1;

}
*/


/*  for as long as i <= 9 the loop will keep adding 1 to i and printing i
for (var i = 0; i <=9; i = i + 1) {
  console.log (i);
}
*/
/* functions allows you to call on it to run all code inside of it.
function printAmount() {
  console.log ( amount.toFixed( 2));
}

var amount = 99.99;
printAmount();

amount = amount * 2;

printAmount();
*/

/* Addding parameters (amt) to a pass values through the function
 and getting a return value from a function
function printAmount(amt) {
  console.log( amt.toFixed( 2 ));
}

function formatAmount() {
  return "$" + amount.toFixed( 2 );
}

var amount = 99.99;

printAmount( amount * 2);

amount = formatAmount();
console.log( amount);
*/
/* uses both parameters and returns a value
const TAX_RATE = 0.08;

function calculateFinalPurchaseAmount(amt) {
  amt = amt + (amt * TAX_RATE);

  return amt;
}

var amount = 99.99;

amount = calculateFinalPurchaseAmount( amount );

console.log( amount.toFixed( 2 ) );
*/

// SCOPE
/* variables only exist inside the scope of their functions
function one(){
  var a = 1;
  console.log( a );
}

one();
*/
// nesting functions and scope access
/*
function outer() {
  var a = 1;

  function inner(){
    var b = 2;

    // we can access both a and b here
    console.log ( a + b ); // 3
  }

  inner();

  // we can only acces a here
  console.log (a); //1

}
outer();
*/
