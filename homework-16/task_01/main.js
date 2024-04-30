'use strict';


//1
const promise1 = new Promise((resolve, reject) => {
    resolve('Hello world');
}).then((result) => {
    console.log(result);
});


//2
function delayedMsg(msg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, 2000);
    });
};

const promise2 = delayedMsg('Hi!');

promise2.then((msg) => {
    console.log(msg);
});


//3
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('Some error occured!'));
    }, 2000);
});

promise3.catch((error) => {
    console.error(error);
});


//4
function showResults(promise1, promise2, promise3) {
    Promise.all([promise1, promise2, promise3])
    .then((results) => {
        results.forEach((result) => {
           console.log(result);
        });
    });
}; 

const promise4 = new Promise((resolve, reject) => {
    resolve('the best');
});

const promise5 = new Promise((resolve, reject) => {
    resolve('JavaScript basic course');
});

const promise6 = new Promise((resolve, reject) => {
    resolve('is');
});

showResults(promise5, promise6, promise4);


//5 
function showFirst(promise1, promise2, promise3) {
    Promise.any([promise1, promise2, promise3])
    .then((results) => {
           console.log(results);
    });
}

showFirst(promise3, promise5, promise6);