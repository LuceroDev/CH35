const { default: test } = require('node:test');
const calculator = require('../modules/calculator.js');

//Primer test para la suma
test('La suma de dos números y el valor resultante', () => {
    expect(calculator.sum(10, 20)).toBe(30);
});

//Segundo test para la resta 
test('La resta de dos numeros y el valor resultante', () => {
    expect(calculator.substract(10, 20)).toBe(-10);
});