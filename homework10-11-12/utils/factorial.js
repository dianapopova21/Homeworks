function factorial(number) {
    if(number === 1) return number;
    else return number * factorial(number - 1);
}

const userNumber = prompt('Enter the number');
alert(`Factorial of ${userNumber} is ` + factorial(userNumber));