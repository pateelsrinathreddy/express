const mongoose = require('mongoose');
const { Schema } = mongoose;

const detailSchema = new Schema({
   // String is shorthand for {type: String}
   id:Number,
   name: String,
   age: Number,
   
  

  
});
const detail = mongoose.model('names', detailSchema);
module.exports=detail