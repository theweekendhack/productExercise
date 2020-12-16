import mongoose, { Mongoose } from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
 
  title: {
      type:String
  },

  description :{
    type:String,
    required:false
  },

  unitPrice :{
    type:Number
  },
  costPrice :{
    type:Number
  },
  
  minLevel :{
    type:Number
  },
  
  maxLevel :{
    type:String
  },

  quantity :{
    type:Number
  },

  features : {
      type :[{featureName :String, featureValue: String}]
  },

  dateCreated :{
    type:Date,
    default:Date.now()
  },

});

const product = mongoose.model('Product', productSchema);

export default product;