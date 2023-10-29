let value1, value2;
let result;
let isContinueCalculate = true;
const calculateHistoryArr = [];
const validOperations = ['add', 'diff', 'mult', 'div', 'sqrt', 'sin', 'cos', 'history'];
let calculateHistoryStr = '';

function CalculateSum(firstValue, secondValue) {
    result = Number(firstValue) + Number(secondValue);
    alert(`Sum of ${firstValue} and ${secondValue} is ${result}`);
    calculateHistoryArr.push(`Sum: ${firstValue} + ${secondValue} = ${result}`);
}

function CalculateDiff(firstValue, secondValue) {
    result = Number(firstValue) - Number(secondValue);
    alert(`Difference between ${firstValue} and ${secondValue} is ${result}`);
    calculateHistoryArr.push(`Difference: ${firstValue} - ${secondValue} = ${result}`);
}

function CalculateMult(firstValue, secondValue) {
    result = Number(firstValue) * Number(secondValue);
    alert(`Multiplication between ${firstValue} and ${secondValue} is ${result}`);
    calculateHistoryArr.push(`Multiplication: ${firstValue} * ${secondValue} = ${result}`);
}

function CalculateDiv(firstValue, secondValue) {
    result = Number(firstValue) / Number(secondValue);
    alert(`${firstValue} divided by ${secondValue} is ${result}`);
    calculateHistoryArr.push(`Divide: ${firstValue} / ${secondValue} = ${result}`);
}

function CalculateSqrt(value) {
    while (value < 0 || isNaN(value) || value === '') {
        alert('The number was entered incorrectly. Please try again');
        value = prompt('Enter the number');
    }
    result = Math.sqrt(Number(value));
    alert(`Root of a ${value} is ${result}`);
    calculateHistoryArr.push(`Sqrt: √${value} = ${result}`);
}

function CalculateSin(value) {
    result = Math.sin(Number(value));
    alert(`Sine of ${value} is ${result}`);
    calculateHistoryArr.push(`Sine: ${value} = ${result}`);
}

function CalculateCos(value) {
    result = Math.cos(Number(value));
    alert(`Cosine of ${value} is ${result}`);
    calculateHistoryArr.push(`Cosine: ${value} = ${result}`);
}

function ShowHistory() {
    if (calculateHistoryArr.length !== 0) {
        for (let i = 0; i < calculateHistoryArr.length; i++) {
            calculateHistoryStr += i + 1 + '. ' + calculateHistoryArr[i] + '\n';
        }
        alert('Your operations:' + '\n' + calculateHistoryStr);
    }
    else {
        alert('You haven\'t done any operations yet ╮(￣_￣)╭');
    }
}

function ShowNotification(type) {
    switch (type) {
        case 'Wrong digit':
            {
                alert('The number was entered incorrectly. Please try again');
                break;
            }
        case 'Wrong operation':
            {
                alert('I don\'t recognize your operation. Please choose correct operation like: Add, Diff, Mult, Div, Sqrt, Sin or Cos'); break;
            }
        case 'Goodbye to user':
            {
                alert('Goodbye, see you later (´･ᴗ･ ` )');
                break;
            }            
    }
}

function ValidateUserValue(value) {
    do {
        value = prompt('Enter the number');
        console.log(value);
        if (isNaN(value) || value === '' || value === null) {
            ShowNotification('Wrong digit');
        }
        else break;
    } while (isNaN(value) || value === '' || value === null);

    return Number(value);
}

function ValidateUserOperation() {
    const userOperation = prompt('What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos, History', 'Add');
    if (userOperation !== null) {
        const normalizeOperation = userOperation.toLowerCase();
        if (validOperations.includes(normalizeOperation)) {
            return normalizeOperation;
        }
        else {
            return false;
        }
    }
    else if (userOperation === null) {
        return 0;
    }
}

alert('Welcome to calculator!');

outer: do {
    operation = ValidateUserOperation();

    while (true) {
        if (operation) {
            break;
        }
        else if(operation === false){
            ShowNotification('Wrong operation');
            operation = ValidateUserOperation();
        }
        else break outer;
    }

    switch (operation) {
        case 'add':
        case 'diff':
        case 'mult':
        case 'div':
            {
                value1 = ValidateUserValue(value1);
                alert('Good! ╰(*´︶`*)╯ Now enter the second number');
                value2 = ValidateUserValue(value2);
                if (operation === 'add') {
                    CalculateSum(value1, value2);
                }
                else if (operation === 'diff') {
                    CalculateDiff(value1, value2);
                }
                else if (operation === 'mult') {
                    CalculateMult(value1, value2);
                }
                else if (operation === 'div') {
                    CalculateDiv(value1, value2);
                }
                break;
            }
        case 'sqrt':
        case 'sin':
        case 'cos':
            {
                value1 = ValidateUserValue(value1);
                if (operation === 'sqrt') {
                    CalculateSqrt(value1);
                }
                else if (operation === 'sin') {
                    CalculateSin(value1);
                }
                else if (operation === 'cos') {
                    CalculateCos(value1);
                }
                break;
            }
        case 'history':
            {
                ShowHistory();
                break;
            }
        case null: {
            ShowNotification('Goodbye to user');
            break;
        }
    }

    isContinueCalculate = confirm('Do you want to continue working with me?');
    if (!isContinueCalculate) {
        ShowNotification('Goodbye to user');
        break;
    }
} while (isContinueCalculate);
