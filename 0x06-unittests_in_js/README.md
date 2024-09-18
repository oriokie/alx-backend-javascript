# 0x06. Unittests in JS

## Description

This project focuses on implementing unit tests in JavaScript using various testing frameworks and libraries. The main objectives are to learn how to use Mocha for writing test suites, utilize different assertion libraries, present long test suites, and understand the concepts of spies, stubs, and hooks in testing.

## Learning Objectives

By the end of this project, you should be able to:

- Use Mocha to write a test suite
- Use different assertion libraries (Node or Chai)
- Present long test suites
- Understand when and how to use spies
- Understand when and how to use stubs
- Work with hooks and know when to use them
- Perform unit testing with Async functions
- Write integration tests with a small Node server

## Requirements

- All code will be executed on Ubuntu 18.04 using Node 12.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A README.md file at the root of the project folder is mandatory
- Code should use the .js extension
- When running every test with `npm run test *.test.js`, everything should pass correctly without any warning or error

## Setup

1. Install Mocha using npm:

   ```
   npm install --save-dev mocha
   ```

2. Set up a script in your package.json to run Mocha:

   ```json
   "scripts": {
     "test": "mocha"
   }
   ```

3. Install other necessary dependencies:
   ```
   npm install --save-dev chai sinon
   ```

## Project Structure

- 0-calcul.js / 0-calcul.test.js: Basic test with Mocha and Node assertion library
- 1-calcul.js / 1-calcul.test.js: Combining descriptions
- 2-calcul_chai.js / 2-calcul_chai.test.js: Basic test using Chai assertion library
- 3-payment.js / 3-payment.test.js: Spies
- 4-payment.js / 4-payment.test.js: Stubs
- 5-payment.js / 5-payment.test.js: Hooks
- 6-payment_token.js / 6-payment_token.test.js: Async tests with done
- 7-skip.test.js: Skipping tests
- 8-api/: Basic Integration testing
- 9-api/: Regex integration testing
- 10-api/: Deep equality & Post integration testing

## Running Tests

To run the tests for each task, use the following command:

```
npm test <test-file>
```

For example:

```
npm test 0-calcul.test.js
```

## Author

Edwin Orioki Kenyansa

## Acknowledgements

This project is part of the curriculum of ALX Backend JavaScript.
