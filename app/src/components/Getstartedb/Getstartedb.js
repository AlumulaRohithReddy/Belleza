import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../Getstartedb/Getstarteddb.css'
import { UserContext } from '../../Data/UserContext'
import { OccContext } from '../../Data/OccC'
import { useContext } from 'react'
function Getstartedb() {
  let [occ,setOcc]=useContext(OccContext)
  function set(e){
    console.log("vs",e);
    setOcc(e)
    console.log(occ);
  }
  return (
    <div>
        <div>
       
    <div className='main2'>
        
        <h1 className='head3'>Sub-occasion</h1>
        <div className='detail'>
        <div className='card1'>
          <Link  to="/searchartist" >
            <button className='li' onClick={(e)=>set(e.currentTarget.textContent)}> Engagement</button>
          </Link>
          <Link  to="/searchartist" >
            <button className='li' onClick={(e)=>set(e.currentTarget.textContent)}>Haldi</button>
          </Link>
          <Link  to="/searchartist" >
            <button className='li' onClick={(e)=>set(e.currentTarget.textContent)}> Sangeet</button>
          </Link>
          <Link  to="/searchartist" >
            <button className='li' onClick={(e)=>set(e.currentTarget.textContent)}> Reception</button>
          </Link>
          <Link  to="/searchartist" >
            <button className='li' onClick={(e)=>set(e.currentTarget.textContent)}> Wedding</button>
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
  )
}

export default Getstartedb