import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form';



function Signup() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <div className=' flex h-screen items-center justify-center dark:bg-slate-900 dark:text-white'>
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to='/' className='dark:bg-slate-900 dark:text-white'>✕</Link>


                            <h3 className="font-bold text-lg dark:bg-slate-900 dark:text-white">Signup</h3>
                            {/* Name */}
                            <div className='mt-4 space-y-2'>
                                <span className='dark:bg-slate-900 dark:text-white'> Name:</span>
                                <br />
                                <input type="text"
                                    placeholder='Eneter your name'
                                    className='border px-3 w-80 rounded-md outline-none p-y'
                                    {...register("name", { required: "name is required" })}
                                    />
                                    {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                            
                            </div>

                            {/* email */}
                            <div className='mt-4 space-y-2'>
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

                            {/* password */}
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
                         {/* button */}
                            <div className='flex justify-around mt-4'>
                                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>

                                <p>HaveAccount?{" "}
                                    <button className='underline text-blue-500 cursor-pointer'
                                        onClick={() =>
                                            document.getElementById("my_modal_3").showModal()
                                        }
                                    >Login
                                    </button> {" "}
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        </>

    )
}

export default Signup