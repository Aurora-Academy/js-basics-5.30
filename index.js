// Write a program that welcomes user based on their name and password input.

// const userName = prompt("What is your username?");
// const password = prompt("Enter pw");

// Statement (ES5)
// if else
// switch case
// if (userName === password) {
//   alert(`Welcome ${userName}`); // String literal
// } else {
//   alert("Invalid un or pw");
// }
// Ternary Operator (ES6)
// condition ? true : false

// if else
// userName === password
//   ? alert(`Welcome ${userName}`)
//   : alert("Invalid un or pw");

// Ask user for name and time (number)
// 5 to 12 => Morning
// 1 to 3 => Afternoon
// 3 to 6 => evening

// const name = prompt("Enter your name"); // raktim
// const time = Number(prompt("Enter time")); // 5

// time >= 5 && time <= 12
//   ? alert(`Good morning ${name}`)
//   : time >= 1 && time < 3
//   ? alert(`Good afternoon ${name}`)
//   : alert(`Good evening ${name}`);

// Write a multiplication table for 2, 3, 5

// 1 to 10 print
// starting condition,stopping condition, running condn,
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// console.log(".........");
// let j = 1;
// while (j <= 10) {
//   console.log(j);
//   j++;
// }
// console.log(".........");
// let k = 1;
// do {
//   console.log(k);
//   k++;
// } while (k <= 10);

// console.log("...........");
// const a = 2;
// let z = 1;
// do {
//   console.log(`${a}*${z}=${a * z}`);
//   z++;
// } while (z <= 10);

// Functions

// ES5

// SUM OF 2 DIGITS
// const a = Number(prompt("A"));
// const b = Number(prompt("B"));
// const add = a + b;
// console.log(add);

// function define
function sum(a, b) {
  //logic
  return a + b;
}

const result = sum(2, 2);
const resulta = sum(2, 1);
const resultb = sum(2, 4);
const resultc = sum(2, 6);

console.log(result, resulta, resultb, resultc);

// ES6

const sumES6 = (a, b) => {
  return a + b;
};

// Write a function to do multiplication table of 2

// function define
const mul = (table) => {
  let i = 1;
  do {
    console.log(table * i);
    i++;
  } while (i <= 10);
};

// function call / execute
mul(2);

// Write a function to find the area of rectangle

const area = (l, b) => {
  return l * b;
};

const rect = area(2, 3); //6
console.log({ rect });

// Write a JavaScript function that reverses a number.
// Example x = 32243; Expected Output : 34223

const reverse = (number) => {
  const str = String(number);
  let newNum = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newNum += str[i];
  }
  return newNum;
};

const res = Number(reverse(32243));
console.log({ res });

// Write a JavaScript function that creates a commaFormatter.
// Example x = 10000; Expected Output : 10,000
// Example y= 1000000; Expected Output: 1,000,000

// 1. Define a function
// 2. Call a function (10000) as param
// 3. convert to string
// 4. calculate the length of string
// 5. use for loop
// 6. create counter and newString as let variables
// 7. inside the loop, count for 0, for every 0; increase counter by 1
// 8. If counter reaches 3, add comma in newString and reset the counter
// 9. return the newString

const commaFormatter = (num) => {
  const string = String(num);
  let newString = "",
    reverseString = "",
    counter = 0;

  for (let i = string.length - 1; i >= 0; i--) {
    console.log({ counter, newString });
    if (counter === 3) {
      newString += ",";
      counter = 0; // counter reset
    }
    newString += string[i];
    counter++;
  } // newString= "000,01"
  for (let i = newString.length - 1; i >= 0; i--) {
    reverseString += newString[i];
  }
  return reverseString;
};

const re = commaFormatter(1000000);
console.log({ comma: re });

// Write a js function that converts regular text to proper case
// EG: "raktim shrestha" => "Raktim Shrestha"

// raktim shrestha is a mern stack teacher

// Write a js function that converts long text to ... format
// "Raktim is a MERN Stack teacher. He is teaching us MERN Course from 20th Jan"
//  ||
//  V
// "Raktim is a MERN Stack teacher. He is ..."

// Write a  js function that replaces C++ to MERN
// "Raktim is a C++ teacher. He is teaching us C++ Course from 20th Jan"
// "Raktim is a MERN Stack teacher. He is teaching us MERN Course from 20th Jan"

// Write a js function that validates if the user input string is email or not
// Use string method

// includes()

// Write a js function that count number of vowels used in the string
// vowels: aeiou

// toLowerCase()
// for loop check for aeiou

// Types of Functions

// Default Function
// Parameterized Function
// Implicit Function
// Explicit Function
// Anonymous Function
// Inline Function
// IIFE
// Closure
// Callback Function

// Function
// function fn(){}
// const fn = () => {};

// default value in params
const sayHi = (name = "raktim") => {
  console.log(`Hi ${name}`);
};

sayHi("shiva");
// Pagination

// Parameterized Function

// title, author, edition, isbn number, date, publisher
// multiple parameter ==> how to handle it => object

const sayHiAgain = (fname, lname) => {
  // const lname = "shrestha";
  console.log(`Hi Again ${fname} ${lname}`);
};

// implicit function
const sums = (a, b) => a + b;

// explicit function
const sumss = (a, b) => {
  return a + b;
};

// Anonymous function

(function () {
  return "hello";
});

// inline function

const a = function () {};

// IIFEs
// Immediately Invoked Functional Expression
(function () {
  console.log("hello");
})();

// Eg; Scripts for DevOps Engineer

// Closure

const getEnvVariables = () => {
  const password = "password";
  const port = "1234";
  const db = "db";
  return password, port, db;
};

console.log(getEnvVariables());

// Callback Function

const print = (name) => {
  return `Print is ${name}`;
};

const mainFn = (fname, lname, cb) => {
  const name = fname.concat(" ", lname);
  return cb(name);
};

const resu = mainFn("raktim", "shrestha", print);
console.log(resu);
