// function expression

const fuc1 = function () {
  console.log("hello this is function expression");
};

// fuc1();

// function scope

var name = "rahul";
var age = 24;

function displayInfo() {
  var name = "rohan";
  var age = 22;
  console.log(`info : name - ${name} and age is ${age} `);
}

// displayInfo();

// function scope first find own lexical scope if data is not there so it goto find outside of function

// example of function scope and lexical scope

function outer() {
  let name = "rahul";

  function inner() {
    let sName = "sharma";
    console.log(name + " " + sName);
  }

  console.log(">>", name + " " + sName); // here its no able to find sname bcs

  //   The key points to understand about lexical scope are:

  // The scope of a variable is determined by the location of its declaration in the source code, not where it is called or executed.

  // Inner functions can access variables declared in their containing (outer) functions, but the outer functions cannot access variables declared in their inner functions.

  // Lexical scope plays a crucial role in JavaScript's scoping mechanism and helps in managing variable visibility and preventing naming conflicts within nested functions. It allows for predictable and consistent variable resolution at compile time, leading to more maintainable and organized code.

  // inner();
}

// outer();

// params and argument

// const fun2 = function (...num) {
//   console.log("fun>", num);
// };

// let arr2 = [5, 6];
// fun2(...arr2);

// Example of a function that takes a callback function as an argument
function doSomethingAsync(data, callback) {
  // Simulating an asynchronous operation with a setTimeout
  setTimeout(() => {
    // Some async operation completes after a delay
    // console.log("Async operation completed.");
    callback(data); // Calling the callback function with the result
  }, 2000); // Simulating a 2-second delay
}

// Callback function to be executed after the asynchronous operation is completed
function handleResult(result) {
  // console.log("Handling the result:", result);
}

// Using the doSomethingAsync function with the handleResult callback
doSomethingAsync("Hello, callback!", handleResult);

//arrow function and normal function

// syntax  // impliset retun

function ar3r() {
  return "helo";
}

const ar2r = () => "hello";

//argument imp!!

function goon() {
  console.log(arguments);
}

// goon(1, 2, 3);

//but not possible with arrow fun

// const arro = () => {
//   console.log(arguments);
// };
// arro(1, 2);

//this keyword imp!!

// let user = {
//   name: "rahul",
//   rc1: () => {
//     console.log(this.name);
//   },
//   rc2() {
//     console.log(this.name);
//   },
// };

// user.rc1();
// user.rc2();

//closures function in javaScript

// closures example

const createCount = () => {
  const count = 0;

  const increment = () => {
    count++;
  };

  const decrement = () => {
    count--;
  };

  const getCount = () => {
    return count;
  };

  return {
    increment,
    decrement,
    getCount,
  };
};

const counter = createCount();

counter.getCount();
