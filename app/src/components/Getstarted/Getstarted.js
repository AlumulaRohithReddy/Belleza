import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { OccContext } from '../../Data/OccC'
import { useContext } from 'react'
function Getstarted() {
  let [occ,setOcc]=useContext(OccContext)
  function set(e){
    console.log("vs",e);
    setOcc(e)
    console.log(occ);
  }
  return (
    <div>
        <div>
         <div>
       
    <div className='main2'>
    <Link className='bt' to="/Home/occ">Back</Link>
        <h1 className='head3'>Sub-occasion</h1>
       <div className='details'>
        <div className='card1'>
        <Link  to="/searchartist" >
            <button className='li' onClick={(e)=>set(e.currentTarget.textContent)}> Maternity</button>
          </Link>
          <Link  to="/searchartist" >
            <button className='li' onClick={(e)=>set(e.currentTarget.textContent)}>Pre/PostWedding</button>
          </Link>
          <Link  to="/searchartist" >
            <button className='li' onClick={(e)=>set(e.currentTarget.textContent)}>PortFolio</button>
          </Link>
            
        </div>   
        <div className='card8'>
          <h1 className='text-center head'>Details</h1>
          <div >
            <div className='imp'>
          <h2 className='hea'>Name:</h2>
          <div >
          <p className='dName'></p>
          
          </div>
          <hr className='hr'/>
          </div>
          <div className='imp'>
          <h2 className='hea'>Occasion:</h2>
          <div >
          <p className='dc'></p>
         
          </div>
          <hr className='hr'/>
          </div>
          <div className='imp'>
          <h2 className='hea'>Location:</h2>
          <div >
          <p className='dlocation'></p>
          
          </div>
          <hr className='hr'/>
          </div>
          <div className='imp'>
          <h2 className='hea'>Price:</h2>
          <div>
          <p className='text-center'></p>
          </div>
          <hr className='hr'/>
          </div>
          </div>  
          </div>
          </div>    
    </div>
     
   </div>
    </div>
    </div>
  )
}

export default Getstarted