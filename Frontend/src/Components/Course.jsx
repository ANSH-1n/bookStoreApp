import React from 'react'
import Cards from "./Cards.jsx"
import List from "../../public/List.json"
import {Link} from 'react-router-dom'




export default function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>
            we're delightful to have you <span className='text-pink-500'>here !! </span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio inventore est delectus non sed nostrum voluptate libero officia animi reiciendis. Ea rem non dignissimos quos, quo quisquam nulla quidem maxime?
          </p>
          <Link to= "/" >
          <button className='mt-6 bg-pink-500 text-white px-4 py-2 hover:bg-pink-500  rounded-md hover:bg-pink-700 duration-300'>
             Back
          </button>
          </Link>
         
        </div>
        {/* Add gap to the grid */}
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-8'> {/* Added gap-8 */}
          {
            List.map((item) => (
              <Cards key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
    </>
  )
}





