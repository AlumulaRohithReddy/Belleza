import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Others() {
  return (
    <div>
         <div>
        <div>
    <div className='main'>
        <Link className='bt' to='/Home/Gall'>Back</Link>
        <div >
            <h1 className='head'>Gallery</h1>
            <div className='con'>
            <img src='https://res.cloudinary.com/dohmv9cgy/image/upload/v1718170907/odchj8teea21tjvblwfz.png' className='image'/>
            <img src='https://res.cloudinary.com/dohmv9cgy/image/upload/v1718170922/zxytg9tfuhtzbazxytwc.png' className='image'/>
            <img src='https://res.cloudinary.com/dohmv9cgy/image/upload/v1717824404/b0uwe9xlqtkzdcxb5tmq.png' className='image'/>
            
        </div>
        </div>
       
        </div>
         
       </div>
    </div>
    </div>
  )
}

export default Others