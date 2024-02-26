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