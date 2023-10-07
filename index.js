"use strict"
let num1, num2;

num1 = prompt('Enter the first number');
num2 = prompt('Enter the second number');

alert('Calculations is finished!' + '\n' +
`Sum: ${num1} + ${num2} = ${+num1 + +num2}` + '\n' +
`Diff: ${num1} - ${num2} = ${+num1 - +num2}` + '\n' +
`Mult: ${num1} * ${num2} = ${+num1 * +num2}` + '\n' +
`Div: ${num1} / ${num2} = ${+num1 / +num2}`);
