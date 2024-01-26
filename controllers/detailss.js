const detailsModel=require('../models/detailss')
const _=require("lodash");

const getdetailss=function(req,res,next){
    detailsModel.find({})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.send(err)
    })
   
}
const getdetails=function(req,res,next){
    const id = req.params.id;
    detailsModel.findById(id)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.send(err)
    })
   
}

const postdetails=function(req,res,next){
    let data={}
    try{
        data=detailsModel.create(req.body)
        res.send(data)
        
    }
    catch(error){
       return res.send(error) 
    }
}
const deletedetails=async function(req,res,next){
    const id=req.params.id
    console.log(id)
   const deleting=await detailsModel.findByIdAndDelete(id)
   res.send(deleting)
       
}
module.exports={getdetailss,postdetails,deletedetails,getdetails}