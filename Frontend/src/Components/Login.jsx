


// import axios from 'axios';
// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'  // Import useNavigate
// import { useForm } from 'react-hook-form';
// import toast, { Toaster } from 'react-hot-toast';

// function Login() {
//     const navigate = useNavigate();  // Initialize navigate
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm();

//     const onSubmit = async (data) => {
//         const userInfo = {
//             Email: data.Email,
//             Password: data.Password
//         };

//         try {
//             const res = await axios.post("http://localhost:3000/user/login", userInfo);
//             console.log(res.data);
            
//             if (res.data) {
//                 toast.success('Login Successfully!');
//                 localStorage.setItem("Users", JSON.stringify(res.data));  // Store user data in localStorage
                
//                 // Redirect to the Course page after successful login
//                 // navigate('/Course');  // Use navigate to redirect to "/Course"
//                 setTimeout(()=>{
//                     window.location.reload()

//                 },2000)
//             }
//         } catch (error) {
//             if (error.response) {
//                 console.log("error", error);
//                 toast.error("Error: " + error.response.data.message);
//             }
//         }
//     }

//     return (
//         <div className='dark:bg-slate-900 dark:text-white'>
//             <dialog id="my_modal_3" className="modal">
//                 <div className="modal-box">
//                     <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//                         <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

//                         <h3 className="font-bold text-lg">Login</h3>

//                         {/* Email */}
//                         <div className='mt-4 space-y-2 '>
//                             <span className='dark:bg-slate-900 dark:text-white'>Email:</span>
//                             <br />
//                             <input
//                                 type="text"
//                                 placeholder='Enter your email'
//                                 className='border px-3 w-80 rounded-md outline-none py-1'
//                                 {...register("Email", { required: "Email is required" })}
//                             />
//                             {errors.Email && <span className="text-red-500">{errors.Email.message}</span>}
//                         </div>

//                         {/* Password */}
//                         <div className='mt-4 space-y-2'>
//                             <span className='dark:bg-slate-900 dark:text-white'>Password:</span>
//                             <br />
//                             <input
//                                 type="text"
//                                 placeholder='Enter your password'
//                                 className='border px-3 w-80 rounded-md outline-none py-1'
//                                 {...register("Password", { required: "Password is required" })}
//                             />
//                             {errors.Password && <span className="text-red-500">{errors.Password.message}</span>}
//                         </div>

//                         {/* Buttons */}
//                         <div className='flex justify-around mt-4'>
//                             <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
//                                 Login
//                             </button>
//                         </div>

//                         <p className="text-center mt-4">
//                             Not registered?{" "}
//                             <Link to='/Signup' className='underline text-blue-500 cursor-pointer'>Sign up</Link>
//                         </p>
//                     </form>
//                 </div>
//             </dialog>
//         </div>
//     )
// }

// export default Login;













import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

function Login() {
    const navigate = useNavigate(); // Initialize navigate
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            Email: data.Email,
            Password: data.Password
        };

        try {
            const res = await axios.post("http://localhost:3000/user/login", userInfo);
            console.log(res.data);
            
            if (res.data) {
                toast.success('Login Successfully!');
                localStorage.setItem("Users", JSON.stringify(res.data)); // Store user data in localStorage
                
                // Redirect to the Course page after successful login
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        } catch (error) {
            if (error.response) {
                console.log("error", error);
                toast.error("Error: " + error.response.data.message);
            }
        }
    }

    // Function to handle closing modal and redirecting to home
    const handleClose = () => {
        navigate('/'); // Redirect to home route when X is clicked
    };

    return (
        <div className='dark:bg-slate-900 dark:text-white'>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* Close button with redirection to home */}
                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-white"
                            onClick={handleClose} // Add event to handle redirection
                        >
                            ✕
                        </button>

                        <h3 className="font-bold text-lg">Login</h3>

                        {/* Email */}
                        <div className='mt-4 space-y-2'>
                            <span className='dark:bg-slate-900 dark:text-white'>Email:</span>
                            <br />
                            <input
                                type="text"
                                placeholder='Enter your email'
                                className='border px-3 w-80 rounded-md outline-none py-1'
                                {...register("Email", { required: "Email is required" })}
                            />
                            {errors.Email && <span className="text-red-500">{errors.Email.message}</span>}
                        </div>

                        {/* Password */}
                        <div className='mt-4 space-y-2'>
                            <span className='dark:bg-slate-900 dark:text-white'>Password:</span>
                            <br />
                            <input
                                type="text"
                                placeholder='Enter your password'
                                className='border px-3 w-80 rounded-md outline-none py-1'
                                {...register("Password", { required: "Password is required" })}
                            />
                            {errors.Password && <span className="text-red-500">{errors.Password.message}</span>}
                        </div>

                        {/* Buttons */}
                        <div className='flex justify-around mt-4'>
                            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                                Login
                            </button>
                        </div>

                        <p className="text-center mt-4">
                            Not registered?{" "}
                            <Link to='/Signup' className='underline text-blue-500 cursor-pointer'>Sign up</Link>
                        </p>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login;
