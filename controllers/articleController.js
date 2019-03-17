const queries = require('../db/queries');

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
    return new Promise((resolve,reject)=> {
        queries.addArticle(ctx.query).then(articles =>{
            if(articles){
                resolve(articles); 
            }else{
                reject(Error('Can\'t add article, something has gone wrong'));
            }
        });
    }).then((data) => ctx.body = data);  
}

function editArticle (ctx, next){   
    return new Promise((resolve,reject)=> {
        queries.editArticle(ctx.params.id,ctx.query).then(article =>{
            if(article){
                resolve(article); 
            }else{
                reject(Error('Can\'t edit article, something has gone wrong'));
            }
        });
    }).then((data) => ctx.body = data);  
}

function delArticle (ctx, next){   
    return new Promise((resolve,reject)=> {
        queries.deleteArticle(ctx.params.id).then(article =>{
            if(article){
                resolve(article); 
            }else{
                reject(Error('Can\'t delete article, something has gone wrong'));
            }
        });
    }).then((data) => ctx.body = data);  
}


module.exports = {
    getArticles,
    editArticle,
    getArticleById,
    addArticle,
    delArticle
};