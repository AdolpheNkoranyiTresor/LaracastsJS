const people = ["Jerry", "Six", "Bonface", "Adolphe"];
const numbers = [2, 4, 6, 7, 3, 5, 23];
const mixed = ['A string', 55, true, { a: 4 }, null, undefined, [2, 45, 5, 8]];

// console.log(people);
// console.log(people[3]);
// console.log(people.length);
// people.push('Ann'); //Use "push" to add an item in the end of the array
// console.log(people);
// // people.pop("Ann"); //Use "pop" to remove an item in the end of the array
// //Or
// const ann = people.pop();

// console.log(people);
// console.log(ann);


numbers[2] = 66; //Replace a certain item in the array using the index
console.log(numbers)

people.unshift('Nico'); //Use "unshift" to add an item in the front of the array
console.log(people);

people.shift("Nico"); //Use "shift" to add an item in the front of the array
console.log(people);


console.log(people.includes('Ninja')); //Check if something exist in the array
console.log(people.indexOf('Adolphe')); //Find the item in the array
console.log(people.reverse('')); //Reverse the array

const joinedArray = people.concat(mixed);
console.log(joinedArray);