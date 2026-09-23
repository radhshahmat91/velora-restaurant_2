import mongoose from 'mongoose';
const customerSchema=new mongoose.Schema({name:{type:String,required:true},email:{type:String,index:true,sparse:true},phone:{type:String,index:true},address:String,orderCount:{type:Number,default:0},totalSpent:{type:Number,default:0}},{timestamps:true});
export default mongoose.model('Customer',customerSchema);
