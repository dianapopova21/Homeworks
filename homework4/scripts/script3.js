// Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)

const num1 = Number(prompt('Enter the first number(a): '));
const num2 = Number(prompt('Enter the second number(b): '));
let result = '';

if(num1 % num2 === 0){
    result += `Число ${num1} є дільником числа ${num2}\n`;
}else{
    result += `Число ${num1} не є дільником числа ${num2}\n`;
}

if(num2 % num1 === 0){
    result += `Число ${num2} є дільником числа ${num1}`;
}else{
    result += `Число ${num2} не є дільником числа ${num1}`;
} 

alert(result);
