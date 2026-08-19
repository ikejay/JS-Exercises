"use strict";

// Lesson 03 exercise: Strings and numbers
// In your exercise repository, create a branch named `lesson-03-exercise` and switch to it,
// then open `lesson-03.js`, where the questions wait as comments. Work beneath each question
// in order.

// TODO: Part one.
// Declare variables for a shop name, an opening hour, and a closing hour, then log one
// welcoming sentence built as a single template literal that uses all three.
let shopName = "Maison Sarah";
let openingHour = 7;
let closingHour = 19;
console.log(
  `Welcome to ${shopName}! We are open from ${openingHour} to ${closingHour}.`,
);

// TODO: Part two.
// The file provides a messy string with surplus spaces at both ends, the wrong case, and one
// word that needs replacing. Apply the methods from this lesson, chained or in sequence, to
// log the cleaned version, and add a comment naming each method you used and the job it
// performed.

// * The provided messy string:
const messy = "   Maison   Sarah, fresh bread daily   ";
console.log(messy.trim().replace("   ", " ").replace("daily", "always").toLowerCase());
// trim() removed the whitespaces from both ends of the string
// toLowerCase() converted all characters in the string to lowercase
// replace() replaced the first instance of "   " with a single space and replaced "daily" with "always"

// TODO: Part three.
// Using the provided product string, log its length, the position at which a given word
// begins, and a slice containing exactly that word. Then split the provided comma-separated
// list and log the resulting pieces.

// * The provided product string and comma-separated list:
const product = "Sourdough Loaf, whole grain";
const flavorList = "rye,spelt,wheat,olive";
console.log(product.length); // logs the length of the product string
console.log(product.indexOf("whole")); // logs the position at which the word "whole" begins
console.log(product.slice(17, 22)); // logs a slice containing the word "whole"
console.log(flavorList.split(",")); // splits the flavorList string into an array of pieces and logs it 

// TODO: Part four.
// From the net price and tax rate in the file, calculate the final price and log it inside a
// template literal, formatted to two decimal places. Add a comment explaining why the
// formatting step must come last.

// * The provided net price and tax rate:
const netPrice = 4.0;
const taxRate = 0.07;
const finalPrice = (netPrice * (1 + taxRate)).toFixed(2);
console.log(`The final price is $${finalPrice}.`);
// toFixed(2) formats the final price to two decimal places, and it must come last because it converts the 
// number to a string, which would prevent further arithmetic operations if done earlier.

// TODO: Part five.
// Using the random recipe from this lesson, log a random whole number from 1 to 6. Then adapt
// the recipe to produce a number from 10 to 20, and explain your adaptation in a comment.
const randomNumber1to6 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1to6);

const randomNumber10to20 = Math.floor(Math.random() * 11) + 10;
console.log(randomNumber10to20);
// The adaptation multiplies the random number by 11 (the range of numbers from 10 to 20, inclusive) and adds 
// 10 to shift the range up to start at 10 instead of 1.

// TODO: Part six.
// Open the MDN String reference, choose one method this lesson did not cover, and use it
// correctly on a string of your choice. In a comment, cite the method's name and describe what
// it does in one sentence of your own words.
let exampleString = "Hello, world!";
console.log(exampleString.at(7));
// The method used is `at()`, which returns the character at the specified index in a string, allowing
// for both positive and negative indexing.


// TODO: Part seven.
// Two classic exercises close the lesson. First, build a username generator: from a first name
// and a last name held in variables, produce a lowercase username in the pattern of first
// initial followed by full last name, such as mmustermann. Second, write a mad-libs story:
// declare four variables, an adjective, a noun, a verb, and a place, and log one short,
// ridiculous story built from a single template literal that uses all four.
let firstName = "Max";
let lastName = "Mustermann";
let username = (firstName[0] + lastName).toLowerCase();
console.log(username);

let adjective = "silly";
let noun = "cat";
let verb = "jumped";
let place = "moon";
console.log(`Once upon a time, a ${adjective} ${noun} ${verb} over the ${place}.`);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
