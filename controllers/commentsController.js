const queries = require('../db/queries');
const Comments = require('../models/comments');
const comment = new Comments();

function getComments (ctx, next){
    return new Promise((resolve,reject)=> {
        Comments.query().then(comments =>{
            if(comments){
                resolve(comments); 
            }else{
                reject('Comments haven\'t been found');
            }
        });
    }).then((data, err) => ctx.body = data,
    err=>{
        ctx.response.status = 404;
        ctx.body = err;
    });

} 
function getCommentsByArticleId (ctx, next){
    return new Promise((resolve,reject)=> {
        comment.getCommentsByArticleId(ctx.params.id).then(comments =>{
            if(comments){
                resolve(comments); 
            }else{
                reject('Comments with such article id haven\'t been found');
            }
        });
    }).then((data, err) => ctx.body = data,
    err=>{
        ctx.response.status = 404;
        ctx.body = err;
    });


}

function addComment (ctx, next){   
    return new Promise((resolve,reject)=> {
        comment.addComment(ctx.query).then(comment =>{
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
        comment.editComment(ctx.params.id,ctx.query).then(comment =>{
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
        comment.delComment(ctx.params.id).then(comment =>{
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