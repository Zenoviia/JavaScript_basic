'use strict';


const sales = {
    name: "Jorge Clunie",
    profit: 10000,
    clients: [
     {
      name: "Harrison ford",
      profit: 5000,
      clients: [
       {
        name: "Mila Kunis",
        profit: 1000,
        clients: [
         {
          name: "Julia Roberts",
          profit: 2000,
          clients: [{ name: "Richard Gir", profit: 3000, clients: [] }],
         },
        ],
       },
      ],
     },
     {
      name: "Barak Obama",
      profit: 7000,
      clients: [{ name: "Hilari Klinton", profit: 5000, clients: [] }],
     },
     {
      name: "Frodo",
      profit: 3000,
      clients: [
       { name: "Bilbo", profit: 2000, clients: [] },
       {
        name: "Legolas",
        profit: 3000,
        clients: [{ name: "Galadriel", profit: 1000, clients: [] }],
       },
      ],
     },
    ],
   };

   
function sumProfits(department) {
    
    if(Array.isArray(department)) {
        return department.reduce((acc, employee) => {
            return acc + employee.profit;
        }, 0);

    } else {
        let sum = 0;

        for (const key in department) {

            if (key === 'clients') {
                sum += sumProfits(department[key]);

            } else if (typeof department[key] === 'object') {
                sum += sumProfits(department[key]);
            }
        }
        return sum;
    }
}

console.log(sumProfits(sales));