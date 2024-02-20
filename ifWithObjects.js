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

// Iterating over the list to add the ofLegalAge property
users.forEach(user => {
    user.ofLegalAge = user.age > 17;
});

console.log(users);
