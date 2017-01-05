
// typeof, used to examine current value and tell you what type it is
/*
a ="hello world";
console.log(typeof(a));
*/
/*
var a;
typeof a // "undefined"

a ="hello world";
typeof a //"string"

a = 42;
typeof a; // "number"

a = true;
typeof a; // "boolean"

a = null;
typeof a; // "object" - bug

a = undefined;
typeof a;  // "undefined"

a = { b: "c" };
typeof a; // "object"
*/
// objects
/*
var obj = {
  a: "hello world",
  b: 42,
  c: true
};

obj.a; // "hello world"
obj.b // "42"
obj.c // true

obj["a"]; // "hello world"
obj["b"] // 42
obj["c"] // true
*/

// Accessing different things with []
/*
var obj ={
  a: "hello world",
  b: 42
};

var b ="a";

obj[b]; // hello world
obj["b"] // 42
*/
// Arrays
/*
var arr= [
  "hello world",
  42,
  true
];

arr[0];  //hello world
arr[1];  // 42
arr[2]; // true
arr.lenght; // 3
typeof arr; // object
*/
// functions
/*
function foo(){
  return 42;
}
foo.bar = "hello world";

typeof foo;  // "function"
typeof foo(); // "number"
typeof foo.bar // "string"
*/

// built in type methods
/*
var a = "hello world";
var b= 3.14159;

a.length; // 11
a.toUpperCase(); // "HELLO WORLD"
b.toFixed(4);  // "3.1416"
*/
// comparing values

// Coercison, change the type from one to another
/*
var a = "42";

var b = Number(a);

a;  // "42"
b; // 42 - the number
*/
// impicitly coerced (non obvious)
/*
var a ="42";

var b = a *1; // "42" impicitly coerced to 42 here
a; // "42"
b; // 42 the number
*/
// Truthy falsy only aplied to boolean that is coerced
/*
falsy:
"" (empty string)
0, -0, Nan (invalid number)
null, undefined
false
*/

// Equality
/*
==  checks for value Equality with coercison allowed
=== checeks for value without coercio

var a = "42";
var b 42;

a == b; // true
a === b; // false
*/
// Arrays with commans sperating the number are converted to string.
/*
var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";

a == c; // true
a == c; // true
a == b; // false
*/
// Inequality
// String values can also be compared using alphabetic rules "bar" < "foo"
/*
var a =41;
var b ="42";
var c = "43"

a < b;  /// true
b < c   // true
*/
/*
var a = 42;
var b = "foo";

a < b //false
a > b;  // false
a == b; // false
*/
// hoisting
/*
var a = 2;

foo();  // works because or foo()

function foo() {
  a = 3;

  console.log ( a );   // 3

  var a;      // declarartion is hoisted
              // to the top of foo()
}

console.log ( a ); // 2
*/
// nested scopes
/*
function foo(){
    var a =1;

    function bar() {
      var b = 2;

      function baz(){
        var c =3;

        console.log( a, b, c); // 123
      }

      baz();
      console.log( a, b); // 1 2
    }

    bar ();
    console.log( a );  // 1
}
foo ();
*/
/*
function foo(){
  a = 1; // A not fomrally declared
}
// Always formally declare! dont do just a;
foo();
a;   // 1 -- oopes auto globar varaible :(
*/
// using let instead of var makes it belong to only that scope
/*
function foo(){
  var a =1;

  if ( a >=1) {
    let b = 2;

    while (b < 5) {
      let c = b * 2;
      b++;

      console.log( a + c);
    }
  }
}

foo();
*/

// Conditionals
/*
if (a == 2 ) {
  // do something
}
else if (a == 10) {
  // do another thing
}
else if (a == 42){
  //do yet another thing
}
else {
  // fallbak to here
}
*/
// another option with the switch statment
/*
switch (a) {
  case 2:
    // do something
    break;
  case 10:
  // do something else
    break;
  case 42:
  // do yet another thing
    break;
  default:
      //fallback to here
}
*/
// fall through switch, if either 2 or 10 it will execute "some cool stuff"
/*
switch (a){
  case 2:
  case 10:
    //some cool stuff
    break;
  case 42:
    //other stuff
    break;
  default:
  // fallback
}
*/

// conditional operator
/*
var a = 42;

var b = (a > 41) ? "hello" : "world";
*/
// similar to:

// if (a > 41) {
//    b = "hello";
// }
// else {
//    b = "world";
// }

// Strict mode
/*
function foo() {
  "use strict";

  // this code is strict mode
function bar(){
  // this code is strick mode
  }
}
// this code is not strict mode
*/
// Compate that to
/*
"use strict";
function foo(){
  // stict mode
  function bar(){
    //strict mode
  }
}
*/
// strict mode helps here:
/*
function foo(){
  "use strict" // turn on strct mode
  a = 1;      // "var" missing, refrenceError
}
foo();
*/

// functions as values
// the 2n function is named bar, it's preferable to the anon one
/*
var foo = function () {
  // ..
}

var x = function bar(){
  //..
}

*/
// IIFE
/*
(function IIFE(){
  console.log( "Hello!");
})();
// Hello
*/
//consider
/*
function foo() { .. }

// `foo` function reference expression,
// then `()` executes it
foo();

// `IIFE` function expression,
// then `()` executes it
(function IIFE(){ .. })();

*/
// scopes inside with IIFE
/*
var a = 42;

(function IIFE(){
  var a = 10;
  console.log( a ); // 10
})();
console.log(a); // 42
*/
// IIFE can have return values
/*
var x = (function IIFE(){
  return 42;
})();

x; // 42
*/
// Closure <- Important and interesting!
/*
function makeAdder(x){
  // paramter x is an inner vairable

  // inner funnction add() uses x, so it has a closure over it
  function add(y){
    return y +x;
  };

  return add;
}

var plusOne = makeAdder( 1 );

var plusTen = makeAdder( 10 );

plusOne( 3 ); // 4  1 + 3
plusOne( 41 ); // 42
plusTen( 13 ); // 23
*/
// Modules

function User(){
  var username, password;

  function doLogin(user,pw) {
    username = user;
    password = pw;

    // do the rest of lgoing work
  }

  var publicAPI = {
    login: doLogin
  };

  return publicAPI;
}
