"use strict";

// Lesson 03 exercise: Strings and numbers
// In your exercise repository, create a branch named `lesson-03-exercise` and switch to it,
// then open `lesson-03.js`, where the questions wait as comments. Work beneath each question
// in order.

// TODO: Part one.
// Declare variables for a shop name, an opening hour, and a closing hour, then log one
// welcoming sentence built as a single template literal that uses all three.

const shopName = "Maison Sarah Bakery";
let openingHour = 7;
let closingHour = 20;
let welcomeMessage = `Hello! Welcome to ${shopName}. We are open from ${openingHour} in the morning till ${closingHour} in the evening`;
console.log(welcomeMessage);

// TODO: Part two.
// The file provides a messy string with surplus spaces at both ends, the wrong case, and one
// word that needs replacing. Apply the methods from this lesson, chained or in sequence, to
// log the cleaned version, and add a comment naming each method you used and the job it
// performed.

// * The provided messy string:
const messy = "   Maison   Sarah, fresh bread daily   ";

// Clean the string by trimming whitespace, converting to lowercase, and replacing "maison" with "bakery"
const cleaned = messy.trim().toLowerCase().replace("maison", "bakery");
console.log(cleaned); // Output: "bakery sarah, fresh bread daily"

// TODO: Part three.
// Using the provided product string, log its length, the position at which a given word
// begins, and a slice containing exactly that word. Then split the provided comma-separated
// list and log the resulting pieces.

// * The provided product string and comma-separated list:
const product = "Sourdough Loaf, whole grain";
const flavorList = "rye,spelt,wheat,olive";

console.log(product.length); // Output: 22
console.log(product.indexOf("whole")); // Output: 14
console.log(product.slice(14, 19)); // Output: "whole"
console.log(flavorList.split(",")); // Output: ["rye", "spelt", "wheat", "olive"]

// TODO: Part four.
// From the net price and tax rate in the file, calculate the final price and log it inside a
// template literal, formatted to two decimal places. Add a comment explaining why the
// formatting step must come last.

// * The provided net price and tax rate:
const netPrice = 4.0;
const taxRate = 0.07;

const finalPrice = netPrice * (1 + taxRate);
console.log(`The final price is $${finalPrice.toFixed(2)}`); // Output: "The final price is $4.28"
// The formatting step must come last because toFixed() converts the number to a string, and we want to perform all calculations before converting to a string for display.

// TODO: Part five.
// Using the random recipe from this lesson, log a random whole number from 1 to 6. Then adapt
// the recipe to produce a number from 10 to 20, and explain your adaptation in a comment.

// Generate a random whole number from 1 to 6
const randomNumber1to6 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1to6); // Output: a random number between 1 and 6

// Adaptation to produce a number from 10 to 20
const randomNumber10to20 = Math.floor(Math.random() * 11) + 10;
console.log(randomNumber10to20); // Output: a random number between 10 and 20
// Explanation: I multiplied Math.random() by 11 to get a range of 0 to 10, then added 10 to shift the range to 10 to 20.

// TODO: Part six.
// Open the MDN String reference, choose one method this lesson did not cover, and use it
// correctly on a string of your choice. In a comment, cite the method's name and describe what
// it does in one sentence of your own words.

// Method: String.prototype.includes()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
// The includes() method determines whether one string may be found within another string, returning true or false as appropriate.

const sampleString = "The quick brown fox jumps over the lazy dog.";
const containsFox = sampleString.includes("fox");
console.log(containsFox); // Output: true

// TODO: Part seven.
// Two classic exercises close the lesson. First, build a username generator: from a first name
// and a last name held in variables, produce a lowercase username in the pattern of first
// initial followed by full last name, such as mmustermann. Second, write a mad-libs story:
// declare four variables, an adjective, a noun, a verb, and a place, and log one short,
// ridiculous story built from a single template literal that uses all four.

// Username generator
const firstName = "John";
const lastName = "Doe";
const username = `${firstName[0].toLowerCase()}${lastName.toLowerCase()}`;
console.log(username); // Output: "jdoe"

// Mad-libs story
const adjective = "silly";
const noun = "cat";
const verb = "danced";
const place = "park";

const madLibsStory = `Once upon a time, a ${adjective} ${noun} ${verb} in the ${place}.`;
console.log(madLibsStory); // Output: "Once upon a time, a silly cat danced in the park."

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
