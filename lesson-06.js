"use strict";

// Lesson 06 exercise: Arrays and loops
// In your exercise repository, create a branch named `lesson-06-exercise` and switch to it,
// then open `lesson-06.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Build an array of at least five menu item names. Log the whole array, the first item, the
// last item read through `length` minus 1, and the array's length.

const menu = ["Pizza", "Pasta", "Salad", "Soup", "Bread"];
console.log(menu);
console.log(menu[0]);
console.log(menu[menu.length - 1]);
console.log(menu.length);

// TODO: Part two.
// Grow and shrink the menu with one `push`, one `unshift`, one `pop`, and one `shift`, logging
// the array after each step, and note in a comment which end of the array each method touched.

menu.push("Ice Cream");
console.log(menu);
menu.unshift("Cake");
console.log(menu);
menu.pop();
console.log(menu);
menu.shift();
console.log(menu);

// TODO: Part three.
// Print every menu item twice, first with a counting `for` loop that uses the index, then with
// a `for...of` loop, and add a one-line comment on when you would choose each form.

for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}
for (const item of menu) {
  console.log(item);
}

// TODO: Part four.
// Using the provided prices array, build display strings with `map`, keep the items under five
// euros with `filter`, and fetch the first item over ten euros with `find`, logging each
// result. Add a comment stating what `forEach` would have returned in their place, and why
// that is the well-known trap.

// * The provided prices:
const prices = [4.5, 12, 3.2, 8];

// Map to display strings
const displayStrings = prices.map((price) => `Price: €${price}`);
console.log(displayStrings);

// Filter for items under five euros
const underFive = prices.filter((price) => price < 5);
console.log(underFive);

// Find the first item over ten euros
const overTen = prices.find((price) => price > 10);
console.log(overTen);

// Note: Using forEach would not return a new array, it would simply execute a function on each element without returning anything, which is why map, filter, and find are preferred for creating new arrays or values.

// TODO: Part five.
// Loop over the provided artists array and log a two-line card for each artist using template
// literals. Then add one artist of your own invention to the data and run the file again,
// noting in a comment what you did not have to change.

// * The provided artists:
const artists = [
  "Pinkfong",
  "Adriano Celentano",
  "Asake",
  "Miyagi and Andy Panda",
  "Johnny Cash",
];

// Loop over artists and log a two-line card
for (const artist of artists) {
  console.log(`Artist: ${artist}`);
  console.log(
    `Genre: ${artist.includes("Pinkfong") ? "Children's Music" : "Various"}`,
  );
}

// Adding a new artist
artists.push("New Artist");
console.log(artists);

// Note: I did not have to change the loop or the logging logic to accommodate the new artist, as the loop dynamically handles any number of artists in the array.

// TODO: Part six.
// Assign the menu to a second variable, push a new item through the second name, and log both
// variables to demonstrate the shared reference. Then create a spread copy, change the copy,
// and log both lengths to prove the original survived.

const menuCopy = menu; // Shared reference
menuCopy.push("Sushi");
console.log(menu); // Original menu is affected
console.log(menuCopy); // Copy reflects the change

const menuSpreadCopy = [...menu]; // Spread copy
menuSpreadCopy.push("Tacos");
console.log(menu.length); // Original menu length remains unchanged
console.log(menuSpreadCopy.length); // Spread copy length reflects the change

// TODO: Part seven.
// The counting classics. Implement FizzBuzz in full: loop from 1 to 100, printing Fizz for
// multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number itself otherwise,
// reusing your single-number logic from the conditionals exercise. Then, with loops over the
// provided numbers array, compute the sum and find the largest value without library helpers.

// * The provided numbers for the sum and the largest:
const numbers = [12, 5, 41, 8, 33, 2, 27];

// FizzBuzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Sum and largest value
let sum = 0;
let largest = numbers[0];

for (const num of numbers) {
  sum += num;
}

for (const num of numbers) {
  if (num > largest) {
    largest = num;
  }
}

console.log(sum);
console.log(largest);

// TODO: Part eight.
// The string classics that waited for loops. Reverse a string with a loop that walks it
// backwards by index. Count its vowels with a loop and `includes` against a vowels array. As a
// stretch, use your reverser to build a palindrome check, and test it on three words, ignoring
// case with `toLowerCase`.

// Reverse a string
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("hello"));

// Count vowels
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("hello"));

// Palindrome check
function isPalindrome(str) {
  const reversed = reverseString(str.toLowerCase());
  return str.toLowerCase() === reversed;
}

console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("Madam")); // true

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
