
let userChoise;
let num1, num2;
let result;
let operation;
let isContinueCalculate = true;
const calculateHistoryArr = [];
let calculateHistoryStr = '';

alert('Welcome to calculator!');

do {
    calculateHistoryStr = '';
    userChoise = prompt('What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos, History', 'Add');
    if (userChoise === null) {
        alert('Goodbye, see you later (´･ᴗ･ ` )');
        break;
    }
    operation = userChoise.toLowerCase();
    while (true) {
        if (operation === 'add' || operation === 'diff' || operation === 'mult' || operation === 'div' ||
            operation === 'sqrt' || operation === 'sin' || operation === 'cos' || operation === 'history') {
            break;
        }
        else {
            userChoise = prompt('I don\'t recognize your operation. Please choose correct operation like: Add, Diff, Mult, Div, Sqrt, Sin or Cos');
            operation = userChoise.toLowerCase();
        }
    }

    switch (operation) {
        case 'add':
        case 'diff':
        case 'mult':
        case 'div':
            {
                num1 = prompt('Enter the first number');
                while (isNaN(num1) || num1 === '') {
                    alert('This is bad digit. Please enter correct digit');
                    num1 = prompt('Enter the first number');
                };
                num2 = prompt('Enter the second number');
                while (isNaN(num2) || num2 === '') {
                    alert('This is bad digit. Please enter correct digit');
                    num2 = prompt('Enter the second number');
                };
                if (operation === 'add') {
                    result = Number(num1) + Number(num2);
                    alert(`Sum of ${num1} and ${num2} is ${result}`);
                    calculateHistoryArr.push(`Sum: ${num1} + ${num2} = ${result}`);
                }
                else if (operation === 'diff') {
                    result = Number(num1) - Number(num2);
                    alert(`Difference between ${num1} and ${num2} is ${result}`);
                    calculateHistoryArr.push(`Difference: ${num1} - ${num2} = ${result}`);
                }
                else if (operation === 'mult') {
                    result = Number(num1) * Number(num2);
                    alert(`Multiplication between ${num1} and ${num2} is ${result}`);
                    calculateHistoryArr.push(`Multiplication: ${num1} * ${num2} = ${result}`);
                }
                else if (operation === 'div') {
                    result = Number(num1) / Number(num2);
                    alert(`${num1} divided by ${num2} is ${result}`);
                    calculateHistoryArr.push(`Divide: ${num1} / ${num2} = ${result}`);
                }
                break;
            }
        case 'sqrt':
        case 'sin':
        case 'cos':
            {
                num1 = prompt('Enter the number');
                while (isNaN(num1) || num1 === '') {
                    alert('This is bad digit. Please enter correct digit');
                    num1 = prompt('Enter the number');
                };
                if (operation === 'sqrt') {
                    result = Math.sqrt(Number(num1));
                    alert(`Root of a ${num1} is ${result}`);
                    calculateHistoryArr.push(`Sqrt: √${num1} = ${result}`);
                }
                else if (operation === 'sin') {
                    result = Math.sin(Number(num1));
                    alert(`Sine of ${num1} is ${result}`);
                    calculateHistoryArr.push(`Sine: ${num1} = ${result}`);
                }
                else if (operation === 'cos') {
                    result = Math.cos(Number(num1));
                    alert(`Cosine of ${num1} is ${result}`);
                    calculateHistoryArr.push(`Cosine: √${num1} = ${result}`);
                }
                break;
            }
        case 'history':
            {
                if (calculateHistoryArr.length !== 0) {
                    for (let i = 0; i < calculateHistoryArr.length; i++) {
                        calculateHistoryStr += i+1 + '. ' + calculateHistoryArr[i] + '\n';
                    }
                    alert('Your operations:' + '\n' + calculateHistoryStr);
                }
                else {
                    alert('You haven\'t done any operations yet ╮(￣_￣)╭');
                }
                break;
            }
        case null: {
            alert('Goodbye, see you later (´･ᴗ･ ` )');
            break;
        }
    }

    isContinueCalculate = confirm('Do you want to continue working with me?');
    if (!isContinueCalculate) {
        alert('Goodbye, see you later (´･ᴗ･ ` )');
        break;
    }
} while (isContinueCalculate);
