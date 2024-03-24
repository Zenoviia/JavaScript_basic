'use strict';


let employee1 = {

    fullName: 'Sydney Addams',
    position: 'actress',
    salary: 10000,

}

let employee2 = {

    fullName: 'Tom White',
    position: 'director',
    salary: 15000,
 
}

function showInfo(currency = '') {
    let massage = `${this.fullName} на позиції ${this.position} заробляє ${this.salary}${currency}.`;
    console.log(massage);
}

let showInfoOfEmployee1 = showInfo.bind(employee1);
let showInfoOfEmployee2 = showInfo.bind(employee2);

console.log('-----without currency-----');
showInfo.apply(employee1);
showInfo.apply(employee2);
console.log('-----with currency-----');
showInfo.apply(employee1, ['$']);
showInfo.apply(employee2, ['$']);
console.log('-----with bind-----');
showInfoOfEmployee1('$');
showInfoOfEmployee2('грн'); 