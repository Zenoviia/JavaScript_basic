const number1 = +prompt('Введіть число №1:');
const number2 = +prompt('Введіть число №2:');

const rem = (number1 % number2);
const pow = (number1 ** number2);

console.log(`Залишок від ділення ${number1}, на ${number2} дорівнює ${rem}.`);
console.log(`Результат зведеня ${number1}, у ступінь ${number2} дорівнює ${pow}.`);