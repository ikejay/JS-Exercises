'use strict';

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
/*
> 10 + 3
13
> 70 % 8
6
> 15 / 3
5
> 4 * 2
8
> 90 + 23
113
> 89 - 10
79
> 10 - (-80)
90
*/

// TODO: Part two.
// Write a `console.log` line in `lesson-01.js` that prints a greeting, save the file
// deliberately, and run it with `node lesson-01.js`.
console.log('Hello, welcome to the JavaScript exercises again!')


// TODO: Part three.
// Change the greeting text, run the file again without saving, and observe that the output has
// not changed. Save and run once more, then describe in a one-sentence comment what happened
// and why.
// When the file is changed and run without saving, the output remains the same because the changes
// haven't been saved to disk. When saved and run again, the updated greeting is printed.

// TODO: Part four.
// Run your greeting line in the Chrome DevTools Console. In a comment, record one way the
// experience matched Node and one way it differed.
// One way the experience matched Node is that both environments can execute JavaScript code and display output.
// One way it differed is that the Chrome DevTools Console is part of a web browser and provides additional features 
// like inspecting elements and debugging, while Node is a standalone runtime for executing JavaScript outside of a browser.


// TODO: Part five.
// From a folder that does not contain the file, deliberately run `node lesson-01.js` so that
// the terminal reports it cannot find the file. Paste that error transcript as a comment, then
// explain in one sentence how you resolved it.
// node:internal/modules/cjs/loader:1051
//   throw err;
//   ^

// Error: Cannot find module '/Users/isaacannan/Development/Startupistan/lesson-01.js'
//     at Module._resolveFilename (node:internal/modules/cjs/loader:1048:15)
//     at Module._load (node:internal/modules/cjs/loader:901:27)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
//     at node:internal/main/run_main_module:23:47 {
//   code: 'MODULE_NOT_FOUND',
//   requireStack: []
// }
// I resolved the issue by navigating to the correct directory where `lesson-01.js` is located and running the command again.

// TODO: Save the file, commit your work with a clear message, push the branch, and open a pull
// request into your main branch.
// TODO: Submit the link to the pull request for review.
