let age = 31;

const isOld = age >= 30;
const isCool = true;

// console.log(isOld);
// console.log(isCool);

//Comparisons

// console.log(4 > 2);
// console.log(4 >+ 2);
// console.log(4 < 2);
// console.log(4 <= 2);

// //Equality: Strict Equality '===' vs Loose Equality '=='
// console.log(4 === 4); //Compares the type and the value, is true if both the type & value are the same.
// console.log(4 === '4'); //Compares the type and the value, is true if both the type & value are the same.
// console.log(4 == 4); //Compares only the value
// console.log(4 == '4'); //Compares only the value
// console.log(4 !== '4'); //Compares the type and the value, is true if both the type & value are the same.
// console.log(4 != '4'); //Compares only the value

// //Logical Operators
//AND Logical Operatore, results to "True" if both ends are true
// console.log(true && true);
// console.log(false && true);
// console.log(true && false);
// console.log(false && false);

//OR Logical Operatore, results to "True" if one of the values is true
// console.log(true || true);
// console.log(false || true);
// console.log(true || false);
// console.log(false || false);

// console.log(isOld && isCool)

//Convert boolean to string
// console.log(isOld.toString());

/*Truthy vs Falsy, all values are truthy except: 
false, 0, -0, 0n, "", null, undefined, and NaN. */
console.log(Boolean(undefined));