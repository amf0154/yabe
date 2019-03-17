exports.up = function(knex, Promise) {
  return knex.schema.hasTable('articles').then((exists) => {
      console.log('does knex have article table?', exists);
      if (!exists) {
          return knex.schema.createTable('articles', (table) => {
              table.increments('id');
              table.text('title');
              table.text('description');
              table.text('author');
          });
      }
  }).then(() => {
      return knex.schema.hasTable(`comments`).then((exists) => {
          console.log('does knex have comments table?', exists);
          if (!exists) {
              return knex.schema.createTable(`comments`, (table)=> {
                  table.integer('article_id').unsigned().notNullable();
                  table.increments('id');
                  table.text('author');
                  table.text('description');
                  table.foreign('article_id').references('id').inTable('articles');
              })
          }
      })
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('articles')
    .then(() => knex.schema.dropTable('comments'));
};