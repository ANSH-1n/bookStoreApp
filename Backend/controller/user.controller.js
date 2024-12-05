// import bcryptjs from "bcryptjs"
// import User from "../model/user.model.js";

// export const Signup = async (req, res) => {
//     try {
//         const { FullName, Email, Password } = req.body;

//         // Check if user already exists
//         const user = await User.findOne({ Email });
//         if (user) {
//             return res.status(400).json({ message: "User already exists" }); // Corrected to res.status()
//         }

//         const salt = await bcryptjs.genSalt(10); 
//         const hashPassword = await bcryptjs.hash(Password,salt)
//         // Create a new user
//         const userCreated = new user({
//             FullName : FullName,
//             Email : Email,
//             Password : hashPassword
//         });

//         // Save the user to the database
//         await userCreated.save();
        
//         // Send success response
//         return res.status(200).json({ message: "User created successfully" }); // Corrected to res.status()
//     } catch (error) {
//         console.log('Error:sala-----');
//         return res.status(500).json({ message: "Internal server error" }); // Corrected to res.status()
//     }
// };



// export const Login = async(req,res) =>{
//     try{
//         const {Email , Password}   = req.body;
//         const user = await User.findOne({Email})
//         const matchPassword = await bcryptjs.compare(Password.user.Password)
//         if( !user || !matchPassword){
//                 res.status(400).json({message : "Invalid Email and password"})
//         }
//     }catch(error){
//        res.status(200).json({message :"Login Succesful", user : {
//         _id :User.id,
//         Email :User.Email,
//         FullName :User.FullName
//        } })
//     }
// }





import bcryptjs from "bcryptjs";
import User from "../model/user.model.js";

// Signup function
export const Signup = async (req, res) => {
    try {
        const { FullName, Email, Password } = req.body;

        // Check if user already exists
        const user = await User.findOne({ Email });
        if (user) {
            return res.status(400).json({ message: "User already exists" }); // Corrected to res.status()
        }

        const salt = await bcryptjs.genSalt(10); 
        const hashPassword = await bcryptjs.hash(Password, salt); // Correctly await the password hash

        // Create a new user
        const userCreated = new User({  // Corrected typo here: 'newuser' -> 'new User'
            FullName: FullName,
            Email: Email,
            Password: hashPassword
        });

        // Save the user to the database
        await userCreated.save();
        
        // Send success response
        return res.status(200).json({ message: "User created successfully" ,user:{
            _id: userCreated._id,
            FullName: userCreated.FullName,
            Email: userCreated.Email
     } }); // Corrected to res.status()
    } catch (error) {
        console.log('Error:', error.message);  // Log the actual error message
        return res.status(500).json({ message: "Internal server error" }); // Corrected to res.status()
    }
};



export const Login = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        console.log("Received login request for:", Email);  // Add this line for logging

        // Find user by email
        const user = await User.findOne({ Email });
        console.log("User found:", user);  // Log the user to check if it's null or valid

        if (!user) {
            return res.status(400).json({ message: "Invalid Email or Password" });
        }

        // Compare the hashed password in the database with the provided password
        const matchPassword = await bcryptjs.compare(Password, user.Password);
        console.log("Password match result:", matchPassword);  // Add this to check password comparison

        if (!matchPassword) {
            return res.status(400).json({ message: "Invalid Email or Password" });
        }

        // Send success response if login is successful
        return res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                FullName: user.FullName,
                Email: user.Email
            }
        });

    } catch (error) {
        console.log('Error during login:', error.message);  // Log the actual error message
        return res.status(500).json({ message: "Internal server error" }); // Corrected to res.status()
    }
};

