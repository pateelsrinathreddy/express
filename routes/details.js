var express = require('express');
var router = express.Router();
var detailsController=require('../controllers/details')

/* GET users listing. */
router.get('/', detailsController.getdetails) 
router.post('/', detailsController.postdetail); 
router.get('/ter',function(req,res){
    res.send("hwgvfefv")
})


module.exports = router;