import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function male() {
  return (
    <div>
    <div className='main'>
        <Link className='bt' to='/Home/Gall'>Back</Link>
        <div >
            <h1 className='head'>Gallery</h1>
            <div className='con'>
            <img src='https://5.imimg.com/data5/HO/TU/WJ/SELLER-10171600/male-model-portfolio-photography-service-500x500.jpg' className='image'/>
            <img src='https://www.vesham.in/cdn/shop/files/MKC1008_SEQNS_LCE_MR_F.jpg?v=1696768651' className='image'/>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP662JQ30PEvYzxC-uRqHoApflNFgs6yDruQ&s' className='image'/>
            <img src='https://static.vecteezy.com/system/resources/thumbnails/023/309/794/small/ai-generative-a-man-on-solid-color-backgroundshoot-with-serious-facial-expression-photo.jpg' className='image'/>
        </div>
        </div>
       
        </div>
        
       </div>
  )
}

export default male