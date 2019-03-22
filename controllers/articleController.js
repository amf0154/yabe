const Articles = require('../models/articles');

async function getArticles (ctx, next){
    return await Articles.getAllArticles().then(data => ctx.body = data); 
}

async function getArticleById (ctx, next){
    let article = await Articles.getArticleById(ctx.params.id);
    if(article.length !=0){
        return await Articles.getArticleById(ctx.params.id).then(data => ctx.body = data);
    }else{
        ctx.body = "Can't find article with such id!";
        ctx.response.status = 400;
    }
}

async function addArticle (ctx, next){ 
    return await Articles.addArticle(ctx.request.body).then(data => ctx.body = data);
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