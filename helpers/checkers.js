function isValidId(ctx,next){
    return (!isNaN(ctx.params.id)) ? next() : ctx.response.status = 400;  
}

function isValidArticle(ctx,next){
    let hasTitle = typeof ctx.query.title == 'string' && ctx.query.title.trim() != '';
    let hasDescription = typeof ctx.query.description == 'string' && ctx.query.description.trim() != '';
    let hasAuthor = typeof ctx.query.author == 'string' && ctx.query.author.trim() != '';
    return (hasTitle && hasDescription && hasAuthor) ? next() : ctx.response.status = 400; 
}
function isValidComment(ctx,next){
    let hasDescription = typeof ctx.query.description == 'string' && ctx.query.description.trim() != '';
    let hasAuthor = typeof ctx.query.author == 'string' && ctx.query.author.trim() != '';
    let hasArticle_id = ctx.query.article_id.trim() != '';
    return (hasDescription && hasAuthor && hasArticle_id) ? next() : ctx.response.status = 400; 
}

module.exports ={
    isValidId,
    isValidComment,
    isValidArticle
}