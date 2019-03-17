const queries = require('../db/queries');
const checks = require('../helpers/checkers');

function getArticles (ctx, next){
    return new Promise((resolve,reject)=> {
        queries.getAllArticles().then(articles =>{
            if(articles){
                resolve(articles); 
            }else{
                reject('data not found!');
            }
        });
    }).then((data) => ctx.body = data);

} 
function getArticleById (ctx, next){
    return new Promise((resolve,reject)=> {
        queries.getArticleById(ctx.params.id).then(articles =>{
            if(articles){
                resolve(articles); 
            }else{
                reject(Error('Article with such id haven\'t been not found'));
            }
        });
    }).then((data) => ctx.body = data);

}

function addArticle (ctx, next){
 // queries.addArticle(ctx.query)
    ctx.body = ctx.query;
}


 function query (ctx, next){
    let req = ctx.query;
    console.log(req);
    ctx.body = req;
}

module.exports = {
    getArticles,
    getArticleById,
    addArticle,
    query
};