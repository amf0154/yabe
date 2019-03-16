exports.up = function(knex, Promise) {
    let article = knex.schema.createTable('article', (table) => {
      table.increments();
      table.text('title');
      table.text('description');
      table.float('rating');
      table.text('url');
    }).then();
    let comments = knex.schema.createTable('comments', (table) => {
      table.increments();
      table.text('author');
      table.text('description');
    }).then(); 
    return Promise.all([article, comments]);
  };

exports.down = function(knex, Promise) {
    let article = knex.schema.dropTable('article').then();
    let comments = knex.schema.dropTable('comments').then(); 
    return Promise.all([article, comments]);
};
