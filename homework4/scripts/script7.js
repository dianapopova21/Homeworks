// Дано тризначне число.
const num = prompt('Введіть тризначне число:');
const fisrtNum = parseInt(num / 100);
const secondNum = parseInt((num % 100) / 10);
const thirdNum = num % 10;
let result = '';

//1. Чи правда, що всі цифри однакові?
if(fisrtNum === secondNum && secondNum === thirdNum){
    result += 'Всі цифри однакові\n';
}

//2. Чи є серед цифр цифри однакові?
if(fisrtNum === secondNum || secondNum === thirdNum || fisrtNum === thirdNum){
    result += 'Серед цифр є однакові';
}

alert(result);
