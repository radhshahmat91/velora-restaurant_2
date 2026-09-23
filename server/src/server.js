import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import dns from 'dns';

dns.setServers([
  '8.8.8.8',
  '8.8.4.4'
]);
import api from './routes/api.js';
dotenv.config();
const app=express();
const port=process.env.PORT||5000;
const clientUrl=process.env.CLIENT_URL||'http://localhost:5173';
app.use(cors({origin:clientUrl,credentials:true}));
app.use(express.json({limit:'2mb'}));
app.get('/api/health',(req,res)=>res.json({status:mongoose.connection.readyState===1?'ok':'degraded',message:'Velora API is running',database:mongoose.connection.readyState===1?'MongoDB connected':'MongoDB disconnected'}));
app.use('/api',api);
app.use((err,req,res,next)=>{console.error(err);res.status(500).json({message:err.message||'Server error'});});
async function start(){if(!process.env.MONGODB_URI)throw new Error('MONGODB_URI is required. Copy .env.example to .env and add your MongoDB Atlas URI.');await mongoose.connect(process.env.MONGODB_URI);console.log('MongoDB connected:',mongoose.connection.name);app.listen(port,()=>console.log(`Velora API listening on http://localhost:${port}`));}
start().catch(e=>{console.error('Startup failed:',e.message);process.exit(1)});
