// for (let i = 0; i < 10; i++) {
//   console.log(`i is ${i}`); //Prints out 0 to 9
// }

// const people = ["Adolphe", "Six", "Bobby"];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]); //Prints out Adolphe, Six and Bobby
// }

//Break and Continue
// for (let i = 0; i < 10; i++) {
//   if (i === 4) {
//     // break; // prints out 0 to 3
//     continue; //prints out 0 to 9 but skips i === 4
//   }
//   console.log(`i is ${i}`);
// }

//While loops

// let j = 0;
// while (j < 10) {
//   console.log(`j is ${j}`);
//   j += 2;
// }

//DO while loop

// let k = 0;
// do {
//   console.log(`k is ${k}`);
//   k++;
// } while (k < 10);

//For in loop

const person = {
  firsName: 'Adolphe',
  lastName: 'Nkoranyi',
  job: 'Web Master',
};

for (const x in person) {
  // console.log(x); //prints firstName, lastName and job
  console.log(person[x]); //results the actual values: Adolphe, Nkoranyi and Web Master
}

// for of loops

const people = ["Adolphe", "Six", "Bobby"];

// for (const y of people) {
//   console.log(y);
// }

//foreach

// people.forEach((person) => {
//     console.log(person);
// });

//map

const peoppleMap = people.map((person, index) => {
  return `${index}:${person}`;
});

console.log(peoppleMap);