'use strict';

// Lesson 07 exercise: Objects
// In your exercise repository, create a branch named `lesson-07-exercise` and switch to it,
// then open `lesson-07.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Model a single menu item as an object with at least four properties of mixed types,
// including one boolean. Log two properties with dot notation, then log one property through
// bracket notation with the key held in a variable, and note in a comment why the brackets
// were required in that case.
const menuItem = {
  name: "Margherita Pizza",
  price: 8.5,
  isVegetarian: true,
  ingredients: ["tomato sauce", "mozzarella", "basil"]
};

console.log(menuItem.name); // Dot notation
console.log(menuItem.price); // Dot notation

const propertyKey = "isVegetarian";
console.log(menuItem[propertyKey]); // Bracket notation required because the key is stored in a variable


// TODO: Part two.
// Give the item a `describe` method that returns one sentence built from the object's own
// properties through `this`, and log the result of calling it.
menuItem.describe = function() {
  return `This is a ${this.name}, which costs €${this.price.toFixed(2)}.`;
};

console.log(menuItem.describe());


// TODO: Part three.
// Build an array of at least five menu item objects, and walk it with `for...of`, logging one
// formatted line per item.
let menu = [
  { name: "Margherita Pizza", price: 8.5, isVegetarian: true, ingredients: ["tomato sauce", "mozzarella", "basil"] },
  { name: "Pepperoni Pizza", price: 9.5, isVegetarian: false, ingredients: ["tomato sauce", "mozzarella", "pepperoni"] },
  { name: "Caesar Salad", price: 7.0, isVegetarian: true, ingredients: ["romaine lettuce", "parmesan cheese", "croutons"] },
  { name: "Spaghetti Bolognese", price: 10.0, isVegetarian: false, ingredients: ["spaghetti", "beef sauce"] },
  { name: "Mushroom Risotto", price: 11.0, isVegetarian: true, ingredients: ["arborio rice", "mushrooms", "parmesan cheese"] }
];

for (const item of menu) {
  console.log(`${item.name} - €${item.price.toFixed(2)} - Vegetarian: ${item.isVegetarian} - Ingredients: ${item.ingredients.join(", ")}`);
}


// TODO: Part four.
// Put the callback methods to work on the data: log the names of all vegetarian items by
// combining `filter` and `map`, and fetch the first item cheaper than three euros with `find`.
// Add a comment stating what `find` returns when nothing matches.
const vegetarianItems = menu.filter(item => item.isVegetarian).map(item => item.name);
console.log(vegetarianItems);

const cheapItem = menu.find(item => item.price < 3);
console.log(cheapItem); // If nothing matches, `find` returns undefined.


// TODO: Part five.
// Take one menu item and log its keys, its values, and finally every pair through a `for...of`
// loop over its entries with a destructured pair, formatted as the key, a colon in the output
// text, and the value.
console.log(Object.keys(menu[0]));
console.log(Object.values(menu[0]));

for (const [key, value] of Object.entries(menu[0])) {
  console.log(`${key}: ${value}`);
}   


// TODO: Part six.
// Assign one item to a second variable, change the price through the second name, and log the
// first to demonstrate the shared reference. Then build a spread copy that overrides only the
// price, and log both objects to prove they now differ in exactly that property.
let firstItem = menu[0];
let secondItem = firstItem;
secondItem.price = 9.0;
console.log(firstItem); // Shows the updated price due to shared reference

let spreadCopy = { ...firstItem, price: 10.0 };
console.log(firstItem); // Original item remains unchanged
console.log(spreadCopy); // New item with updated price 


// TODO: Part seven.
// As a stretch, build the classic word frequency counter: split the provided sentence into
// words and walk them with a loop, using each word as a bracket-notation key on a counter
// object and adding one per sighting. Log the finished counter, and if the sort extension
// caught your interest, log its entries ordered so that the most frequent word comes first.

// * The provided sentence for the word frequency counter:
const sentence = "the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams";

const words = sentence.split(" ");
const wordFrequency = {};

for (const word of words) {
  wordFrequency[word] = (wordFrequency[word] || 0) + 1;
}

console.log(wordFrequency);


// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
