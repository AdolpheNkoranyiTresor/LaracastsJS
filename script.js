//Global scope (global variables can be accessible anywhere)
// let message = 'hello!';
// var greeting = "hey!";

// console.log(message);
// console.log(greeting);

// if (true) {
//   console.log(message);
//   console.log(greeting);
// }

//Function scope (function variables can only be accessible within th function)

// function sayHello() {
//   let message = "hello!";
//   var greeting = "hey!";

//   console.log(message);
//   console.log(greeting);

//   function nested() {
//     console.log(message);
//     console.log(greeting);
//   }

//   nested();
// }

// sayHello();

//Block scope

// if (true) {
//   let message = "hello!";
//   var greeting = "hey!";

//   console.log(message);
//   console.log(greeting);
// }

//   console.log(greeting);

(function () {
  const alert = 'error';
  console.log(alert);
})();

alert('hi');
