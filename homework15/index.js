function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}

function Apartment() {
    this.residents = [];
    this.addResident = function(person) {
        this.residents.push(person);
    }
}

function House(maxApartments) {
    this.maxApartments = maxApartments;
    this.apartments = [];
    this.addApartment = function (apartment) {
        if(this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
        }
        else console.log('The number of apartments cannot exceed the maximum number');
    }
}

const person1 = new Person('Childe', 'male');
const person2 = new Person('Diana', 'female');
const person3 = new Person('Li', 'male');

const apartment1 = new Apartment();
const apartment2 = new Apartment();

apartment1.addResident(person1);
apartment1.addResident(person3);
apartment2.addResident(person2);

const house = new House(50);

// для проверки работы метода
// house.apartments.length = 50;

house.addApartment(apartment1);
house.addApartment(apartment2);

console.log('Person1 - ', person1);
console.log('Person2 - ', person2);
console.log('Person3 - ', person3);
console.log('Apartment1 residents - ', apartment1.residents);
console.log('Apartment2 residents - ', apartment2.residents);
console.log('House - ', house);

