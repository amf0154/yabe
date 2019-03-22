const Comments = require('../models/comments');
const Articles = require('../models/articles');
async function getComments (ctx, next){
    return await Comments.getAllComments().then(data => ctx.body = data);
} 

async function getCommentsByArticleId (ctx, next){
    let article = await Articles.getArticleById(ctx.params.id);
    if(article.length !=0){
        return await Comments.getCommentsByArticleId(ctx.params.id).then(data => ctx.body = data);
    }else{
        ctx.body = "Incorrect article id!";
        ctx.response.status = 400;
    }
}

async function addComment (ctx, next){   
    let article = await Articles.getArticleById(ctx.request.body.article_id);
    if(article.length !=0){
        return await Comments.addComment(ctx.request.body).then(data => ctx.body = data);
    }else{
        ctx.body = "Can't find article for this comment!";
        ctx.response.status = 404;
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