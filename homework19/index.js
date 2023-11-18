class SuperMath {
    constructor(obj) {
        this.obj = obj;
    }
    calculateOperation() {
        const userChoice = confirm(`Do you want to do the operation with the ${this.obj.sign} sign between ${this.obj.x} and ${this.obj.y}?`);
        if(userChoice) {
            if(this.obj.sign === '+') {
                console.log(Number(this.obj.x) + Number(this.obj.y));
            }
            else if(this.obj.sign === '-') {
                console.log(Number(this.obj.x) - Number(this.obj.y));
            }
            else if(this.obj.sign === '/') {
                console.log(Number(this.obj.x) / Number(this.obj.y));
            }
            else if(this.obj.sign === '*') {
                console.log(Number(this.obj.x) * Number(this.obj.y));
            }
            else if(this.obj.sign === '%') {
                console.log(Number(this.obj.x) % Number(this.obj.y));
            }
            else console.log(`Invalid operation with ${this.obj.sign}`);
        }
        else {
            this.inputNewData();
            console.log('There was a data change');
        }
    }

    inputNewData() {
        this.obj.x = prompt('Then enter the first number:');
        while (!SuperMath.checkNumber(this.obj.x)) {
            this.obj.x = prompt('This number is incorrect. Enter again:');
        }
        this.obj.y = prompt('Now enter the second number:');
        while (!SuperMath.checkNumber(this.obj.y)) {
            this.obj.y = prompt('This number is incorrect. Enter again:');
        }
        this.obj.sign = prompt('And enter the sign (+ - / * %):');
        while (!SuperMath.checkSign(this.obj.sign)) {
            this.obj.sign = prompt('This sign is incorrect. Here are the valid values (+ - / * %). Enter again:');
        }
        this.calculateOperation();
    }

    static checkNumber(number) {
        return(!isNaN(number) && number !== '');
    }
    static checkSign(sign) {
        const validSigns = ['+', '-', '/', '*', '%'];
        return validSigns.includes(sign);
    }
}

const obj = {
    x: 4,
    y: 3,
    sign: '+'
}

const myObj = new SuperMath(obj);
myObj.calculateOperation();