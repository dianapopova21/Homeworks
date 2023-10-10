// Дано тризначне число.

const num = prompt('Введіть тризначне число:');
const fisrtNum = parseInt(num / 100);
const secondNum = parseInt((num % 100) / 10);
const thirdNum = num % 10;
const sum = fisrtNum + secondNum + thirdNum;
const mult = fisrtNum * secondNum * thirdNum;
let result = '';

//1. Визначити чи є парною сума його цифр.
if(sum%2 === 0){
    result += `Сума цифр числа ${num} є парною\n`;
}else{
    result += `Сума цифр числа ${num} є непарною\n`;
}

//2. Визначити, чи кратна сума цифр п'яти.
if(sum % 5 === 0){
    result += `Сума цифр числа ${num} кратна 5\n`;
}else{
    result += `Сума цифр числа ${num} не кратна 5\n`;
}

//3. Визначити чи є добуток його цифр більше 100.
if(mult > 100){
    result += `Добуток цифр числа ${num} > 100`;
}else{
    result += `Добуток цифр числа ${num} <(або =) 100`;
}

alert(result);