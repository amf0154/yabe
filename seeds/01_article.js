exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('article').del()
    .then(function () {
      // Inserts seed entries
      return knex('article').insert(
        [
          {
              title: "First Article",
              description: "Just a first description. The knowledges are best investmens in ur life! ",
              rating: 1,
              url: "http://sgsrv.ru"
          },
          {
              title: "Second Article",
              description: "Just a second description. The knowledges are best investmens in ur life! ",
              rating: 2,
              url: "http://sgsrv.ru"
          },  
          {
              title: "Third Article",
              description: "Just a third description. The knowledges are best investmens in ur life! ",
              rating: 3,
              url: "http://sgsrv.ru"
          },
          {
              title: "Fourth Article",
              description: "Just a fourth description. The knowledges are best investmens in ur life! ",
              rating: 4,
              url: "http://sgsrv.ru"
          },
          {
              title: "Fifth Article",
              description: "Just a fifth description. The knowledges are best investmens in ur life! ",
              rating: 5,
              url: "http://sgsrv.ru"
          }       
          ]

      );
    });
};
