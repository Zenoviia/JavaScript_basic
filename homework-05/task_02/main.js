'use strict';


// function pow(x = 9, n = 1) {

//     let result = 1;

//     for (let i = 1; i <= n; i++) {
//         result = x * result;
//     } console.log(result)
// }  

// pow(2, 4);



let pow = (x = 9, n = 1) => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = x * result;
    } 
console.log(result);
}

pow(3, 4);