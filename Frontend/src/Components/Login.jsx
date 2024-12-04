

import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className='dark:bg-slate-900 dark:text-white'>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* If there is a button in the form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                        {/* Login Title */}
                        <h3 className="font-bold text-lg">Login</h3>

                        {/* Email */}
                        <div className='mt-4 space-y-2 '>
                            <span className='dark:bg-slate-900 dark:text-white'>Email:</span>
                            <br />
                            <input
                                type="email"
                                placeholder='Enter your email'
                                className='border px-3 w-80 rounded-md outline-none py-1'
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                        </div>

                        {/* Password */}
                        <div className='mt-4 space-y-2'>
                            <span className='dark:bg-slate-900 dark:text-white'>Password:</span>
                            <br />
                            <input
                                type="password"
                                placeholder='Enter your password'
                                className='border px-3 w-80 rounded-md outline-none py-1'
                                {...register("password", { required: "Password is required" })}
                            />
                            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
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
