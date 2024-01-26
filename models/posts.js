const mongoose = require('mongoose');
const { Schema } = mongoose;

const postschema = new Schema({
 posttext:{
    type:String
 },
 user:{
   type:mongoose.Schema.Types.ObjectId,
   ref:'users'
 }
 
   
  
  

  
});
const posts = mongoose.model('posts',  postschema);
module.exports=posts