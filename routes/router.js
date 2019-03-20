const articlesCtrl = require('../controllers/articleController');
const commentsCtrl = require('../controllers/commentsController');
const middleware = require('../helpers/middleware');
const api_path = '/api/';
module.exports = ({ router }) => {   
router.get('/', ctx => ctx.body = 'What are you looking for? :P' ); 

router.get(api_path + 'articles', articlesCtrl.getArticles); 
router.get(api_path + 'articles/:id', middleware.checkId, articlesCtrl.getArticleById); 
router.put(api_path + 'articles/:id', middleware.checkId, middleware.checkArticle, articlesCtrl.editArticle); 
router.post(api_path + 'articles', middleware.checkArticle, articlesCtrl.addArticle); 
router.delete(api_path + 'articles/:id', middleware.checkId, articlesCtrl.delArticle);

router.get(api_path + 'comments', commentsCtrl.getComments); 
router.get(api_path + 'comments/:id', middleware.checkId, commentsCtrl.getCommentsByArticleId);
router.put(api_path + 'comments/:id', middleware.checkId, middleware.checkComment, commentsCtrl.editComment); 
router.post(api_path + 'comments', middleware.checkComment, commentsCtrl.addComment); 
router.delete(api_path + 'comments/:id', middleware.checkId, commentsCtrl.delComment);
};