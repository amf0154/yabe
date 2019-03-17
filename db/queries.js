const knex = require('./knex');

module.exports = {
    getAllArticles(){
        return knex('articles');
    },
    getArticleById(id){
        return knex('articles').where('id', id).first();
    },
    getAllComments(){
        return knex('comments');
    },
    getCommentsByArticleId(id){
        return knex('comments').where('article_id', id);
    }
}