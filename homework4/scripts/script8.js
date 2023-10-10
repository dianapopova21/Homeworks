// Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741).

const num = prompt('Введіть шестизначне число:');
const rightSide = parseInt(num / 1000);
const leftSide = parseInt(num % 1000);

const rightFisrtNum = parseInt(rightSide / 100);
const rightSecondNum = parseInt((rightSide % 100) / 10);
const rightThirdNum = rightSide % 10;

const leftFisrtNum = parseInt(leftSide / 100);
const leftSecondNum = parseInt((leftSide % 100) / 10);
const leftThirdNum = leftSide % 10;

if(rightFisrtNum === leftThirdNum && rightSecondNum === leftSecondNum && rightThirdNum === leftFisrtNum){
    alert(`Число ${num} є дзеркальним`);
}else{
    alert(`Число ${num} не є дзеркальним`)
}
