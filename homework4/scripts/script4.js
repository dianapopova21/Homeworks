// Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.

const num = Number(prompt('Enter a number: '));
const lastNumber = num % 10;

if(lastNumber % 2 === 0){
    alert(`Number ${lastNumber} is pair`);
}else{
    alert(`Number ${lastNumber} is unpair`);
}