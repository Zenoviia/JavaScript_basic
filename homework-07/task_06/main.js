'use strict';


const person = {
    name: "John",
    age: 30,
    job: 'software engineer',
    address: {
     city: "New York",
     country: "USA"
    }
};


let {name, age, job: currentJob, address: {city, country: currentCountry}} = person;

console.log(`name: ${name}, age: ${age}`);
console.log('current job:', currentJob);
console.log('city:', city);
console.log('current country:', currentCountry);