exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert(
        [
          {
              title: "First Article",
              description: "Just a first description. The knowledges are best investmens in ur life! ",
              author: "Friderix Shopen"
          },
          {
              title: "Second Article",
              description: "Just a second description. The knowledges are best investmens in ur life! ",
              author: "Iogan Straus"
          },  
          {
              title: "Third Article",
              description: "Just a third description. The knowledges are best investmens in ur life! ",
              author: "Antonio Vivaldi"
          },
          {
              title: "Fourth Article",
              description: "Just a fourth description. The knowledges are best investmens in ur life! ",
              author: "Iogan Bah"
          },
          {
              title: "Fifth Article",
              description: "Just a fifth description. The knowledges are best investmens in ur life! ",
              author: "Petr Chaikovskij"
          }       
          ]

      );
    }).then(()=>{
        return knex('comments').del()
          .then(function () {
            // Inserts seed entries
            return knex('comments').insert(
              [
                {
                  article_id: 1,
                  description: "Wow, cool post!",
                  author: "Alex"
                },
                {
                  article_id: 1,
                  description: "Nice!",
                  author: "Bon"
                },  
                {
                  article_id: 2,
                  description: "Well done!",
                  author: "Green"
                },
                {
                  article_id: 3,
                  description: "Wow, cool post!",
                  author: "Alex"
                },
                {
                  article_id: 3,
                  description: "Great post!",
                  author: "Bonda"
                }       
              ]
            );
          });  
    })
};
