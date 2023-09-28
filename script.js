function convertMinutesIntoSeconds(minutes) {
    return minutes * 60;
}

// console.log(convertMinutesIntoSeconds(2));
// console.log(convertMinutesIntoSeconds(3));

function ensureQuestion(str) {
    const lastChar = str.charAt(str.length - 1);

    // if (lastChar === '?') {
    //     return str;
    // }
    //     return `${str}?`;

//Ternary of the above statement code
    
    return lastChar === '?' ?  str : `${str}?`;

}

// console.log(ensureQuestion('Yes'));
// console.log(ensureQuestion('No'));
// console.log(ensureQuestion('Sure?'));

function maxOfNumbers(numbers) {
  let = maxNumber = numbers[0];

  // for (let i = 0; i < numbers.length; i++) {
  //     if (numbers[i] > maxNumber) {
  //         maxNumber = numbers[i];
  //     };

  // }

//Foreach loop of the above for loop code

//   numbers.forEach((number) => {
//     if (number > maxNumber) {
//       maxNumber = number;
//     }
//   });
//   return maxNumber;
    
//Math.max Method    
    // return Math.max(...numbers);
}
// console.log(maxOfNumbers([1,2,3])); //3
// console.log(maxOfNumbers([1,2,3,10,100])); //100


//hello there -> HeLlO ThErE; 
function sarcasticCase(str) {
    let newString = '';

    for (let i = 0; i < str.length; i++) {
      // if (i % 2 === 0) {
      //     newString = newString + str[i].toUpperCase();
      // } else {
      //     newString = newString + str[i].toLowerCase();
      // }

//ternary of the above if statement code

      newString =
        i % 2 === 0
          ? newString + str[i].toUpperCase()
          : newString + str[i].toLowerCase();
    }
    return newString;
}

console.log(sarcasticCase('Hello there')); //HeLlO ThErE
console.log(sarcasticCase('React is a JS Library')); //ReAcT Is a jS LiBrArY

function noSpace(str) {
    // let newString = '';

    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] !== ' ') {
    //         newString = newString + str[i];
    //     }
    // }

    // return newString;

//Split and join method of the above code
    
    return str.split(' ').join(''); //Split to return the string as a array with items, and join('') will join the items and get ride of the empty space
}

console.log(noSpace('A String with no space'));
console.log(noSpace("I am okay"));


//Square and sum each item in the array
function squareSum(numbers) {
    // let result = 0;

    // numbers.forEach(number => {
    //     result += (number * number);
    // });
    // return result;

    return numbers
        .map(number => number * number)
        .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

console.log(squareSum([1, 2, 3])); //14
console.log(squareSum([4, 6, 9])); //133


function positiveSum(numbers) {
    // let total = 0;

    // numbers.forEach(number => {
    //     if (number > 0) {
    //         total += number;
    //     }
    // });
    // return total;

    return numbers
      .filter((number) => number > 0)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

}

console.log(positiveSum([1, 2, 3, 4, -5]));
console.log(positiveSum([2, 4, 3, 5, -44]));