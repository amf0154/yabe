const { Model } = require('objection');
const Comments = require('../models/comments');
class Articles extends Model {

static get tableName() {
    return 'articles';
}

static get relationMappings () {
    return {
      comments: {
        relation: Model.HasManyRelation,
        modelClass: Comments,
        join: {
          from: 'article.id',
          to: 'comments.article_id'
        }
      }
    }
}
static async getAllArticles() { 
  return await Articles.query();  
}

static async getArticleById(id){
    return await Articles.query().where('id', id) 
}

static async addArticle(body){
    return await Articles.query().insert(body);
}
static async editArticle(id,body){
    return await Articles.query().patch(body).where('id', id);
}
static async deleteArticle(id){
    return await Articles.query().deleteById(id);
}
}  
module.exports = Articles;