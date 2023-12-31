# Named vs Anonymous Callback

In this challenge, you will encounter the following tasks:

- passing a named callback function into a higher order function
- writing an anonymous arrow function inside the higher order function call

## Tasks

You should write a callback function in two different ways.
In both cases your callback function should log the following text to the console:
"Welcome! You are logged in now."

1. Write a function with the "function" keyword named "showWelcomeMessage" which logs the desired text. Then call the higher order function "handleUserLogin" and pass your callback function "showWelcomeMessage" as the first argument.
2. Call "handleUserLogin" again but this time write an anonymous function **inside** the function call (i.e. between the round brackets). You can write an anonymous function either:

   - as an arrow function: ` () => {...}`
   - as a regular function: ` function() {...}`

3. Implement the logic from the previous from "showWelcomeMessage" inside this anonymous function.

Please switch to the `./js/index.js` file to start the challenge.

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run start` to start a development server and open [localhost:3000](http://localhost:3000) in a browser.

> Alternatively you can use the Live Preview Extension for Visual Studio Code to view this project.  
> Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.

Use `npm run test` to run the tests.

### Scripts

You can use the following commands:

- `npm run start` to start a development server
- `npm run test` to run the tests
- `npm run lint` to run the linter
