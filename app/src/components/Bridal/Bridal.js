import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../Bridal/Bridal.css'
function Bridal() {
  return (
    <div>
    <div className='main'>
        <Link className='bt' to='/Home/Gall'>Back</Link>
        <div >
            <h1 className='head'>Gallery</h1>
            <div className='con'>
            <img src='https://res.cloudinary.com/dohmv9cgy/image/upload/f_auto,q_auto/ufgg10fgmsqprgft2gqe' className='image'/>
            <img src='https://res.cloudinary.com/dohmv9cgy/image/upload/f_auto,q_auto/ln8r3tbcapgdvxut3zlv' className='image'/>
            <img src='https://res.cloudinary.com/dohmv9cgy/image/upload/v1718170886/pmrook2iyl24c5hzouu5.png' className='image'/>
            <img src='https://res.cloudinary.com/dohmv9cgy/image/upload/v1718170822/br4ll6ecxpgegomi6t2p.png' className='image'/>
            <img src='https://res.cloudinary.com/dohmv9cgy/image/upload/v1718170867/wubclyi2mbjbsiylzsep.png' className='image'/>
        </div>
        </div>
       
        </div>
        
       </div>
  )
}

export default Bridal