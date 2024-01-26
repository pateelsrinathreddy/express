const mongoose = require('mongoose');
const { Schema } = mongoose;

const ImagedetailSchema = new Schema(
    {
   // String is shorthand for {type: String}
  image:String
  },
  {
    collection:"ImageDetails"
  }
);
const detail1 = mongoose.model('ImageDetails', ImagedetailSchema);
module.exports=detail1 