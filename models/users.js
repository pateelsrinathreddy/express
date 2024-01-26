const mongoose = require('mongoose');
const { Schema } = mongoose;

const userschema = new Schema({
   name:{
    type:String
   },
   post:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:'posts'
   }]
 
   
  
  

  
});
const user = mongoose.model('users', userschema);
module.exports=user