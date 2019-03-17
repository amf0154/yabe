const { Model } = require('objection');

class Articles extends Model {

static get tableName() {
    return 'articles';
}

async getAllArticles() { 
  return await Articles.query();  
}

async getArticleById(id){
    return await Articles.query().where('id', id) 
}

async getArticleById(id){
    return await Articles.query().where('id', id) 
}

async addArticle(body){
    return await Articles.query().insert(body);
}
async editArticle(id,body){
    return await Articles.query().patch(body).where('id', id);
}
async deleteArticle(id){
    return await Articles.query().deleteById(id);
}
}  
module.exports = Articles;