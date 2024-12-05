import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from  "cors";



const app = express();
app.use(cors());
app.use(express.json())

dotenv.config();  // Fixed typo here

const port = process.env.PORT || 4001;
const URI =  process.env.MONGODB;


// Connection with mongodb local
try{
  mongoose.connect("mongodb://localhost:27017/bookStore", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("Connected to MongoDB");
  })
}catch(error){
  console.log("Connection error with MongoDB", error);
}


// routes
app.use("/book",bookRoute)
app.use("/user",userRoute)
app.use("/user", userRoute);
console.log('User routes are set up correctly');


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



