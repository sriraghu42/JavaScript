//Objects
const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2021,
    start() {
        console.log(`Starting ${this.brand} ${this.model}`);
    }
};

car.start();

// Constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const john = new Person('John', 30);
john.greet();

// ES6 Classes
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, 'Dog');
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name}, the ${this.breed}, barks.`);
    }
}

const buddy = new Dog('Buddy', 'Golden Retriever');
buddy.speak();
