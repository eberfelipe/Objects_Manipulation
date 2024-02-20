const users = [
    {
        name: "John",
        pets: [],
    },
    {
        name: "Anna",
        pets: ["Pingo", "Lulu"],
    },
    {
        name: "Beatrice",
        pets: ["Lessie"],
    },
    {
        name: "Charles",
        pets: ["Farofa", "Sausage", "Potato"],
    },
    {
        name: "Anthony",
        pets: ["Naninha"],
    },
];

users.forEach(({ name, pets }) => {
    let message = `I am ${name} and `;
    if (pets.length === 0) {
        message += "I have no pets";
    } else if (pets.length === 1) {
        message += "I have 1 pet";
    } else {
        message += `I have ${pets.length} pets`;
    }
    console.log(message);
});
