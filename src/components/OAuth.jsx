import React from 'react'
import {FcGoogle} from 'react-icons/fc'
const OAuth = () => {
  return (
    <button className='flex items-center justify-center w-full
    px-7 py-3 bg-red-500 text-white font-medium text-sm uppercase
    shadow-md hover:bg-red-700 active:bg-red-800 hover:shadow-lg 
    transition duration-150 ease-in-out rounded'>
         <FcGoogle className='text-2xl bg-white mr-2 rounded-full'/>
         Continue with Google
    </button>
  )
}

export default OAuth
