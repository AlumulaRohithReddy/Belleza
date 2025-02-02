import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Model() {
  return (
    <div>
        <div>
    <div className='main'>
        <Link className='bt' to='/Home/Gall'>Back</Link>
        <div >
            <h1 className='head'>Gallery</h1>
            <div className='con'>
            <img src='https://res.cloudinary.com/dohmv9cgy/image/upload/v1718170849/d6sd1cokwfx6otfrjbpp.png' className='image'/>
            <img src='https://5.imimg.com/data5/BO/JT/MY-690183/indian-female-models-for-shoots.jpg'className='image'/>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbXho3qqNuVbC-Jf-ZM_FmYK7f5n-KNSbd0w&s' className='image'/>
        </div>
        </div>
       
        </div>
        
       </div>
    </div>
  )
}

export default Model