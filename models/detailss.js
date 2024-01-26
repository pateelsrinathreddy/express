const mongoose = require('mongoose');
const { Schema } = mongoose;

const detailsSchema = new Schema({
   // String is shorthand for {type: String}
   id:Number,
   name: String,
   age: Number
  

  
});
const detail = mongoose.model('names1', detailsSchema);
module.exports=detail