import mongoose from "mongoose";


const userSchema =  new mongoose.Schema({
   FullName : {
    type : String,
    // required : true
   },
   Email : {
    type : String,
    unique : true,
    required : true
},
Password : {
    type : String,
    required : true
}
},{timestamps : true})

const User= mongoose.model("User",userSchema);

export default User;