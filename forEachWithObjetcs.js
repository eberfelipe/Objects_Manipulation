const book = {
    name: 'The Power of Habit',
    chapters: [
        {
            name: "The Habit Loop",
        },
        {
            name: "The Craving Brain",
        },
        {
            name: "The Golden Rule of Habit Change",
        },
        {
            name: "Keystone Habits, or The Ballad of Paul O'Neill",
        },
        {
            name: "Starbucks and the Habit of Success",
        },
        {
            name: "The Power of a Crisis",
        },
        {
            name: "How Target Knows What You Want Before You Do",
        },
        {
            name: "Saddleback Church and the Montgomery Bus Boycott",
        },
        {
            name: "The Neurology of Free Will",
        },
    ]
};

// Numbering each chapter
book.chapters.forEach((chapter, index) => {
    chapter.number = index + 1;
});

console.log(book);
