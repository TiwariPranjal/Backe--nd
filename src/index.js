import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({path:'./.env'}); // load .env first!

const PORT=process.env.PORT

connectDB().then(()=>{
  app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
  })
}).catch((error)=>{
  console.log("Connection failed of mongo",error.message)
})
















/*
// connectimg database ont data base

2- type
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({path:'./.env'}); // load .env first!


connectDB();





/*

// to create everythin in same file
1- type 

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "./constants.js";
const app = express();

dotenv.config();

// middlewares
app.use(express.json());

(async () => {
  try {
    // connect to DB
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("MongoDB connected");

    // server listener AFTER express app is created
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });

  } catch (error) {
    console.error("ERROR:", error);
    process.exit(1);
  }
})();

*/