


function home (ctx, next){
    ctx.body = 'Hello World!';

}

function params (ctx, next){
  // ctx.response.status = 401;
  let req = ctx.params.id;
  console.log(req);
  ctx.body = req;
 
 }
 function query (ctx, next){
    let req = ctx.query;
    console.log(req);
    ctx.body = req;
}

module.exports = {
    home,
    params,
    query
};