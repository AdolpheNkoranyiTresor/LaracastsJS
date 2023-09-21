const person = {
    firstName: 'Adolphe',
    'last-name': 'Tresor',
    age: 30,
    isCool: false,
    hobbies: ['Worship songs', 'singing'],
    address: {
        avenue: 'Route 0012 est',
        city: 'Nairobi',
        country: 'Kenya',
    },
    howOldAmI: function () {
        console.log(`I am ${this.age} years old.`)
    }
};

// console.log(person.firstName);
// console.log(person['last-name']);

// person.hairColor = 'Black';

// delete person.isCool;

// console.log(person);
person.howOldAmI();

const groupOfPeople = [
    {
        name: 'Adolphe',
        age: 34,
    },
    {
        name: 'Nickel',
        age: 20,
    },
    {
        name: 'Jack',
        age: 45,
    },
];

console.log(groupOfPeople);