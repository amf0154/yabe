const articlesCtrl = require('../controllers/articleController');
const commentsCtrl = require('../controllers/commentsController');
const checks = require('../helpers/checkers');
const api_path = '/api/';

module.exports = ({ router }) => {   
router.get('/', ctx => ctx.body = 'What are you looking for? :P' ); 

// get all articles
router.get(api_path + 'articles', articlesCtrl.getArticles); 
// get article by id
router.get(api_path + 'articles/:id', checks.isValidId, articlesCtrl.getArticleById); 
// update article (title, description, author) by id
router.put(api_path + 'articles/:id', checks.isValidId, checks.isValidArticle, articlesCtrl.editArticle); 
//add article (title, description, author)
router.post(api_path + 'articles', checks.isValidArticle, articlesCtrl.addArticle); 
//delete article by id
router.delete(api_path + 'articles/:id', checks.isValidId, articlesCtrl.delArticle);

//get all comments  
router.get(api_path + 'comments', commentsCtrl.getComments); 
// get comments for article by 'article_id'  !!!!!!!!!!!!!!!!!!!
router.get(api_path + 'comments/:id',checks.isValidId, commentsCtrl.getCommentsByArticleId);
//update comment (description, article_id, author) by id
router.put(api_path + 'comments/:id', checks.isValidId, checks.isValidComment, commentsCtrl.editComment); 
//add comment (description, article_id, author)
router.post(api_path + 'comments',checks.isValidComment, commentsCtrl.addComment); 
//delete comment by id.
router.delete(api_path + 'comments/:id',checks.isValidId, commentsCtrl.delComment);
};