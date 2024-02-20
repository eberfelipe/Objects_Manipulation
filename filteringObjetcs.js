const users = [
    {
        name: "John",
        age: 25,
    },
    {
        name: "Anna",
        age: 18,
    },
    {
        name: "Beatrice",
        age: 15,
    },
    {
        name: "Charles",
        age: 16,
    },
    {
        name: "Anthony",
        age: 32,
    },
];

// Separating the users into young people and adults
const youngPeople = users.filter(user => user.age < 18);
const adults = users.filter(user => user.age >= 18);

// Displaying the two new arrays in the console
console.log('Young People:', youngPeople);
console.log('Adults:', adults);
