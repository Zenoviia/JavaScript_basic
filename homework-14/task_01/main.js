'use strict';


// function print(start, end)

function print(start, end) {

    if (start > end) {
        return;
    } 

    console.log(start);
    start += 1;
    print(start, end);

}

console.log('--print from start to end--');
print(3, 12);



// recursion factorial(num)

function factorial(num) {

    if (num <= 1) {
        return 1;
    }

    return num * factorial(num - 1);

}

console.log('--count factorial--');
console.log(factorial(5));



// function createMulBy(num)

function createMulBy(num1) {

    return function (num2) {

        return num2 * num1;

    }
}

const multBy5 = createMulBy(5);
const multBy2 = createMulBy(2);

console.log('--create multiple by number--');

console.log(multBy5(4)); // 20
console.log(multBy5(6)); // 30

console.log(multBy2(4)); // 8
console.log(multBy2(6)); // 12