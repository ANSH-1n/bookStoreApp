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



// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import NavBar from '../Components/NavBar.jsx';

// function Contact() {
//   // State to manage modal visibility
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // React Hook Form setup
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => console.log(data);

//   // Function to handle opening and closing the modal
//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   return (
//     <>
//       <NavBar />
//       <div className="flex items-center justify-center h-screen dark:bg-slate-900 dark:text-green">
//         <div className="w-[600px]">
//           {/* Button to open modal */}
//           <button
//             onClick={toggleModal}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//             Contact Us
//           </button>

//           {/* Modal content */}
//           {isModalOpen && (
//             <div className="modal fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
//               <div className="modal-box bg-white p-6 rounded-lg shadow-lg">
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                   <button
//                     type="button"
//                     className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//                     onClick={toggleModal}
//                   >
//                     ✕
//                   </button>

//                   <h3 className="font-bold text-lg">Contact Us</h3>

//                   {/* Name */}
//                   <div className='mt-4 space-y-2'>
//                     <span>Name:</span>
//                     <input
//                       type="text"
//                       placeholder='Enter your name'
//                       className='border px-3 w-80 rounded-md outline-none py-1'
//                       {...register("name", { required: "Name is required" })}
//                     />
//                     {errors.name && <span className="text-red-500">{errors.name.message}</span>}
//                   </div>

//                   {/* Email */}
//                   <div className='mt-4 space-y-2'>
//                     <span>Email:</span>
//                     <input
//                       type="email"
//                       placeholder='Enter your email'
//                       className='border px-3 w-80 rounded-md outline-none py-1'
//                       {...register("email", { required: "Email is required" })}
//                     />
//                     {errors.email && <span className="text-red-500">{errors.email.message}</span>}
//                   </div>

//                   {/* Message */}
//                   <div className='mt-4 space-y-2 w-10'>
//                     <span>Message:</span>
//                     <textarea
//                       placeholder='Enter your message'
//                       className='border px-3 w-80 rounded-md outline-none py-1'
//                       {...register("message", { required: "Message is required" })}
//                     />
//                     {errors.message && <span className="text-red-500">{errors.message.message}</span>}
//                   </div>

//                   {/* Submit Button */}
//                   <div className='flex justify-around mt-4'>
//                     <button className='bg-pink-700 text-white rounded-md px-3 py-1 hover:bg-green-700 duration-200'>
//                       Submit
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Contact;
