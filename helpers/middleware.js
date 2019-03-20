const Joi = require('joi');

const schemaComments = Joi.object().keys({
    article_id: Joi.number().integer().required(),
    description: Joi.string().max(250).required(),
    author: Joi.string().max(30).required(),
});
const schemaArticles = Joi.object().keys({
    title: Joi.string().max(30).required(),
    description: Joi.string().max(250).required(),
    author: Joi.string().max(30).required(),
});

const schemaCheckId = Joi.object().keys({
    id: Joi.number().integer().required(),
});

function checkComment(ctx,next){
    const result = Joi.validate(ctx.request.body, schemaComments);
    const { value, error } = result;
    const valid = error == null;
    return (valid) ? next() : ctx.response.status = 400 ;
}
function checkArticle(ctx,next){
    const result = Joi.validate(ctx.request.body, schemaArticles);
    const { value, error } = result;
    const valid = error == null;
    return (valid) ? next() : ctx.response.status = 400 ;
}
function checkId(ctx,next){
    const result = Joi.validate(ctx.params, schemaCheckId);
    const { value, error } = result;
    const valid = error == null;
    return (valid) ? next() : ctx.response.status = 400 ;
} 
    
module.exports ={
    checkComment,
    checkArticle,
    checkId
}
