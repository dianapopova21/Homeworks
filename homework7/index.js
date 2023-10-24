alert('Welcome to calculator!');
let userChoise;
let num1, num2;
let result;
let operation;
let isContinueCalculate = true;

do {
    userChoise = prompt('What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos', 'Add');
    if (userChoise === null) {
        alert('Goodbye, see you later (´･ᴗ･ ` )');
        break;
    }
    operation = userChoise.toLocaleLowerCase();
    while (true) {
        if (operation === 'add' || operation === 'diff' || operation === 'mult' || operation === 'div' ||
            operation === 'sqrt' || operation === 'sin' || operation === 'cos') {
            break;
        }
        else {
            operation = prompt('I don\'t recognize your operation. Please choose correct operation like: Add, Diff, Mult, Div, Sqrt, Sin or Cos');
            normalizeOperation = operation.toLocaleLowerCase();
        }
    }

    switch (operation) {
        case 'add': {
            num1 = Number(prompt('Enter the first number'));
            while (isNaN(num1)) {
                num1 = Number(prompt('This is bad digit. Please enter correct digit'));
            };
            num2 = Number(prompt('Enter the second number'));
            while (isNaN(num2)) {
                num2 = Number(prompt('This is bad digit. Please enter correct digit'));
            };
            result = num1 + num2;
            alert(`Sum of ${num1} and ${num2} is ${result}`);
            break;
        }
        case 'diff': {
            num1 = Number(prompt('Enter the first number'));
            while (isNaN(num1)) {
                num1 = Number(prompt('This is bad digit. Please enter correct digit'));
            };
            num2 = Number(prompt('Enter the second number'));
            while (isNaN(num2)) {
                num2 = Number(prompt('This is bad digit. Please enter correct digit'));
            };
            result = num1 - num2;
            alert(`Difference between ${num1} and ${num2} is ${result}`);
            break;
        }
        case 'mult': {
            num1 = Number(prompt('Enter the first number'));
            while (isNaN(num1)) {
                num1 = Number(prompt('This is bad digit. Please enter correct digit'));
            };
            num2 = Number(prompt('Enter the second number'));
            while (isNaN(num2)) {
                num2 = Number(prompt('This is bad digit. Please enter correct digit'));
            };
            result = num1 * num2;
            alert(`Multiplication between ${num1} and ${num2} is ${result}`);
            break;
        }
        case 'div': {
            num1 = Number(prompt('Enter the first number'));
            while (isNaN(num1)) {
                num1 = Number(prompt('This is bad digit. Please enter correct digit'));
            };
            num2 = Number(prompt('Enter the second number'));
            while (isNaN(num2)) {
                num2 = Number(prompt('This is bad digit. Please enter correct digit'));
            };
            result = num1 / num2;
            alert(`${num1} divided by ${num2} is ${result}`);
            break;
        }
        case 'sqrt': {
            num1 = Number(prompt('Enter the number'));
            while (isNaN(num1)) {
                num1 = Number(prompt('This is bad digit. Please enter correct digit'));
            };
            result = Math.sqrt(num1);
            alert(`Root of a ${num1} is ${result}`);
            break;
        }
        case 'sin': {
            num1 = Number(prompt('Enter the number'));
            while (isNaN(num1)) {
                num1 = Number(prompt('This is bad digit. Please enter correct digit'));
            };
            result = Math.sin(num1);
            alert(`Sine of ${num1} is ${result}`);
            break;
        }
        case 'cos': {
            num1 = Number(prompt('Enter the number'));
            while (isNaN(num1)) {
                num1 = Number(prompt('This is bad digit. Please enter correct digit'));
            };
            result = Math.cos(num1);
            alert(`Cosine of ${num1} is ${result}`);
            break;
        }
        case null: {
            alert('Goodbye, see you later (´･ᴗ･ ` )');
            break;
        }
    }

    isContinueCalculate = confirm('Do you want to continue work with me?');
    if (isContinueCalculate === false) {
        alert('Goodbye, see you later (´･ᴗ･ ` )');
        break;
    }
} while (isContinueCalculate === true);
