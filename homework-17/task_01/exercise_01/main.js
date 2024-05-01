'use strict';


const leftClick = document.querySelector('button');
const rightClick = document.querySelector('button');
const doubleClick = document.querySelector('button');

leftClick.addEventListener('click', () => {
    console.log('Клік');
});

rightClick.addEventListener('contextmenu', () => {
    console.log('Правий клік');  
});

doubleClick.addEventListener('dblclick', () => {
    console.log('Подвійний клік');
});