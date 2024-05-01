'use strict';


let firstValue = document.querySelector('.value1');
let secondValue = document.querySelector('.value2');
let result = document.querySelector('.result');
let plusButton = document.querySelector('button:nth-of-type(1)');
let minusButton = document.querySelector('button:nth-of-type(2)');
let multiplyButton = document.querySelector('button:nth-of-type(3)');
let divideButton = document.querySelector('button:nth-of-type(4)');
let equalButton = document.querySelector('button:nth-of-type(5)');

let resultValue = 0;
let firstNum = 0;
let secondNum = 0;
let arithmeticButtonClicked = false;

equalButton.style.borderColor = 'red';
equalButton.style.backgroundColor = 'lightcoral';

buttonsBorderTo1px(plusButton, minusButton, multiplyButton, divideButton);

function buttonsBorderTo1px(...buttons) {
    buttons.forEach(button => {
        button.style.borderWidth = '1px';
    });
}

let equalButtonToGreen = () => {
    equalButton.style.borderColor = 'green';
    equalButton.style.backgroundColor = 'lightgreen';
}

const updateValues = () => {
    firstNum = parseFloat(firstValue.value);
    secondNum = parseFloat(secondValue.value);
}

firstValue.addEventListener('keyup', () => {
    updateValues();
    if (isNaN(firstNum)) {
        firstValue.style.borderColor = 'red';
    } else {
        firstValue.style.borderColor = '';
    }
})

secondValue.addEventListener('keyup', () => {
    updateValues();
    if (isNaN(secondNum)) {
        secondValue.style.borderColor = 'red';
    } else {
        secondValue.style.borderColor = '';
    }
})

plusButton.addEventListener('click', (event) => {
    updateValues();
    arithmeticButtonClicked = true;
    if (!isNaN(firstNum) && !isNaN(secondNum)) {
        resultValue = firstNum + secondNum;
        equalButtonToGreen();
        plusButton.style.borderWidth = '2px';
        buttonsBorderTo1px(minusButton, multiplyButton, divideButton);
    }
});

minusButton.addEventListener('click', (event) => {
    updateValues();
    arithmeticButtonClicked = true;
    if (!isNaN(firstNum) && !isNaN(secondNum)) {
        resultValue = firstNum - secondNum;
        equalButtonToGreen();
        minusButton.style.borderWidth = '2px';
        buttonsBorderTo1px(plusButton, multiplyButton, divideButton);
    }
});

multiplyButton.addEventListener('click', (event) => {
    updateValues();
    arithmeticButtonClicked = true;
    if (!isNaN(firstNum) && !isNaN(secondNum)) {
        resultValue = firstNum * secondNum;
        equalButtonToGreen();
        multiplyButton.style.borderWidth = '2px';
        buttonsBorderTo1px(plusButton, minusButton, divideButton);
    }
});

divideButton.addEventListener('click', (event) => {
    updateValues();
    arithmeticButtonClicked = true;
    if (!isNaN(firstNum) && !isNaN(secondNum)) {
        resultValue = firstNum / secondNum;
        equalButtonToGreen();
        divideButton.style.borderWidth = '2px';
        buttonsBorderTo1px(plusButton, minusButton, multiplyButton);
    }
});

equalButton.addEventListener('click', (event) => {
    updateValues();
    if (isNaN(firstNum) && isNaN(secondNum)) {
        firstValue.style.borderColor = 'red';
        secondValue.style.borderColor = 'red';
        alert('Заповніть поля!');
    } else if (isNaN(firstNum)) {
        firstValue.style.borderColor = 'red';
        alert('Заповніть перше поле!');
    } else if (isNaN(secondNum)) {
        secondValue.style.borderColor = 'red';
        alert('Заповніть друге поле!');
    } else if (!arithmeticButtonClicked) {
        alert('Натисніть кнопку арифметичної операції!')
    } else {
        result.value = resultValue;
    }
});