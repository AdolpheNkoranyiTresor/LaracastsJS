const firstName = 'Adolphe';
const lastName = "Nkoranyi";
const jobTitle = `Web Developer`;

const storeName = "Adolphe's \"Special\" Cookies \\ Treats";

const storeName2 = `Adolphe's "Special" Cookies \\ Treats`;

const fullName = firstName + ' ' + lastName;

const about = 'Name: ' + firstName + ' ' + lastName + ', Job: ' + jobTitle;

const html = '\n'
    + '<div>\n'
    + 'Hi there\n'
    + '</div>\n';


//Rewrite the above codes using backticks or template strings or template literals (``)

const fullName2 = `${firstName} ${lastName}`; //Looks much cleaner than the first const fullName
const about2 = `Name: ${fullName}, Job: ${jobTitle}`; //Much cleaner than the first about varible

const html2 = `
<div>
    Hi there ${fullName2}
</div>
`;

console.log(html2);


//The below methods allow us to manipulate our strings.

console.log(firstName.length); //to count number of charactors
console.log(firstName[0]); //to grab a certain charactor using the array syntax
console.log(firstName.charAt(1)); //to grab a certain charactor using the charAt Method
console.log(firstName.toUpperCase()); //to concert all the charactors in the string to Uppercase
console.log(firstName.toLowerCase()); //to concert all the charactors in the string to Lowercase
console.log(firstName.substring(0, 3)); //Returns the substring at the specified location within a String object.
console.log(firstName.includes('lphe')); //Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
console.log(firstName.includes('Nko')); //Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
