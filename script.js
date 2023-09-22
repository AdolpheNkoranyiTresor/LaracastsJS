//Function Expression
const hello = function (firstName) {
  return `hello ${firstName}`;
};

//Arrow functions
// const hello = (firstName) =>{
//     return `hello ${firstName}`;
// }

// const hello = firstName => `hello ${firstName}`; //This is an implicit return

console.log(hello('Adolphe'));


const person = {
    firstName: 'Adolphe',
    lastName: 'Tresor',
    age: 29,
    howOldAmI: function () {
        console.log(`I am ${this.age} years old`);
    }
};

person.howOldAmI();


// Callback function
const button = document.querySelector('button');

const greetings = function () {
    console.log("Hello there!!!");
}

button.addEventListener('click', greetings);