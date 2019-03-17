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
        queries.getCommentsByArticleId(ctx.params.id).then(comments =>{
            if(comments){
                resolve(comments); 
            }else{
                reject(Error('Comments with such article id haven\'t been not found'));
            }
        });
    }).then((data) => ctx.body = data);

}

function addComment (ctx, next){   
    return new Promise((resolve,reject)=> {
        queries.addComment(ctx.query).then(comment =>{
            if(comment){
                resolve(comment); 
            }else{
                reject(Error('Can\'t add comment, something has gone wrong'));
            }
        });
    }).then((data) => ctx.body = data);  
}

function editComment (ctx, next){   
    return new Promise((resolve,reject)=> {
        queries.editComment(ctx.params.id,ctx.query).then(comment =>{
            if(comment){
                resolve(comment); 
            }else{
                reject(Error('Can\'t edit comment, something has gone wrong'));
            }
        });
    }).then((data) => ctx.body = data);  
}

function delComment (ctx, next){   
    return new Promise((resolve,reject)=> {
        queries.delComment(ctx.params.id).then(comment =>{
            if(comment){
                resolve(comment); 
            }else{
                reject(Error('Can\'t delete comment, something has gone wrong'));
            }
        });
    }).then((data) => ctx.body = data);  
}

module.exports = {
    getComments,
    addComment,
    delComment,
    editComment,
    getCommentsByArticleId
};