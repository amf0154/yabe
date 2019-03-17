const articlesCtrl = require('../controllers/articleController');
const commentsCtrl = require('../controllers/commentsController');
const checks = require('../helpers/checkers');
const api_path = '/api/';

module.exports = ({ router }) => {   
router.get('/', ctx => ctx.body = 'What are you looking for? :P' ); 
router.get(api_path + 'articles', articlesCtrl.getArticles); 
router.get(api_path + 'article/:id', checks.isValidId, articlesCtrl.getArticleById);  
router.put(api_path + 'article/:id', checks.isValidId, checks.isValidArticle, articlesCtrl.editArticle); 
router.post(api_path + 'article', checks.isValidArticle, articlesCtrl.addArticle); 
router.delete(api_path + 'article/:id', checks.isValidId, articlesCtrl.delArticle);  
router.get(api_path + 'comments', commentsCtrl.getComments); 
router.get(api_path + 'comment/:id',checks.isValidId, commentsCtrl.getCommentsByArticleId);
router.put(api_path + 'comment/:id', checks.isValidId, checks.isValidComment, commentsCtrl.editComment); 
router.post(api_path + 'comment',checks.isValidComment, commentsCtrl.addComment); 
router.delete(api_path + 'comment/:id',checks.isValidId, commentsCtrl.delComment);
};