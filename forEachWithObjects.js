const course = {
    id: 1234,
    name: "Programming Logic",
    lessons: [],
};

// List of lessons to add
const lessonsToAdd = [
    { identifier: 1, lesson_name: "Introduction to programming" },
    { identifier: 2, lesson_name: "Variables" },
    { identifier: 3, lesson_name: "Conditionals" },
    { identifier: 4, lesson_name: "Arrays" }
];

// Adding each lesson to the lessons array of the course object
lessonsToAdd.forEach(lesson => {
    course.lessons.push(lesson);
});

console.log(course);
