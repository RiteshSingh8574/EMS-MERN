import express from 'express'
import dotenv from 'dotenv'
import dns from 'dns'
import { connectDb } from './config/db.js';

dotenv.config()
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const app=express()
const port=process.env.PORT||3000

app.listen(port,()=>{
    console.log(`Server is listening on port no:${port}`)
    connectDb()
})