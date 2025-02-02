import React, { useState } from 'react'
import '../Login/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import img from '../Login/img.png'
import { UserContext } from '../../Data/UserContext'
import { useContext } from 'react'
import axios from 'axios'
function Login() {
  let{register,handleSubmit,formState:{errors}}=useForm()
  let [users, setUser]=useContext(UserContext)
  let [err,seterr]=useState('')
  let navigate=useNavigate()
  async function login(obj){
    let res=await axios.post('http://localhost:3001/user-api/login',obj)
    console.log("hi",obj);
    console.log("res",res);
    if(res.data.message==="Login success"){
      setUser(obj.username)
      navigate("/Home")
      console.log("user",users);

    }
    else{
      seterr(res.data.message)
    }
    
  }
  return (
    <div>
      <div className="d d-flex flex-column justify-content-center align-items-center">
            
            <div className="image1">
              <img src={img} className="img"/>
            </div>
            {
              err.length!==null && <h1>{err}</h1>
            }
            <form onSubmit={handleSubmit(login)}>

            <div className="card">
            <label for="Username" className="l">Username</label>
            <input type="text" id="Username" placeholder="Enter Username" {...register('username',{required:true})}/>
            {errors.Username?.type === "required" && (
                  <p className="text-danger p-1">username is required</p>
                )}
            <p ></p>
            <label for="Password" className="l">Password</label>
            <input type="password" id="Password"  placeholder="Enter Password" {...register('password',{required:true})}/>
            {errors.Password?.type === "required" && (
                  <p className="text-danger p-1">Password is required</p>
                )}
            <p ></p>

            <div className="text-center card-footer ">
               <button type="submit" className='border-success border-4 rounded' >Login</button>
              </div>
        </div>
            </form>

            <Link to="/signup">SignUP</Link>
    </div>

    </div>
  )
}

export default Login;