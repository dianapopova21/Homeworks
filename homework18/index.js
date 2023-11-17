class Hamburger {
    constructor(size, kind) {
        this.size = size;
        this.kind = kind;
        this.toppings = [];
    }

    static SIZE = {
        SIZE_SMALL: {size: 'small', price: 50, calories: 20},
        SIZE_BIG: {size: 'big', price: 100, calories: 40}
    }
    static KIND  = {
        KIND_CLASSIC: {kind: 'classic', price: 15, calories: 10},
        KIND_CHEESE: {kind: 'cheese', price: 10, calories: 20},
        KIND_VEGETARIAN: {kind: 'vegetarian', price: 20, calories: 5}
    }
    static EXTRATOPPING = {
        MAYO: {extratopping: 'mayo', price: 15, calories: 5},
        KETCHUP: {extratopping: 'ketchup', price: 15, calories: 5},
        CHEESE: {extratopping: 'cheese', price: 20, calories: 10},
        ONION: {extratopping: 'onion', price: 20, calories: 10}
    }
    addTopping(topping) {
        const isValidTopping = Object.values(Hamburger.EXTRATOPPING).some(item =>
            JSON.stringify(item) === JSON.stringify(topping)
        );

        if (isValidTopping) {
            this.toppings.push(topping);
        }
        else {
            console.log('Invalid topping:', topping);
        }
    }
    calculatePrice() {
        let price = 0;
        price += this.size.price;
        price += this.kind.price;
        for(let i = 0; i < this.toppings.length; i++) {
            price += this.toppings[i].price;
        }
        return price;
    }
    calculateCalories() {
        let calories = 0;
        calories += this.size.calories;
        calories += this.kind.calories;
        for(let i = 0; i < this.toppings.length; i++) {
            calories += this.toppings[i].calories;
        }
        return calories;
    }
}

const myHamburger = new Hamburger(Hamburger.SIZE.SIZE_BIG, Hamburger.KIND.KIND_CLASSIC);

myHamburger.addTopping(Hamburger.EXTRATOPPING.MAYO);
myHamburger.addTopping(Hamburger.EXTRATOPPING.KETCHUP);

console.log('Current price: ', myHamburger.calculatePrice());
console.log('Current number of calories: ', myHamburger.calculateCalories());

console.log('*******************');

myHamburger.addTopping(Hamburger.EXTRATOPPING.ONION);
myHamburger.addTopping(Hamburger.EXTRATOPPING.CHEESE);

console.log('Current price: ', myHamburger.calculatePrice());
console.log('Current number of calories: ', myHamburger.calculateCalories());

