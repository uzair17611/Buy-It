import React from 'react'
import { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import styles from "../../styles/Styles.js"
import {Link} from "react-router-dom"

const Login = () => {

  const [email ,setEmail] =useState("");
  const [password ,setPassword] =useState("");
  const [visibility , setVisibility] =useState(false)



  
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12  sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
       <h2 className='mt-6 text-center text-3xl font-extrabold  text-gray-900'>
         Login your account

       </h2>

      </div>
      <div className='mt-8 sm:mx-auto sm:w-full  sm:max-w-md'>
       <div className='bg-white py-8 px-4 shadow sm:rounded-lg  sm:px-10'>

            <form className="space-y-6">
            <div>


              <label htmlFor="email"   className='block  text-sm font-medium  text-gray-700'
              
              
              > Email Address</label>
            </div>

            <div className="mt-1 ">
              <input type="email"   name="email"  autoComplete='email' required  value={email}  onChange={(e)=>setEmail(e.target.value)}  className='appearance-none  block w-full px-3 py-2 border border-gray-300 rounded-md shadow placeholder-gray-400 focus:outline-none focus:ring-blue-500  focus:border-blue-500 sm:text-sm'/>
            </div>
            <div>


                  <label htmlFor="email"   className='block  text-sm font-medium  text-gray-700'


                  > Password</label>
                  </div>

                  <div className="mt-1  relative">
                  <input type={visibility ? "text " : "password"}   name="password"  autoComplete='current-password' required  value={password}  onChange={(e)=>setPassword(e.target.value)}  className='appearance-none  block w-full px-3 py-2 border border-gray-300 rounded-md shadow placeholder-gray-400 focus:outline-none focus:ring-blue-500  focus:border-blue-500 sm:text-sm'/>
                 {
                  visibility ?
                  (<AiOutlineEye
                    className='absolute right-2 top-2 cursor-pointer'
                    size={25}
                    onClick={()=>setVisibility(false)}
                    />
                    )
                    :(
                      <AiOutlineEyeInvisible
                 className='absolute right-2 top-2 cursor-pointer'
                 size={25}
                 onClick={()=>setVisibility(true)}
                 />
                 
                    )
                 }
                  </div>  

                  <div className={`${styles.noramlFlex} justify-between`}>

                    <div className={`${styles.noramlFlex}`}>
                           <input type="checkbox" name="remember-me" id="remember-me" 
                           className='h-4 w-4  text-blue-600  focus:ring-blue-500  border-gray-300  rounded' 
                           
                           />
                           <label  htmlFor='remember-me'
                           className='ml-2 block text-sm text-gray-900'
                           >Remember me</label>
                    </div>

                  
                 <div className='text-sm'>
                  <a href="#"
                  className='font-medium  text-blue-600 hover:text-blue-500'
                  
                  >

                  forgot password ?

                  </a>

                 </div>
               
                 </div>
                 <div>
                  <button type="submit"
                   className='group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700'>
                   submit
                  </button>
                 </div>
                 <div className={`${styles.noramlFlex} w-full`}>
                    <h4>Not have any account</h4>
                    <Link to="/Sign-up" className='text-blue-600 pl-2'>
                      Signup
                    </Link>

                 </div>


            </form>
       </div>

      </div>
    </div>
  )
}

export default Login
