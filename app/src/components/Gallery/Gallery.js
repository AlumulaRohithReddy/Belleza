import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../Gallery/Gallery.css'
function Gallery() {
  return (
        <div>
               
        <div className="c1 ">
        <h1 className="head">Gallery</h1>
        <div className="se">
                <Link className="c2"to='/bridal'>
                    <Link className="b2 mt-3" to='/bridal'>Bridal</Link>  
            </Link>
                <Link className="c3" to='/o'>
                   
                <Link className="b2 mt-3" to='/o'>Others</Link>
    
            </Link>
             <Link className="c4" to='/model'>
                    
                    <Link className="b2 mt-3" to='/model'>Model</Link>
                
            </Link>
            <Link className="c5" to='/male'>
                    
                    <Link className="b2 mt-3" to='/male'>Men</Link>
                
            </Link>
        </div>
    </div>
    
    </div> 

  )
}

export default Gallery