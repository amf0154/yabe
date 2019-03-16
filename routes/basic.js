const mainCtrl = require('../controllers/mainController');
module.exports = ({ router }) => {

const api_path = "/api/";
router.get(api_path + 'home', mainCtrl.home); 
router.get(api_path + 'params/:id', mainCtrl.params);    
router.get(api_path + 'query', mainCtrl.query);
};