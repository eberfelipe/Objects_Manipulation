const user = {
    name: "John",
    age: 25,
    profession: "programmer",
    favoriteColor: "green",
};

// Object destructuring for easier access to the properties
const { name, age, profession, favoriteColor } = user;

// Crafting the introduction message using template literals
const introductionMessage = `Hello... I am ${name} and I am ${age} years old. I am a ${profession} and my favorite color is ${favoriteColor}!`;

console.log(introductionMessage);
