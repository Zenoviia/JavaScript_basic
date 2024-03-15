'use strict';


let books = {
    countries: [
     {
      country: "Англія",
      authors: [
       {
        author: "Артур Конан Дойль",
        books: [
         {
          title: "Пригоди Шерлока Холмса",
          year: 1887,
          genre: "Роман"
         },
         {
          title: "Загадка Боскомського долу",
          year: 1912,
          genre: "Детектив"
         },
         {
          title: "Загадка Червоного Цирку",
          year: 1927,
          genre: "Детектив"
         }
        ]
       }
      ]
     },
     {
      country: "Україна",
      authors: [
       {
        author: "Макс Кідрук",
        books: [
         {
          title: "Твердиня",
          year: 2013,
          genre: "Роман"
         },
         {
          title: "Нові темні віки",
          year: 2023,
          genre: "Роман"
         }
        ]
       },
       {
        author: "Тарас Шевченко",
        books: [
         {
          title: "Кобзар",
          year: 1840,
          genre: "Роман"
         }
        ]
       }
      ]
     } 
    ]
   }


let {countries: [{authors: [{books: [firstBook, , thirdBook]}]}, {authors: [{books: [ , {title: secondKidrukBookName}]}, {books:[{year: yearOfPublicationKobzar}]}]}]} = books;

   console.log('Перша книга Конан Дойля:', firstBook);
   console.log('Третя книга Конан Дойля:', thirdBook);
   console.log(`Друга книга Макса Кідрука: "${secondKidrukBookName}"`);
   console.log(`Рік видання кобзаря: ${yearOfPublicationKobzar}`);