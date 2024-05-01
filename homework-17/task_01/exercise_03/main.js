'use strict';


const text = document.querySelector('input[type=text]');
let h1 = document.querySelector('h1')

text.addEventListener('keyup', (event) => {
    h1.innerHTML = event.target.value;
});