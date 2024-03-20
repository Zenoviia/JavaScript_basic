'use strict';

let array = ["материк", "мошкара", "апельсин", "спанієль", "мінотавр", "ромашка", "норматив", "метрика"];

let aclear = (arr) => {

    let splitedArray = arr.map(item => item.split(''));
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let sortedWord = splitedArray[i].sort().join('');
        map.set(sortedWord, arr[i])};

    let sortedKeysOfMap = Array.from(map.keys()).sort();

    for (let key of sortedKeysOfMap) {
        console.log(map.get(key));
    }

}

aclear(array);