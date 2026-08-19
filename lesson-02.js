"use strict";

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.

// const bakeryName = "Maison Sarah"; // The name of the bakery is a constant value that will not change.
// let breadCount = 12; // The number of breads can change as they are sold or baked.
// const openingHour = 7; // The opening hour is a constant value that will not change.
// let customerCount = 0; // The number of customers can change throughout the day.
// const closedOnSunday = true; // The closure status is a constant value that will not change.

// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.

// console.log(typeof bakeryName); // string
// console.log(typeof breadCount); // number
// console.log(typeof openingHour); // number
// console.log(typeof customerCount); // number
// console.log(typeof closedOnSunday); // boolean
// console.log(typeof null); // object (this is a famous historical bug in JavaScript)
// console.log(typeof undefined); // undefined

// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.

// let uninitializedVariable; // This variable is declared but not assigned a value, so it is `undefined`.
// let nullVariable = null; // This variable is explicitly assigned the value `null`, representing the intentional absence of any object value.
// console.log(uninitializedVariable); // undefined
// console.log(typeof uninitializedVariable); // undefined
// console.log(nullVariable); // null
// console.log(typeof nullVariable); // object
// The difference is that `undefined` means a variable has been declared but not assigned a value, while `null` is an assignment value that represents no value or no object.

// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";

// * My own number to convert to a string:
const myNumber = 42;

// * Conversion and logging:
const priceNumber = Number(priceText);
console.log(priceNumber, typeof priceNumber); // 4.5 'number'

const countNumber = Number(countText);
console.log(countNumber, typeof countNumber); // 12 'number'

const flagBoolean = Boolean(flagText);
console.log(flagBoolean, typeof flagBoolean); // true 'boolean'

const myString = String(myNumber);
console.log(myString, typeof myString); // '42' 'string'

// The conversion of `priceText` and `countText` would produce `NaN` if the strings were not clean numbers (e.g., if they contained letters or symbols).

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

// *Repairs:
// *1. The first error is due to reassigning a `const` variable. I changed `const bakeryName` to `let bakeryName` to allow reassignment.
// *2. The second error is due to assigning a value to an undeclared variable `openingHour`. I declared it with `let openingHour = 7;`.
// *3. The third error is due to trying to log `loafCount` before it was declared. I moved the declaration of `loafCount` above the console.log statement.

// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.

// *Swap variables a and b using a temporary variable:*
let a = 5;
let b = 10;
let temp = a; // Store the value of a in a temporary variable
a = b; // Assign the value of b to a
b = temp; // Assign the value of temp (original a) to b

console.log(a); // 10
console.log(b); // 5

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
