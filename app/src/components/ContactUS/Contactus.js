import React from 'react'
import '../ContactUS/Contactus.css'
import { Link, NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contactus() {
  let{register,handleSubmit,formState:{errors}}=useForm()

  const notify = (obj) => {
    console.log(obj);
    toast(`Hey ${obj.name} We have received your problem , we will reach to you very soon.`)};
  return (
    <div>
        
    <div className='main1'>
        <div className='cardhelp'>
          <form onSubmit={handleSubmit(notify)}>
            <h1 className='head'>We Are Here To Help You</h1>
            <div  className='form mb-1'>
            <label htmlFor="username" className='form-check-label hea'>Username 
                
                </label>
            <input type="text" id="Username"  className='form-control mb-2' height="40px" width="500px" placeholder="Name" {...register('name',{required:true})} />
            {errors.name?.type === "required" && (
                  <p className="text-danger p-1">username is required</p>
                )}
            </div>
            <div  className='form mb-1'>
            <label htmlFor="email" className='form-check-label hea'>Email
            </label>
            <input type="text" id="email"  className='form-control  mb-2' width="500px" placeholder="Email"  {...register('mail',{required:true})}/>
            {errors.mail?.type === "required" && (
                  <p className="text-danger p-1">Email is required</p>
                )}
            </div>
            <div  className='form mb-1'>
            <label htmlFor="Number" className='form-check-label hea'>Contact
            </label>
            <input type="text" id="Contact"  className='form-control mb-2' width="500px" placeholder="Contact"  {...register('Contact',{required:true})}/>
            {errors.Contact?.type === "required" && (
                  <p className="text-danger p-1"> is required</p>
                )}
            </div>
            <div className='form mb-1'>
            <label htmlFor="Message" className='form-check-label hea'>Message
            </label>
            <textarea type="text" id="message"  rows='5' cols="23" className='form-control mb-2' width="500px" placeholder="Message" {...register('Message',{required:true})}></textarea>
            {errors.Message?.type === "required" && (
                  <p className="text-danger p-1"> is required</p>
                )}
            </div>
            <div className="text-center">
            <button className="b3 m-auto mt-5" type="submit">Submit</button>
            </div>
            <ToastContainer position='top-center'/>
            <hr className='hr'/>
            <div className='details'>
              <h1 className='hea'>Contact-6301176922</h1>
              <h1 className='hea'>belleza2819@gmail.com</h1>
            </div>
            <div className="text-center">
              <h1 className='hea'>123 Pragathi Nagar, Hyderabad, India.</h1>
            </div>
            </form>
        </div>       
    </div>
    
   </div>
  )
}

export default Contactus