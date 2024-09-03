
function greetUser(name) {
    return `Hello, ${name}!`;
}

console.log(greetUser('Alice'));

// Expressions and Arrow Functions
const square = function (number) {
    return number * number;
};

const squareArrow = (number) => number * number;
console.log(square(4));
console.log(squareArrow(4));

//Scope
let globalVar = 'I am global';

function checkScope() {
    let localVar = 'I am local';
    if (true) {
        let blockVar = 'I am block-scoped';
        console.log(globalVar, localVar, blockVar);
    }
    // console.log(blockVar); // Would throw an error
}

checkScope();

// Closures 
function counter() {
    let count = 0;
    return function () {
        count += 1;
        return count;
    };
}

const increment = counter();
console.log(increment());
console.log(increment());
console.log(increment()); 
// Each call remembers the last count
