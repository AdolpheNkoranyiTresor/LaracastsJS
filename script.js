/*
Types in JS

Primitive Types - Pass by value

-Strings
-Numbers
-BigInt
-Boolean
-Null and Undefined
-Symbol
*/

let a = "hi";
let b = a;
b = b + " there";

//Mental Model
//a: 'hi'
//b: 'hi there'

console.log(a);
console.log(b);


//Reference Types - Pass by reference

/*
-Arrays
-Objects
-Functions

*/

let c = [1, 2];
let = d = c;
let e = [1, 2];
// d.push(3);

//Mental Model
//c: 0x01
//d: 0x01

//Memory
//0x01: [1, 2]
//0x02: [1, 2]

console.log(c);
console.log(d);
console.log(c === e);
