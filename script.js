const age = 12;
const drinkingAge = 18;

if (age >= drinkingAge) {
  console.log("I can drink beer!!");
} else {
  console.log("I cannot drink beer at my age!!");
}

const passwordTypedIn = "putyoursavedpassword123";
const actualPassword = "password123";

if (passwordTypedIn === actualPassword) {
    console.log('Correct password, login in progress...');
} else {
    console.log("Incorrect password, please try again later");
}


const month = 'October';
const day = 31;

if (month === 'October' && day === 31) {
  console.log(`It's Halloween!`);
} else {
  console.log("It's not Halloween");
}

//If, else if statment

// > 80 = A
// 70 - 80 = B
// 60 - 70 = C
// 50 - 60 = D
// < 50 = F


const grade = 82;

if (grade >= 80) {
  console.log("Latter grade: A");
} else if (grade >= 70) {
  console.log("Latter grade: B");
} else if (grade >= 60) {
  console.log("Latter grade: C");
} else if (grade >= 50) {
  console.log("Latter grade: D");
} else {
  console.log("Latter grade: F");
}


// Ternary

// if (age >= drinkingAge) {
//   console.log("I can drink beer!!");
// } else {
//   console.log("I cannot drink beer at my age!!");
// }
// This is a Ternary, a short form of if else statment
age >= drinkingAge
  ? console.log("I can drink beer!!")
  : console.log("I cannot drink beer at my age!!");

// let canIDrinkBeer;

// if (age >= drinkingAge) {
//     canIDrinkBeer = "I can drink beer!!";
// } else {
//     canIDrinkBeer = "I cannot drink beer at my age!!";
// }

// let = canIDrinkBeer = age >= drinkingAge ? 'I can drink Beer' : 'I cannot take beer yet.';

// console.log(canIDrinkBeer);

console.log(
    age >= drinkingAge
    ? "I can drink Beer"
    : "I cannot take beer yet."
);