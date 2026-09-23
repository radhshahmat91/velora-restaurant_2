import mongoose from 'mongoose';
const foodSchema=new mongoose.Schema({name:{type:String,required:true,trim:true},category:{type:String,required:true,index:true},price:{type:Number,required:true,min:0},oldPrice:{type:Number,min:0},img:String,desc:String,rating:{type:Number,min:0,max:5,default:5},badge:String,isAvailable:{type:Boolean,default:true},extras:[{name:String,price:Number}],sizes:[{name:String,price:Number}]},{timestamps:true});
export default mongoose.model('Food',foodSchema);
