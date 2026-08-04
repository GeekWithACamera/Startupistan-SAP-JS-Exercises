"use strict";

// Lesson 08 exercise: Classes
// In your exercise repository, create a branch named `lesson-08-exercise` and switch to it,
// then open `lesson-08.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Write an `Artist` class with a constructor that receives a name, a genre, and a total
// runtime, and a `describe` method that returns one sentence built from the instance's own
// properties through `this`. Create two instances with `new` and log both descriptions.

// * The `Artist` class
class Artist {
  constructor(name, genre, total) {
    this.name = name;
    this.genre = genre;
    this.total = total;
  }

  describe() {
    return `${this.name} is a ${this.genre} artist with a total runtime of ${this.total}.`;
  }
}

// * Two instances:
const pinkfong = new Artist("Pinkfong", "Children's music", "11:31");
const asake = new Artist("Asake", "Afrobeats", "14:08");

// * Log both descriptions:
console.log(pinkfong.describe());
console.log(asake.describe());

// TODO: Part two.
// The file provides the artists as an array of plain objects. Loop over it with `for...of`,
// create an `Artist` instance from each object with `new`, collect the instances into a new
// array with `push`, and log every description with a second loop or `forEach`.

// * The artists as plain objects, provided:
const artistData = [
  { name: "Pinkfong", genre: "Children's music", total: "11:31" },
  { name: "Adriano Celentano", genre: "Italian pop", total: "20:52" },
  { name: "Asake", genre: "Afrobeats", total: "14:08" },
  { name: "Miyagi and Andy Panda", genre: "Hip-hop", total: "16:21" },
  { name: "Johnny Cash", genre: "Country", total: "15:40" },
];

const artists = [];
for (const data of artistData) {
  artists.push(new Artist(data.name, data.genre, data.total));
}
artists.forEach((artist) => console.log(artist.describe()));

// TODO: Part three.
// The file contains three short snippets: a class call that is missing `new`, an arrow
// function used as a method that reads `this`, and a correct call. Predict the outcome of each
// in a comment before running, then verify one snippet at a time and correct your misses,
// leaving both prediction and result visible.

// * Three snippets. Predict each outcome in a comment, then verify one at a time.
// ! Snippet one, a class call missing new. Uncomment after part one, predict first:
const broken = Artist("Pinkfong", "Children's music", "11:31");
// Prediction: TypeError: Class constructor Artist cannot be invoked without 'new'

// ! Snippet two, an arrow function used as a method that reads this:
const single = {
  title: "Hurt",
  artist: "Johnny Cash",
  describe: () => `${this.title} by ${this.artist}`,
};
console.log(single.describe());
// Prediction: "undefined by undefined" because arrow functions do not have their own `this` and will refer to the enclosing scope, which does not have `title` or `artist` properties.

// * Snippet three, the correct call. Uncomment after part one:
console.log(new Artist("Asake", "Afrobeats", "14:08").describe());
// Prediction: "Asake is a Afrobeats artist with a total runtime of 14:08."

// TODO: Part four.
// Write a `FeaturedArtist` class that extends `Artist`, adds a blurb property through a
// constructor that calls `super` first, and overrides `describe` so that it builds on the
// superclass version through `super.describe()`. Promote one artist and log the result.

// * The `FeaturedArtist` class
class FeaturedArtist extends Artist {
  constructor(name, genre, total, blurb) {
    super(name, genre, total);
    this.blurb = blurb;
  }

  describe() {
    return `${super.describe()} - ${this.blurb}`;
  }
}

// TODO: Part five.
// The file ends with a constructor function and two prototype method assignments, working code
// in the pre-2015 style. Do not rewrite it. Above each line, add a comment naming its
// equivalent in class syntax, then confirm by running that its behavior matches your `Artist`
// class.

// * Working pre-2015 code, provided. Do not rewrite it, annotate it:

// * Equivalent to the `Artist` class constructor
function ArtistOld(name, genre) {
  this.name = name;
  this.genre = genre;
}

// * Equivalent in class syntax is the `describe` method
ArtistOld.prototype.describe = function () {
  return `${this.name}, ${this.genre}`;
};

// * Equivalent in class syntax is the `tag` method
ArtistOld.prototype.tag = function () {
  return `#${this.genre.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}`;
};

// TODO: Part six.
// As a stretch, add a static method `Artist.named` that receives an array of instances and a
// name and returns the matching instance using `find`, and log the description of the instance
// it returns. The `get` keyword from the extension is your alternative if getters caught your
// interest.

// * static method `named` on the `Artist` class
class ArtistWithStatic extends Artist {
  static named(artists, name) {
    return artists.find((artist) => artist.name === name);
  }
}

// Example usage:
const foundArtist = ArtistWithStatic.named(artists, "Asake");
if (foundArtist) {
  console.log(foundArtist.describe());
} else {
  console.log("Artist not found.");
}

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
