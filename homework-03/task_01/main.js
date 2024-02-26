'use strict';


let num = +prompt("Введіть число:");

if (num > 10) { 
    console.log('Введене число більше за 10');
} else if (num < 10 ) { 
    console.log('Введене число менше за 10');
} else {
    console.log('Введене число дорівнює 10');
}