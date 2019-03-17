const articlesCtrl = require('../controllers/articleController');
const commentsCtrl = require('../controllers/commentsController');
const checks = require('../helpers/checkers');

module.exports = ({ router }) => {
const api_path = "/api/";
router.get(api_path + 'articles', articlesCtrl.getArticles); 
router.get(api_path + 'article/:id', articlesCtrl.getArticleById);    
router.get(api_path + 'query', articlesCtrl.query);
router.get(api_path + 'comments', commentsCtrl.getComments); 
router.get(api_path + 'comment/:article_id', commentsCtrl.getCommentsByArticleId); 
};