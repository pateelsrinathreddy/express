var express = require('express');
var router = express.Router();
var detailssController=require('../controllers/detailss')

router.get('/', detailssController.getdetailss);
router.get('/:id', detailssController.getdetailss); 
router.post('/', detailssController.postdetails); 
router.delete('/:id', detailssController.deletedetails);

module.exports = router;