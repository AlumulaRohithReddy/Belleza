import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Others() {
  return (
    <div>
         <div>
        <div>
    <div className='main'>
        <Link className='bt' to='/Gall'>Back</Link>
        <div >
            <h1 className='head'>Gallery</h1>
            <div className='con'>
            <img src='https://res.cloudinary.com/dohmv9cgy/image/upload/v1718170907/odchj8teea21tjvblwfz.png' className='image'/>
            <img src='https://res.cloudinary.com/dohmv9cgy/image/upload/v1718170922/zxytg9tfuhtzbazxytwc.png' className='image'/>
            <img src='https://res.cloudinary.com/dohmv9cgy/image/upload/v1717824404/b0uwe9xlqtkzdcxb5tmq.png' className='image'/>
            
        </div>
        </div>
       
        </div>
         <div class="footer-section pt-5 pb-5">
         <div class="container">
           <div class="row">
             <div class="col-12 text-center">
               <img
                 src="https://mail.google.com/mail/u/0?ui=2&ik=317a1da3bd&attid=0.1&permmsgid=msg-f:1791796945846943122&th=18ddbdd432d63d92&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_wIMCxezeFTyU7DnojN9pTI29VeyahI1N2rdyGXNafmNVJ-PmQy7SD-D2se6TIw6i34syWS6sHRbQRwQsbXk9AEucfNA2bc9QrBeivJDq-nJz5qEswEYfy08w&disp=emb&realattid=ii_lsznvbct0"
                 class="logo"
               />
               <h1 class="footer-section-mail-id">belleza2819@gmail.com</h1>
               <p class="footer-section-address">
                 123 Pragathi Nagar, Hyderabad, India.
               </p>
             </div>
           </div>
         </div>
       </div>
       </div>
    </div>
    </div>
  )
}

export default Others