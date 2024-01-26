const detailModel=require("../models/details")
const imageModel=require("../models/imageDetails")

const getdetails=function(req,res,next){
    detailModel.find({})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.send(err)
    })
   
}

const postdetail=function(req,res,next){
    let data={}
    try{
        data=detailModel.create(req.body)
        res.send(data)
    }
    catch(error){
       return res.send(error) 
    }
}
//image


module.exports={getdetails,postdetail} 