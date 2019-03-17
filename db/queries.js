const knex = require('./knex');

module.exports = {
    getAllArticles(){
        return knex('articles');
    },
    getArticleById(id){
        return knex('articles').where('id', id).first();
    },
    addArticle(article){
      return knex('articles').insert(article, '*');
    },
    deleteArticle(id){
        return knex('articles').where('id', id).del();
    },
    editArticle(id,article){
        return knex('articles').where('id', id).update(article, '*');
    },
    editComment(id,comment){
        return knex('comments').where('id', id).update(comment, '*');
    },
    addComment(comment){
        return knex('comments').insert(comment, '*');
    },
    getAllComments(){
        return knex('comments');
    },
    getCommentsByArticleId(id){
        return knex('comments').where('article_id', id);
    },
    delComment(id){
        return knex('comments').where('id', id).del();
    }
}