// Дано два різні числа. Визначити, яке з них більше, а яке менше.

const num1 = Number(prompt('Enter the first number: '));
const num2 = Number(prompt('Enter the second number: '));

if(num1 > num2){
    alert(`${num1} > ${num2}`);
}else if(num2 > num1){
    alert(`${num2} > ${num1}`);
}else{
    alert(`${num1} = ${num2}`);
}