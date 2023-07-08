import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import OAuth from '../components/OAuth';

const ForgotPassword = () => {
  
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  function onChange(e){
  setEmail(e.target.value);
  }
  async function onSubmit(e){
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
      navigate("/sign-in");
    } catch (error) {
      toast.error("Could not send reset password email");
    }
  } 
  return (
    <section> 
      <h1 className=' text-center font-bold text-3xl mt-6'>Forgot Password</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className=' md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img 
          className='w-full rounded-2xl'
          src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80" alt="key" 
          />
        </div>

        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form onSubmit={onSubmit}>
            {/* EMAIL ADDRESS */}
            <input 
            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6' 
            type="email" id='email'
            value={email} 
            onChange={onChange} 
            placeholder='Email Address' 
            />

            {/* LINK for Sign Up and Forgot password */}
            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'> 
              <p className='mb-6'> Don't have an account?
                <Link to="/sign-up" className=' text-red-600 hover:text-red-800
                transition ease-in-out ml-1'>Register</Link>
              </p>
              <p>
                <Link to='/sign-in' className=' text-blue-600 hover:text-blue-800
                transition ease-in-out'>
                   Sign in instead</Link>
              </p>
            </div>

            {/* SIGN IN BUTTON */}
            
            <button className='w-full bg-blue-500 text-white px-7 py-3 font-medium uppercase
            rounded shadow-md hover:bg-blue-700 hover:shadow-lg
            transition duration-150 ease-in-out active:bg-blue-800'
            type='submit'> Send Reset Email</button>

            {/* OR WITH BORDER LINES */}
            <div className='my-4 before:border-t flex before:flex-1 items-center before:border-gray-300
            after:border-t after:flex-1  after:border-gray-300'>
              <p className='text-center font-semibold mx-4'>OR</p>
            </div>  

            <OAuth/>
          
          </form>
        </div> 
      </div>
    </section>
  )
}

export default ForgotPassword
