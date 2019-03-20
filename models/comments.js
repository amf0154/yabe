const { Model } = require('objection');
const Articles = require('../models/articles');
class Comments extends Model {

static get tableName() {
    return 'comments';
}

static get relationMappings () {
    return {
      articles: {
        relation: Model.BelongsToOneRelation,
        modelClass: Articles,
        join: {
          from: 'comments.article_id',
          to: 'article.id'
        }
      }
    }
}

static async getAllComments() { 
  return await Comments.query();  
}

static async getCommentsByArticleId(id){
    return await Comments.query().where('article_id', id); 
}

static async getCommentsById(id){
    return await Comments.query().where('id', id); 
}

static async addComment(body){
    return await Comments.query().insert(body);
}
static async editComment(id,body){
    return await Comments.query().patch(body).where('id', id);
}
static async delComment(id){
    return await Comments.query().deleteById(id);
}

}  
module.exports = Comments;