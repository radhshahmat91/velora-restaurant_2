import mongoose from 'mongoose';
const reservationSchema=new mongoose.Schema({name:{type:String,required:true},phone:{type:String,required:true},email:String,date:{type:Date,required:true},time:{type:String,required:true},guests:{type:Number,required:true,min:1},occasion:{type:String,default:'Dinner'},notes:String,status:{type:String,enum:['pending','confirmed','seated','completed','cancelled'],default:'pending'}},{timestamps:true});
export default mongoose.model('Reservation',reservationSchema);
