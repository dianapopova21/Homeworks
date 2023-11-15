class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfo() {
        console.log(`Person\`s name: ${this.name}.\nPerson\`s age: ${this.age}.`);
    }
}

class Car {
    constructor(brand, model, releaseYear, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.releaseYear = releaseYear;
        this.licencePlate = licensePlate;
    }
    assignOwner (owner) {
        if(owner instanceof Person && owner.age >= 18) {
            this.owner = owner;
        }
        else {
            console.log('The owner of the car must not be under 18');
        }
    }
    showCarInfo() {
        console.log(`Car brand: ${this.brand}\nCar model ${this.model}\nCar release year: ${this.releaseYear}\nCar licencePlate: ${this.licencePlate}`);
        if(this.owner) {
            this.owner.showInfo();
        }
    }
}


const person1 = new Person('Diana', 21);
const person2 = new Person('Childe', 17);
const car1 = new Car('Opel', 'Meriva', 2008, 'АЕ5646РІ');
const car2 = new Car('BMW', 'X5', 2014, 'АЕ4765НР');
car1.assignOwner(person1);
car2.assignOwner(person2);
car1.showCarInfo();
car2.showCarInfo();
