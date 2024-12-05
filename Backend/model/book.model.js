import mongoose from "mongoose";


const bookSchema = new mongoose.Schema({
    name : {
        type : String,

    },
    price : {
        type :Number
    },
    category : {
        type : String
    },
    image : {
        type : String
    },
    title : {
        type : String
    }
},{timestamp : true})

 const Book = mongoose.model('Book',bookSchema)
 
export  default Book