

// import React from 'react'
// import { Link,Navigate } from 'react-router-dom'
// import Login from './Login'
// import { useForm } from 'react-hook-form';
// import axios from 'axios'
// import toast, { Toaster } from 'react-hot-toast';

// function Signup() {

//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm();

//     const onSubmit = async (data) => {
//         const userInfo = {
//             FullName: data.FullName,
//             Email: data.Email,
//             Password: data.Password
//         }

//         await axios.post("http://localhost:3000/user/signup", userInfo)
//             .then((res) => {
//                 console.log(res.data)
//                 if (res.data) {
//                      toast.success('Signup successful  !');
//                      <Navigate to='/'/>
//                 }
//                 localStorage.setItem("Users",JSON.stringify(res.data))
//             }).catch((error) => {
//                 if (error.response) {
//                     console.log("eroor",error)
//                     toast.error("Error" +  error.response.data.message);
                
//                 }

//             })
//     }

//     return (
//         <>
//             <div className='flex h-screen items-center justify-center dark:bg-slate-900 dark:text-white'>
//                 <div className="w-[600px]">
//                     <div className="modal-box">
//                         <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//                             {/* if there is a button in form, it will close the modal */}
//                             <Link to='/' className='hover:bg-purple-500'>✕</Link>

//                             <h3 className="font-bold text-lg dark:bg-slate-900 dark:text-white">Signup</h3>

//                             {/* Name */}
//                             <div className='mt-4 space-y-2'>
//                                 <span className='dark:bg-slate-900 dark:text-white'>Name:</span>
//                                 <br />
//                                 <input type="text"
//                                     placeholder='Enter your name'
//                                     className='border px-3 w-80 rounded-md outline-none py-1'
//                                     {...register("FullName", { required: "Name is required" })}
//                                 />
//                                 {errors.FullName && <span className="text-red-500">{errors.FullName.message}</span>}
//                             </div>

//                             {/* Email */}
//                             <div className='mt-4 space-y-2'>
//                                 <span className='dark:bg-slate-900 dark:text-white'>Email:</span>
//                                 <br />
//                                 <input
//                                     type="email"
//                                     placeholder='Enter your email'
//                                     className='border px-3 w-80 rounded-md outline-none py-1'
//                                     {...register("Email", { required: "Email is required" })}
//                                 />
//                                 {errors.Email && <span className="text-red-500">{errors.Email.message}</span>}
//                             </div>

//                             {/* Password */}
//                             <div className='mt-4 space-y-2'>
//                                 <span className='dark:bg-slate-900 dark:text-white'>Password:</span>
//                                 <br />
//                                 <input
//                                     type="password"
//                                     placeholder='Enter your password'
//                                     className='border px-3 w-80 rounded-md outline-none py-1'
//                                     {...register("Password", { required: "Password is required" })}
//                                 />
//                                 {errors.Password && <span className="text-red-500">{errors.Password.message}</span>}
//                             </div>

//                             {/* Button */}
//                             <div className='flex justify-around mt-4'>
//                                 <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
//                                     Signup
//                                 </button>

//                                 <p>Have an account?{" "}
//                                     <button className='underline text-blue-500 cursor-pointer'
//                                         onClick={() =>
//                                             document.getElementById("my_modal_3").showModal()
//                                         }
//                                     >
//                                         Login
//                                     </button>{" "}
//                                 </p>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Signup;




import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

function Signup() {
    const [redirect, setRedirect] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            FullName: data.FullName,
            Email: data.Email,
            Password: data.Password
        }

        await axios.post("http://localhost:3000/user/signup", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success('Signup successful!');
                    setRedirect(true); // Set the state to trigger the redirect
                }
                localStorage.setItem("Users", JSON.stringify(res.data))
            }).catch((error) => {
                if (error.response) {
                    console.log("error", error)
                    toast.error("Error: " + error.response.data.message);
                }
            })
    }

    if (redirect) {
        return <Navigate to="/" /> // Redirect to the home page if the signup is successful
    }

    return (
        <>
            <div className='flex h-screen items-center justify-center dark:bg-slate-900 dark:text-white'>
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to='/' className='hover:bg-purple-500'>✕</Link>

                            <h3 className="font-bold text-lg dark:bg-slate-900 dark:text-white">Signup</h3>

                            {/* Name */}
                            <div className='mt-4 space-y-2'>
                                <span className='dark:bg-slate-900 dark:text-white'>Name:</span>
                                <br />
                                <input type="text"
                                    placeholder='Enter your name'
                                    className='border px-3 w-80 rounded-md outline-none py-1 dark:bg-slate-800 dark:text-white'
                                    {...register("FullName", { required: "Name is required" })}
                                />
                                {errors.FullName && <span className="text-red-500">{errors.FullName.message}</span>}
                            </div>

                            {/* Email */}
                            <div className='mt-4 space-y-2'>
                                <span className='dark:bg-slate-900 dark:text-white'>Email:</span>
                                <br />
                                <input
                                    type="email"
                                    placeholder='Enter your email'
                                    className='border px-3 w-80 rounded-md outline-none py-1 dark:bg-slate-800 dark:text-white'
                                    {...register("Email", { required: "Email is required" })}
                                />
                                {errors.Email && <span className="text-red-500">{errors.Email.message}</span>}
                            </div>

                            {/* Password */}
                            <div className='mt-4 space-y-2'>
                                <span className='dark:bg-slate-900 dark:text-white'>Password:</span>
                                <br />
                                <input
                                    type="password"
                                    placeholder='Enter your password'
                                    className='border px-3 w-80 rounded-md outline-none py-1 dark:bg-slate-800 dark:text-white'
                                    {...register("Password", { required: "Password is required" })}
                                />
                                {errors.Password && <span className="text-red-500">{errors.Password.message}</span>}
                            </div>

                            {/* Button */}
                            <div className='flex justify-around mt-4'>
                                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                                    Signup
                                </button>

                                <p>Have an account?{" "}
                                    <button className='underline text-blue-500 cursor-pointer'
                                        onClick={() =>
                                            document.getElementById("my_modal_3").showModal()
                                        }
                                    >
                                        Login
                                    </button>{" "}
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;
