//Varibles
let num1 = 6;
let num2 = 3;
const num3 = 4.5;
const num4 = -5.8;
let myVar = "A String"
let myVar2 = "Another String";

//Basic math operators
console.log(num1 + num2); //results 9
console.log(num1 - num2); //results 3
console.log(num1 * num2); //results 18
console.log(num1 / num2); //results 2

//Floating points inaccuracy
console.log(0.1 + 0.2);
console.log(0.2 + 0.4);

//Other OPerations
console.log(12 % 6);
console.log(8 % 3);
console.log(2 ** 6); //Exponent, will result 64

//Increment and Decrement

// num1 = num1 + 1; //Increases the initial value by one
// num1++; //Increases the initial value by one
// num1 += 2;
// num2 = num2 - 1; //Decreases the initial value by one
// num2--; //Decreases the initial value by one
// console.log(num1);

//Comprisons
console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 < num2);
console.log(num1 <= num2);
console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 != num2);
console.log(num1 !== num2);

//NaN
console.log(num1 * 'A string') //Not a Number

//Infinity
console.log(9000000000 ** 9000000000);
console.log(Number.NEGATIVE_INFINITY);

// Math Objedts
console.log(Math.PI);
console.log(Math.sqrt(81));
console.log(Math.sqrt(81));
console.log(Math.pow(2, 2));
console.log(Math.round(9.5));
console.log(Math.round(9.2));
console.log(Math.ceil(9.1)); //Always round up using the ceil math integer
console.log(Math.floor(9.8)); //Always round down using the floor math integer


//Converting
console.log(myVar + myVar2);
console.log(myVar + num1);

//String to number
console.log(parseInt('8') + 2);

//Number to a string
console.log(2 + '');
console.log(`${2}`);
console.log('2');

//BigInt
let maxInt = BigInt(Number.MAX_SAFE_INTEGER);
console.log(maxInt);
maxInt++;
console.log(maxInt);
maxInt++;
console.log(maxInt);


let bigNumber = 9007199254740993n;
bigNumber = bigNumber * 9n;
console.log(bigNumber);
