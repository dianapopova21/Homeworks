alert('Welcome to calculator!');
const operation = prompt('What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos');
let num1, num2;
let result;

// addition
if (operation === 'Add'){
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
} 
// difference
else if (operation === 'Diff'){
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
} 
// multiplication
else if (operation === 'Mult'){
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
} 
// division
else if (operation === 'Div'){
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
} 
// root
else if (operation === 'Sqrt'){
    num1 = Number(prompt('Enter the number'));

    // if user enter wrong number
    if (!isNaN(num1)){
        result = Math.sqrt(num1);
        alert(`Root of a ${num1} is ${result}`);
        alert('Goodbye, see you later :)');
    } else {
        alert('This is bad digit, goodbye');
    }
} 
// sine
else if (operation === 'Sin'){
    num1 = Number(prompt('Enter the number'));

    // if user enter wrong number
    if (!isNaN(num1)){
        result = Math.sin(num1);
        alert(`Sine of ${num1} is ${result}`);
        alert('Goodbye, see you later :)');
    } else {
        alert('This is bad digit, goodbye');
    }
} 
//cosine
else if (operation === 'Cos'){
    num1 = Number(prompt('Enter the number'));

    // if user enter wrong number
    if (!isNaN(num1)){
        result = Math.cos(num1);
        alert(`Cosine of ${num1} is ${result}`);
        alert('Goodbye, see you later :)');
    } else {
        alert('This is bad digit, goodbye');
    }
} 
// if user click 'cancel'
else if (operation === null){
    alert('Goodbye, see you later (´･ᴗ･ ` )');
} 
// if user choose non-existent operation
else{
    alert('Goodbye, see you later ╮( ˘ ､ ˘ )╭');
}
