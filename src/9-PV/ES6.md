# Arrow Functions
Arrow functions allows a short syntax for writing function expressions.
You don't need the function keyword, the return keyword, and the curly brackets.
Arrow functions do not have their own this. They are not well suited for defining object methods.
Arrow functions are not hoisted. They must be defined before they are used.
Using const is safer than using var, because a function expression is always a constant value.

// ES5
var x = function (x, y) {
  return x * y;
};

// ES6
const x = (x, y) => x * y;

// or
const x = (x, y) => {
  return x * y;
};

# JavaScript Promises
A Promise is a JavaScript object that links "Producing Code" and "Consuming Code".
"Producing Code" can take some time and "Consuming Code" must wait for the result.
const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('I love You !!');
  }, 3000);
});

myPromise.then(function (value) {
  document.getElementById('demo').innerHTML = value;
});
# JavaScript Promise.finally
ECMAScript 2018 finalizes the full implementation of the Promise object with Promise.finally:

let myPromise = new Promise();

myPromise.then();
myPromise.catch();
myPromise.finally();