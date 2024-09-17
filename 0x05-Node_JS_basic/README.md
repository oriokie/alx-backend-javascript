# NodeJS Basics

This project covers the fundamentals of NodeJS, including running JavaScript, using NodeJS modules, reading files, accessing command line arguments and environment variables, and creating small HTTP servers using both Node's native HTTP module and Express.js.

## Learning Objectives

By the end of this project, you should be able to:

- Run JavaScript using NodeJS
- Use NodeJS modules
- Use specific Node JS modules to read files
- Use `process` to access command line arguments and the environment
- Create a small HTTP server using Node JS
- Create a small HTTP server using Express JS
- Create advanced routes with Express JS
- Use ES6 with Node JS with Babel-node
- Use Nodemon to develop faster

## Requirements

- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files will be interpreted/compiled on Ubuntu 18.04 LTS using node (version 12.x.x)
- All files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `.js` extension
- Your code will be tested using Jest and the command `npm run test`
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
- All of your functions/classes must be exported by using this format: `module.exports = myFunction;`

## Setup

1. Install NodeJS 12.x

```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

2. Install Jest, Babel, and ESLint

```
npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
npm install --save-dev eslint
```

## Tasks

0. Executing basic javascript with Node JS
1. Using Process stdin
2. Reading a file synchronously with Node JS
3. Reading a file asynchronously with Node JS
4. Create a small HTTP server using Node's HTTP module
5. Create a more complex HTTP server using Node's HTTP module
6. Create a small HTTP server using Express
7. Create a more complex HTTP server using Express
8. Organize a complex HTTP server using Express

## Running the tests

To run the tests for each task, use the following command:

```
npm run test <task-file>
```

For example, to run the tests for task 0:

```
npm run test 0-console.js
```

To run all tests:

```
npm run full-test
```

## Author

Kenyansa Edwin Orioki
