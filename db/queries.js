const knex = require('./knex');

module.exports = {
    getAll(){
        return knex('article');
    },
    getArticleById(id){
        return knex('article').where('id', id).first();
    }
}