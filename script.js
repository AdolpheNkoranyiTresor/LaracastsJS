//function declaration / function definition

function sayHello(firstName = 'Nick', lastName = 'Park') {
    //function body
    console.log("Hello");
    console.log(firstName);
    console.log(lastName);
}

//function execution / run /invoke / call
sayHello('Adolphe', 'Nkoranyi');
sayHello('Tresor', 'Mukange');
sayHello();

function add(num1, num2) {
    return num1 + num2;
}

const result = add(5, 4);
console.log(result);

function sayHelloAgain(firstName = 'Nick', lastName = 'Park') {
    
    return `Hey ${firstName} ${lastName}`;

}

console.log(sayHelloAgain());