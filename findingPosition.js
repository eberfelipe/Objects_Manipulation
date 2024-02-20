const participants = [
    { name: "John" },
    { name: "Anna" },
    { name: "Beatrice" },
    { name: "Maria" },
    { name: "Ana Clara" },
    { name: "Joanna" },
    { name: "August" },
    { name: "Renan" },
    { name: "Patricia" },
    { name: "Carlos" },
    { name: "Renato" },
    { name: "Joseph" },
    { name: "Robert" },
    { name: "Sara" },
    { name: "Junior" },
    { name: "Peter" },
    { name: "Victor" },
    { name: "Anthony" },
];

const positionCarlos = participants.findIndex(participant => participant.name === "Carlos") + 1;

console.log(`Guys... Carlos is in position ${positionCarlos}, hurry up!`);
