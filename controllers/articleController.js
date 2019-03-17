const queries = require('../db/queries');
const { model } = require('objection');
const Articles = require('../models/articles');
const article = new Articles();

function getArticles (ctx, next){ 
    return new Promise((resolve,reject)=> {
        Articles.query().then(articles =>{
            if(articles.length > 0){
                resolve(articles); 
            }else{
                reject('Articles haven\'t been found');
            }
        });
    }).then((data, err) => ctx.body = data,
    err=>{
        ctx.response.status = 404;
        ctx.body = err;
    });
    
} 
function getArticleById (ctx, next){
    return new Promise((resolve,reject)=> {
        article.getArticleById(ctx.params.id).then(articles =>{
            if(articles.length > 0){
                resolve(articles); 
            }else{
                reject('Article with such id hasn\'t been found');
            }
        });
    }).then((data,err) => ctx.body = data,
    err=>{
        ctx.response.status = 404;
        ctx.body = err;
    });

}

function addArticle (ctx, next){   
    return new Promise((resolve,reject)=> {
        article.addArticle(ctx.query).then(articles =>{
            if(articles){
                resolve(articles); 
            }else{
                reject(Error('Can\'t add article, something has gone wrong'));
            }
        });
    }).then(data => ctx.body = data); 
}

function editArticle (ctx, next){   
    return new Promise((resolve,reject)=> {
        article.editArticle(ctx.params.id,ctx.query).then(article =>{
            if(article){
                resolve(article); 
            }else{
                reject(Error('Can\'t edit article, something has gone wrong'));
            }
        });
    }).then(data => ctx.body = data);  
}

function delArticle (ctx, next){   
    return new Promise((resolve,reject)=> {
        article.deleteArticle(ctx.params.id).then(data =>{
            if(data){
                resolve(data); 
            }else{
                reject('Can\'t delete article, something has gone wrong');
            }
        });
    }).then(data => ctx.body = data);  
}


module.exports = {
    getArticles,
    editArticle,
    getArticleById,
    addArticle,
    delArticle
};