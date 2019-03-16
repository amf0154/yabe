const mainCtrl = require('../controllers/mainController');
const checks = require('../helpers/checkers');

module.exports = ({ router }) => {
const api_path = "/api/";
router.get(api_path + 'articles/:id', mainCtrl.getArticles); 
router.get(api_path + 'article/:id', mainCtrl.getArticleById);    
router.get(api_path + 'query', mainCtrl.query);
};