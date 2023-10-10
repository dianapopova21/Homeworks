// Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?

const num = Number(prompt('Enter a two-digit number:'));
const firstNum = parseInt(num / 10);
const secondNum = num % 10;

if(firstNum > secondNum){
    alert(`${firstNum} > ${secondNum}`);
}
else if(firstNum < secondNum){
    alert(`${firstNum} < ${secondNum}`);
}
