function isValidId(ctx,next){
    if (!isNaN(ctx.params.id)){
        next();
    } else{
        throw Error('Invalid ID');
    }
}

module.exports ={
    isValidId
}