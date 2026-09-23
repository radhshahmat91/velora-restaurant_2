import mongoose from 'mongoose';
const eventSchema=new mongoose.Schema({eventType:String,date:{type:Date,required:true},guests:String,budget:String,name:{type:String,required:true},phone:{type:String,required:true},email:String,details:String,status:{type:String,enum:['pending','contacted','confirmed','completed','cancelled'],default:'pending'}},{timestamps:true});
export default mongoose.model('Event',eventSchema);
