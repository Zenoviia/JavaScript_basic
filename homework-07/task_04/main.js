'use strict';


let employee = {
	salary: 2000,
	taxes: 200,
	position: "front-end developer",
	level: "middle",
    showInfo() {
        console.log(`${this.level} ${this.position} заробляє ${this.salary}`)
    }
};

let mulNumbers = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
};

let employee2 = {
    salary: 5000,
	taxes: 500,
	position: "back-end developer",
	level: "senior",
};

employee2.showInfo = employee.showInfo;


console.log('Object "employee" before multiplication:', employee);
employee.showInfo();

mulNumbers(employee);
console.log('Object "employee" after multiplication:', employee);
employee.showInfo();

console.log('Object "employee2":', employee2)
employee2.showInfo();