
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
