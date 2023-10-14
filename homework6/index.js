alert('Welcome to calculator!');
const operation = prompt('What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos');
let num1, num2;
let result;

switch(operation){
    case 'Add':{
        num1 = Number(prompt('Enter the first number'));
        num2 = Number(prompt('Enter the second number'));

        // if user enter wrong number
        if(!isNaN(num1) && !isNaN(num2)){
            result = num1 + num2;
            alert(`Sum of ${num1} and ${num2} is ${result}`);
            alert('Goodbye, see you later :)');
        } else{
            alert('This is bad digit, goodbye');
        }
        break;
    }
    case 'Diff':{
        num1 = Number(prompt('Enter the first number'));
        num2 = Number(prompt('Enter the second number'));

        // if user enter wrong number
        if(!isNaN(num1) && !isNaN(num2)){
            result = num1 - num2;
            alert(`Difference between ${num1} and ${num2} is ${result}`);
            alert('Goodbye, see you later :)');
        } else{
            alert('This is bad digit, goodbye');
        }
        break;
    }
    case 'Mult':{
        num1 = Number(prompt('Enter the first number'));
        num2 = Number(prompt('Enter the second number'));

        // if user enter wrong number
        if (!isNaN(num1) && !isNaN(num2)){
            result = num1 * num2;
            alert(`Multiplication between ${num1} and ${num2} is ${result}`);
            alert('Goodbye, see you later :)');
        } else {
            alert('This is bad digit, goodbye');
        }
        break;
    }
    case 'Div':{
        num1 = Number(prompt('Enter the first number'));
        num2 = Number(prompt('Enter the second number'));

        // if user enter wrong number
        if (!isNaN(num1) && !isNaN(num2)){
            result = num1 / num2;
            alert(`${num1} divided by ${num2} is ${result}`);
            alert('Goodbye, see you later :)');
        } else {
            alert('This is bad digit, goodbye');
        }
        break;
    }
    case 'Sqrt':{
        num1 = Number(prompt('Enter the number'));

        // if user enter wrong number
        if (!isNaN(num1)){
            result = Math.sqrt(num1);
            alert(`Root of a ${num1} is ${result}`);
            alert('Goodbye, see you later :)');
        } else {
            alert('This is bad digit, goodbye');
        }
        break;
    }
    case 'Sin':{
        num1 = Number(prompt('Enter the number'));

        // if user enter wrong number
        if (!isNaN(num1)){
            result = Math.sin(num1);
            alert(`Sine of ${num1} is ${result}`);
            alert('Goodbye, see you later :)');
        } else {
            alert('This is bad digit, goodbye');
        }
        break;
    }
    case 'Cos':{
        num1 = Number(prompt('Enter the number'));

        // if user enter wrong number
        if (!isNaN(num1)){
            result = Math.cos(num1);
            alert(`Cosine of ${num1} is ${result}`);
            alert('Goodbye, see you later :)');
        } else {
            alert('This is bad digit, goodbye');
        }
        break;
    }
    case null:{
        alert('Goodbye, see you later (´･ᴗ･ ` )');
        break;
    }
    default:{
        alert('Goodbye, see you later ╮( ˘ ､ ˘ )╭');
        break;
    }
}