import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function Signup() {
    let{register,handleSubmit,formState:{errors}}=useForm()
    let navigate=useNavigate()
  let [err,seterr]=useState('')
    async function submit(obj){
       let res= await axios.post('http://localhost:3001/user-api/user',obj)
       if(res.data.message==="new user register") {

         console.log(obj);
          navigate('/')
       }
       else{
        seterr(res.data.message)
      }
    }
  return (
    <div >
        <div class="container d-flex flex-column justify-content-center align-items-center" style={{minHeight:"100vh"}}>
        <form onSubmit={handleSubmit(submit)}>
        <div class="card">
            <div className='card-title'>

                <h2>Register</h2>
            </div>
            {
              err.length!==null && <h1>{err}</h1>
            }
            <div className='card-body'>

            <div  className='form mb-3'>
               <label htmlFor="username" className='form-check-label'>Username 
                
                </label>
                <input className='form-control ' type="text" placeholder='username' {...register('username',{required:true})}/>
                {errors.username?.type === "required" && (
                  <p className="text-danger p-1">username is required</p>
                )}
            </div>

            <div className='form'>
               <label htmlFor="email" className='form-check-label'>Email
               </label>
                <input className='form-control' type="email" placeholder='email' {...register('email',{required:true})}/>
                
                {errors.email?.type === "required" && (
                  <p className="text-danger p-1">Email is required</p>
                )}
               </div>

                <div className='form mb-3'>
                <label htmlFor="password" className='form-check-label'>Password
                </label>
                <input className='form-control' type="password" placeholder='password' {...register('password',{required:true})}/>
                
                {errors.password?.type === "required" && (
                  <p className="text-danger p-1">Password is required</p>
                )}
            </div>
            </div>
            <div className="text-center card-footer ">
               <button type="submit" className='border-success border-4 rounded' >Register</button>
               </div>
        </div>
        </form>
        </div>
    </div>
  )
}

export default Signup