import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar.jsx'
function Contact() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <NavBar />
            <div className="flex items-center justify-center h-screen dark:bg-slate-900 dark:text-green">
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to='/' className='dark:bg-slate-900 dark:text-white'>✕</Link>


                            <h3 className="font-bold text-lg dark:bg-slate-900 dark:text-white" >Contact Us</h3>
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

                            {/* message*/}
                            {/* <div className='mt-4 space-y-2'>
                                <span className='dark:bg-slate-900 dark:text-white'>message:</span>
                                <br />
                                <input
                                    type="text"
                                    placeholder='Enter your password'
                                    className='border px-3 w-80 rounded-md outline-none py-1'
                                    {...register("message", { required: "message is required" })}
                                />
                                {errors.message && <span className="text-red-500">{errors.message.message}</span>}

                            </div> */}

                            <div className='mt-4 space-y-2'>
                                <span className='dark:bg-slate-900 dark:text-white'>Message:</span>
                                <br />
                                <textarea
                                    placeholder='Enter your message'
                                    className='border px-3 w-full h-32 rounded-md outline-none py-1'
                                    {...register("message", { required: "Message is required" })}
                                />
                                {errors.message && <span className="text-red-500">{errors.message.message}</span>}
                            </div>

                            {/* button */}
                            <div className='flex justify-around mt-4'>
                                <button className='bg-pink-700 text-white rounded-md px-3 py-1 hover:bg-green-700 duration-200'>Submit</button>

                            </div>
                        </form>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Contact

