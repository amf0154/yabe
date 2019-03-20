const Articles = require('../models/articles');

async function getArticles (ctx, next){
    return await Articles.getAllArticles().then(data => ctx.body = data); 
}

async function getArticleById (ctx, next){
    return await Articles.getArticleById(ctx.params.id).then(data => ctx.body = data);
}

async function addArticle (ctx, next){ 
    console.log(ctx.request.body);
    try{
        return await Articles.addArticle(ctx.request.body).then(data => ctx.body = data);
    }catch(err){
        ctx.body = err.detail;
        ctx.response.status = 400;
    }
}

async function editArticle (ctx, next){   
    return await Articles.editArticle(ctx.params.id,ctx.request.body).then(data => ctx.body = data);  
}

async function delArticle (ctx, next){   
    return await  Articles.deleteArticle(ctx.params.id).then(data => ctx.body = data);  
}


module.exports = {
    getArticles,
    editArticle,
    getArticleById,
    addArticle,
    delArticle
};