"use strict";

// Lesson 07 exercise: Objects
// In your exercise repository, create a branch named `lesson-07-exercise` and switch to it,
// then open `lesson-07.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Model a single menu item as an object with at least four properties of mixed types,
// including one boolean. Log two properties with dot notation, then log one property through
// bracket notation with the key held in a variable, and note in a comment why the brackets
// were required in that case.

// * The provided item
const menuItem = {
  name: "Margherita Pizza",
  price: 12.5,
  vegetarian: true,
  available: false,
};

console.log(menuItem.name); // Dot notation
console.log(menuItem.price); // Dot notation

const propertyKey = "vegetarian";
console.log(menuItem[propertyKey]); // Bracket notation is required here because the key is stored in a variable, not a literal string.

// TODO: Part two.
// Give the item a `describe` method that returns one sentence built from the object's own
// properties through `this`, and log the result of calling it.

// * Adding the describe method to the menuItem object
menuItem.describe = function () {
  return `The ${this.name} costs €${this.price} and is ${this.vegetarian ? "vegetarian" : "not vegetarian"}.`;
};

console.log(menuItem.describe()); // Calling the describe method and logging the result.

// TODO: Part three.
// Build an array of at least five menu item objects, and walk it with `for...of`, logging one
// formatted line per item.

// * The provided menu items
const menuItems = [
  {
    name: "Margherita Pizza",
    price: 12.5,
    vegetarian: true,
    available: false,
  },
  {
    name: "Pepperoni Pizza",
    price: 14.5,
    vegetarian: false,
    available: true,
  },
  {
    name: "Caesar Salad",
    price: 8.5,
    vegetarian: true,
    available: true,
  },
  {
    name: "Grilled Chicken Sandwich",
    price: 10.5,
    vegetarian: false,
    available: true,
  },
  {
    name: "Vegan Burger",
    price: 13.5,
    vegetarian: true,
    available: false,
  },
];

for (const item of menuItems) {
  console.log(
    `Item: ${item.name}, Price: €${item.price}, Vegetarian: ${item.vegetarian}, Available: ${item.available}`,
  );
}

// TODO: Part four.
// Put the callback methods to work on the data: log the names of all vegetarian items by
// combining `filter` and `map`, and fetch the first item cheaper than three euros with `find`.
// Add a comment stating what `find` returns when nothing matches.

// * Filtering vegetarian items and mapping their names
const vegetarianNames = menuItems
  .filter((item) => item.vegetarian)
  .map((item) => item.name);
console.log("Vegetarian items:", vegetarianNames);

// * Finding the first item cheaper than three euros
const cheapItem = menuItems.find((item) => item.price < 3);
console.log("First item cheaper than €3:", cheapItem);

// Note: If no items match the condition in `find`, it returns `undefined`.

// TODO: Part five.
// Take one menu item and log its keys, its values, and finally every pair through a `for...of`
// loop over its entries with a destructured pair, formatted as the key, a colon in the output
// text, and the value.

// * Logging keys, values, and entries of the first menu item
const firstItem = menuItems[0];

console.log("Keys:", Object.keys(firstItem));
console.log("Values:", Object.values(firstItem));

for (const [key, value] of Object.entries(firstItem)) {
  console.log(`${key}: ${value}`);
}

// TODO: Part six.
// Assign one item to a second variable, change the price through the second name, and log the
// first to demonstrate the shared reference. Then build a spread copy that overrides only the
// price, and log both objects to prove they now differ in exactly that property.

// * Assigning and changing the price of the first item
const secondItem = menuItems[0];
secondItem.price = 15.0;
console.log("First item after price change:", menuItems[0]);

// * Building a spread copy
const copiedItem = { ...menuItems[0], price: 18.0 };
console.log("Original item:", menuItems[0]);
console.log("Copied item with new price:", copiedItem);

// TODO: Part seven.
// As a stretch, build the classic word frequency counter: split the provided sentence into
// words and walk them with a loop, using each word as a bracket-notation key on a counter
// object and adding one per sighting. Log the finished counter, and if the sort extension
// caught your interest, log its entries ordered so that the most frequent word comes first.

// * The provided sentence for the word frequency counter:
const sentence =
  "the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams";

// * Building the word frequency counter
const counter = {};
const words = sentence.split(" ");

for (const word of words) {
  counter[word] = (counter[word] || 0) + 1;
}

console.log("Word frequency counter:", counter);

// * Sorting the entries by frequency
const sortedEntries = Object.entries(counter).sort((a, b) => b[1] - a[1]);
console.log("Sorted word frequencies:", sortedEntries);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
