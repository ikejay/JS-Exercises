'use strict';

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.
const shopName = "The Corner Bakery"; 
console.log(shopName);
// Shop name is constant and will not change, so using const.

let shopLocation = "Downtown"; 
console.log(shopLocation);
// Shop location may change in the future, so using let.

const openingTime = 8; 
console.log(openingTime);
// Opening time is constant and will not change, so using const.

let closingTime = 20;
console.log(closingTime);
// Closing time may change in the future, so using let.

const hasDelivery = true;
console.log(hasDelivery);
// Delivery status is constant for now, so using const.

// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.
typeof shopName; // string
typeof shopLocation; // string
typeof openingTime; // number
typeof closingTime; // number
typeof hasDelivery; // boolean
typeof null; // object (this is the famous historical bug)
typeof undefined; // undefined  


// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.
let uninitializedVariable;
let nullVariable = null;

console.log(uninitializedVariable); // undefined
console.log(nullVariable); // null

console.log(typeof uninitializedVariable); // undefined
console.log(typeof nullVariable); // object

// The difference is that an uninitialized variable is undefined, meaning it has not been assigned a value,
// while a variable set to null explicitly represents the absence of any object value.


// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";

const priceNumber = Number(priceText);
console.log(priceNumber, typeof priceNumber); // 4.5 'number'

const countNumber = Number(countText);
console.log(countNumber, typeof countNumber); // 12 'number'

const flagBoolean = Boolean(flagText);
console.log(flagBoolean, typeof flagBoolean); // true 'boolean'

// * One number of your own:
const myNumber = 42;
const myString = String(myNumber);
console.log(myString, typeof myString); // '42' 'string'

// The conversion that would produce NaN is if the string were not a clean number, for example, if priceText were "4.50abc".


// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented until you reach this part, then uncomment and repair:
let bakeryName = "Maison Sarah";
bakeryName = "The Corner Bakery";
let openingHour = 7;
let loafCount = 12;
console.log(loafCount);
// Repair 1: Changed `const bakeryName` to `let bakeryName` to allow reassignment.
// Repair 2: Declared `openingHour` with `let` to fix the assignment to a variable that was never declared.
// Repair 3: Moved the declaration of `loafCount` before its usage in the console.log statement to fix the
// variable read before its declaration line.


// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.
let a = 5;
let b = 10;
console.log("Before swap: a =", a, ", b =", b);

let temp = a;
a = b;
b = temp;

console.log("After swap: a =", a, ", b =", b);


// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
