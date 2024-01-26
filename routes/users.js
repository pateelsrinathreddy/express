var express = require('express');
var router = express.Router();
var userModel=require("../models/users")
var postModel=require("../models/posts")
const _=require("lodash");

router.get("/",async (req,res)=>{
    let send=await userModel.find({})
    .populate('post')
    res.send(send)
})

router.get("/post",async (req,res)=>{
    let send=await postModel.find({})
    res.send(send)
})




router.put("/:id",async function(req,res){
    const id=req.params.id
    let updating=await postModel.create(req.body)
    let user=await userModel.findByIdAndUpdate(id)
    user.post.push(updating.id)
    await user.save()
    res.send("done")

})
// router.get("/:asser",(req,res)=>{
//  res.send(`hello ${req.params.asser}`)
// })

router.post("/createuser",async function(req,res){
    let creating=await userModel.create(req.body)
    res.send(creating)
})

// router.post("/createpost",async function(req,res){
//     let creating=await postModel.create(req.body)
//     res.send(creating)
// })


module.exports = router;