"use strict";

// Lesson 01 exercise: Running JavaScript three ways
// Clone the exercise repository for this course, https://github.com/Leon-Arno/JS-Exercises, to
// your computer.
// Make the copy your own. Inside the cloned folder, delete the `.git` folder to remove the
// connection to the original repository: run `rm -rf .git` on macOS and Linux, or `Remove-Item
// -Recurse -Force .git` in PowerShell on Windows.
// Run `git init` in the folder, create a new empty repository named `javascript-exercises` on
// your own GitHub account, connect it as the remote, and push. This is the same publishing
// flow you performed in the Git course.
// Create a branch named `lesson-01-exercise` and switch to it, then open `lesson-01.js`. The
// questions are already inside as comments; work through them in order, writing your answers
// directly beneath each one.

// TODO: Part one.
// Start the Node REPL and evaluate at least four arithmetic expressions of your own, using
// more than one operator across them. Copy the complete session transcript and paste it into
// `lesson-01.js` as a comment block where the question asks for it.

// PS D:\Documents\Startupistan-SAP-JS-Exercises> node
// Welcome to Node.js v22.14.0.
// Type ".help" for more information.
// > 4 + 5 * 2;
// 14
// > (4 + 5) * 2;
// 18
// > 4 - 5 + 2;
// 1
// > 4 / 5 * 2;
// 1.6

// TODO: Part two.
// Write a `console.log` line in `lesson-01.js` that prints a greeting, save the file
// deliberately, and run it with `node lesson-01.js`.
console.log("Hello, welcome to the JavaScript exercises!");

// TODO: Part three.
// Change the greeting text, run the file again without saving, and observe that the output has
// not changed. Save and run once more, then describe in a one-sentence comment what happened
// and why.

// *greeting text was changed in the code, but the output did not change until the file was saved and run again, because Node.js executes the saved version of the file, not the unsaved changes in the editor.

// TODO: Part four.
// Run your greeting line in the Chrome DevTools Console. In a comment, record one way the
// experience matched Node and one way it differed.

// *The experience matched Node in that both environments executed the JavaScript code and printed the greeting to the console, but it differed in that the Chrome DevTools Console is part of a web browser and can interact with web page elements, while Node.js is a standalone runtime for executing JavaScript outside of a browser context.

// TODO: Part five.
// From a folder that does not contain the file, deliberately run `node lesson-01.js` so that
// the terminal reports it cannot find the file. Paste that error transcript as a comment, then
// explain in one sentence how you resolved it.

// !Error transcript:
// PS D:\Documents> node .\lesson-01.js
// node:internal/modules/cjs/loader:1228
//   throw err;
//   ^
// Error: Cannot find module 'D:\Documents\lesson-01.js'
//     at Function._resolveFilename (node:internal/modules/cjs/loader:1225:15)
//     at Function._load (node:internal/modules/cjs/loader:1055:27)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
//     at node:internal/main/run_main_module:36:49 {
//   code: 'MODULE_NOT_FOUND',
//   requireStack: []
// }

// Node.js v22.14.0

// *I resolved the issue by navigating to the correct directory where `lesson-01.js` is located before running the command, ensuring that Node.js could find and execute the file successfully.

// TODO: Save the file, commit your work with a clear message, push the branch, and open a pull
// request into your main branch.
// TODO: Submit the link to the pull request for review.
