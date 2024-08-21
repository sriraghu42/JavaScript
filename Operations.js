//Ternary Operator
const time = 14;
const greeting = time < 12 ? "Good morning!" : time < 18 ? "Good afternoon!" : "Good evening!";
console.log(greeting);

const tasks = [
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Pay bills", completed: true },
    { id: 3, title: "Attend meeting", completed: false },
];

//forEach 
tasks.forEach(task => console.log(task.title));

// Filter
const incompleteTasks = tasks.filter(task => !task.completed);
console.log('Incomplete Tasks:', incompleteTasks);

// Map
const taskTitlesUpper = tasks.map(task => task.title.toUpperCase());
console.log('Task Titles in Uppercase:', taskTitlesUpper);

// Reduce
const completedTaskCount = tasks.reduce((count, task) => task.completed ? count + 1 : count, 0);
console.log('Completed Task Count:', completedTaskCount);
