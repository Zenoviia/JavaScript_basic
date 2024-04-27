'use strict';


const customers = {
    "Katy Perry": [
     { name: "Borsh", time: 5000 },
     { name: "vareniki", time: 1000 },
     { name: "uzvar", time: 500 },
    ],
    "Cristiano Ronaldo": [
     { name: "Soup", time: 7000 },
     { name: "porridge", time: 1000 },
     { name: "water", time: 100 },
    ],
    "Jason Statham": [
     { name: "fried potatoes", time: 6000 },
     { name: "steak", time: 10000 },
     { name: "juice", time: 100 },
    ],
   };

function cook(customers, cb) {
    
    function getMaxTime(customers) {
        let maxTime = 0;

        for (const customer in customers) {
            const order = customers[customer];
            const orderTime = order.reduce((acc, item) => acc + item.time, 0);
            if (orderTime > maxTime) {
                maxTime = orderTime
            }
        }

    return maxTime;

    }

    const maxTime = getMaxTime(customers);

    function orderIsReady(customer) {
        console.log(`Шановний відвідувач, ${customer}, ваше замовлення готове. Смачного!`);
        cb?.();
    }

    for (const customer in customers) {
        const order = customers[customer];
        let currentTime = 0;
        order.forEach(item => {
            setTimeout(() => {
                console.log(`Шановний відвідувач, ${customer}, ваше замовлення готове: ${item.name}`);
                if (currentTime === maxTime - item.time) {
                    orderIsReady(customer);
                }
            }, currentTime);
            currentTime += item.time;
        });
    }
}

cook(
    customers, () => {
        console.log('Усі замовлення готові!');
    }
)