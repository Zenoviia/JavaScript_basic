'use strict';


let user = prompt('Who`s there?');
let pass;

if (user == null) {
    alert('Canceled');
} else if (user != 'Admin') {
    alert("I don't know you");
} else {
    pass = prompt('Password?');

    if (pass == null) {
        alert('Canceled');
    } else if (pass == 'TheMaster') {
        alert('Welcome!');
    } else {
        alert('Wrong password');
    }
} 






// if (user == null) {
//     alert('Canceled');
// } else if (user != 'Admin') {
//     alert("I don't know you");
// } else if ( user == 'Admin') {
//     alert(pass = prompt('Password?'));
// } 





// if (user == null) {
//     alert('Canceled');
// } else if (user == 'Admin') {
//     pass = prompt('Password?');
// } else {
//     alert('I don`t know you');
// } 



// if (user == null) {
//     alert('Canceled');
// } else if (user != 'Admin') {
//     alert("I don't know you");
// } else if (user == 'Admin') {
//     pass = prompt('Password?');

//     if (pass == null) {
//         alert('Canceled');
//     } else if (pass == 'TheMaster') {
//         alert('Welcome!');
//     } else {
//         alert('Wrong password');
//     }
// } 