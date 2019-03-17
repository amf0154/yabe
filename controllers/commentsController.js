const queries = require('../db/queries');


function getComments (ctx, next){
    return new Promise((resolve,reject)=> {
        queries.getAllComments().then(comments =>{
            if(comments){
                resolve(comments); 
            }else{
                reject('comments not found!');
            }
        });
    }).then((data) => ctx.body = data);

} 
function getCommentsByArticleId (ctx, next){
    return new Promise((resolve,reject)=> {
        queries.getCommentsByArticleId(ctx.params.article_id).then(comments =>{
            if(comments){
                resolve(comments); 
            }else{
                reject(Error('Comments with such article id haven\'t been not found'));
            }
        });
    }).then((data) => ctx.body = data);

}

module.exports = {
    getComments,
    getCommentsByArticleId
};