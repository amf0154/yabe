const Comments = require('../models/comments');

async function getComments (ctx, next){
    return await Comments.getAllComments().then(data => ctx.body = data);
} 

async function getCommentsByArticleId (ctx, next){
    return await Comments.getCommentsByArticleId(ctx.params.id).then(data => ctx.body = data);
}

async function addComment (ctx, next){   
    try{
        return await Comments.addComment(ctx.request.body).then(data => ctx.body = data);
    }catch(err){
        ctx.body = err.detail;
        ctx.response.status = 400;
    }
}

async function editComment (ctx, next){   
    return await Comments.editComment(ctx.params.id,ctx.request.body).then(data => ctx.body = data);  
}

async function delComment (ctx, next){   
    return await Comments.delComment(ctx.params.id).then(data => ctx.body = data);  
}

module.exports = {
    getComments,
    addComment,
    delComment,
    editComment,
    getCommentsByArticleId
};