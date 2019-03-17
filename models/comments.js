const { Model } = require('objection');

class Comments extends Model {

static get tableName() {
    return 'comments';
}

async getAllComments() { 
  return await Comments.query();  
}

async getCommentsByArticleId(id){
    return await Comments.query().where('article_id', id); 
}

async getCommentsById(id){
    return await Comments.query().where('id', id); 
}

async addComment(body){
    return await Comments.query().insert(body);
}
async editComment(id,body){
    return await Comments.query().patch(body).where('id', id);
}
async delComment(id){
    return await Comments.query().deleteById(id);
}

}  
module.exports = Comments;