
const greeting = "Hello, World!";
const age = 25;
const isActive = true;

console.log(greeting, age, isActive);

// mixed data types
const mixedArray = [greeting, age, isActive];


const users = [
    { id: 1, name: 'Alice', age: 25, active: true },
    { id: 2, name: 'Bob', age: 30, active: false },
    { id: 3, name: 'Charlie', age: 35, active: true },
    { id: 4, name: 'David', age: 40, active: false },
];

// Filtering active users
const activeUsers = users.filter(user => user.active);
console.log('Active Users:', activeUsers);

// Mapping names to uppercase
const uppercasedNames = users.map(user => user.name.toUpperCase());
console.log('Uppercased Names:', uppercasedNames);

// Reducing to find total age of all users
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log('Total Age:', totalAge);

// Chaining map and filter
const activeUserNames = users
    .filter(user => user.active)
    .map(user => user.name);
console.log('Active User Names:', activeUserNames);
