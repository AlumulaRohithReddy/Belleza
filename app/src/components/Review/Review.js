import React, { useEffect, useState } from 'react'
import '../ContactUS/Contactus.css'
import { Link, NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Review() {
    let{register,handleSubmit,formState:{errors}}=useForm()
    let [review,setReview]=useState([])
    const notify = (obj) => {
      setReview([...review,obj])
      console.log(obj);
      // localStorage.setItem("review",JSON.stringify(obj) )
      // let rev=localStorage.getItem("review")
      // setReview([...review,rev])
      toast(`Hey ${obj.name} ,Thank you for your feedback.Have a good day`)};
    
    return (
    <div>
        
    <div className='main1'>
        <div className='cardhelp'>
        <div className='feed'>
          <form onSubmit={handleSubmit(notify)}>
            <h1 className='head'>Give Us The Feedback</h1>
            <div  className='form mb-1'>
            <label htmlFor="Username" className='form-check-label hea'>Username 
                
                </label>
            <input type="text" id="Username"  className='form-control mb-2' height="40px" width="500px" placeholder="Name" {...register('name',{required:true})} />
            {errors.name?.type === "required" && (
                  <p className="text-danger p-1">username is required</p>
                )}
            </div>
            <div  className='form mb-1'>
            <label htmlFor="Artistname" className='form-check-label hea'>Artist Name
            </label>
            <input type="text" id="Artistname"  className='form-control  mb-2' width="500px" placeholder="Artist name"  {...register('mail',{required:true})}/>
            {errors.mail?.type === "required" && (
                  <p className="text-danger p-1">Artist is required</p>
                )}
            </div>
            <div className='form mb-1'>
            <label htmlFor="FeedBack" className='form-check-label hea'>Feedback
            </label>
            <textarea type="text" id="FeedBack"  rows='5' cols="23" className='form-control mb-2' width="500px" placeholder="Feedback" {...register('Message',{required:true})}></textarea>
            {errors.Message?.type === "required" && (
                  <p className="text-danger p-1"> Feedback is required</p>
                )}
            </div>
            <div className="text-center">
            <button className="b3 m-auto mt-5" type="submit">Submit</button>
            </div> 
            <ToastContainer position='top-center'/>
            </form>
            <div/>
            <div className='details'>
              {
                review.length!==0?
                <div className='d-flex flex-wrap'>
                   {
                 review
                .map((rev,idx)=>{
                  return(
                  <div class="card" key={idx} >
                  <div class="card-body">
                    <h5 class="card-title">{rev.name}</h5>
                    <h5 class="card-head">{rev.mail}</h5>
                    <p class="card-text">{rev.Message}</p>
                    
                  </div>
                </div>
                )})
            }
                
              </div>:<p>No Reviews</p>
              }
            </div>
            </div>
            
        </div>       
    </div>
    
   </div>
    )}
export default Review