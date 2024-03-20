'use strict';


const books = {
    fantastic: {
     "Френк Герберт": [
      {
       title: "Дюна",
       year: 1965,
      },
      {
       title: "Дюна. Месія месіїв",
       year: 1969,
      },
      {
       title: "Діти Дюни",
       year: 1976,
      },
     ],
     "Станіслав Лем": [
      {
       title: "Соляріс",
       year: 1961,
      },
      {
       title: "Соляріс. Зіркові щоденники Ійона Тихого",
       year: 1971,
      },
     ],
    },
    novel: {
     Ремарк: [
      {
       title: "Три товарища",
       year: 1936,
      },
      {
       title: "Триумфальна арка",
       year: 1942,
      },
     ],
     "Джордж Оруелл": [
      {
       title: "1984",
       year: 1949,
      },
      {
       title: "Ферма Господаря Вилки",
       year: 1945,
      },
     ],
    },
    fantasy: {
     "Володар перснів": [
      {
       title: "Братство Кільця",
       year: 1954,
      },
      {
       title: "Дві вежі",
       year: 1954,
      },
      {
       title: "Повернення короля",
       year: 1955,
      },
     ],
     "Гаррі Поттер": [
      {
       title: "Гаррі Поттер і Філософський камінь",
       year: 1997,
      },
      {
       title: "Гаррі Поттер і тайна кімната",
       year: 1998,
      },
     ],
    },
   };


books[Symbol.iterator] = function() {

    let titles = [];
    let i = 0;

    for (const category in this) {
        const authors = this[category];
        for (const authorKey in authors) {
            const books = authors[authorKey];
            for (const book of books) {
                titles.push(book.title);
            }
        }
    }


    return {
        next() {
            if (i < titles.length) {
                return {value: titles[i++], done: false};
            }
            return {done: true};
        }
    }
}

for (const title of books) {
    console.log(title)
}