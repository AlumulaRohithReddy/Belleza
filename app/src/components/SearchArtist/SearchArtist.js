import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import '../SearchArtist/SearchArtist.css'
import axios from 'axios'
import { UserContext } from '../../Data/UserContext'
import { useContext } from 'react'
import { OccContext } from '../../Data/OccC'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
function SearchArtist() {
    let{register,handleSubmit,formState:{errors}}=useForm()

    const notify = (obj) => {
      console.log(obj);
      toast(`Hey ${users} ,Our Artists will reach you soon.`)};
  let [users]=useContext(UserContext)
  let [occ]=useContext(OccContext)

    const [Artist,setArtist]=useState([])
    const [location,setlocation]=useState('')
    const [details,setdetail]=useState([])

    async function getsearch(){
        let res=await axios.get('http://localhost:3001/make-api/location')
        if(res.data.message==="fetch succes"){
            setArtist(res.data.makeUp)
        }
    }
    function set(e){
        console.log("hey");
        setlocation(e.target.value)
        console.log(e.target.value);
    }
    function de(idx){
        setdetail(Artist[idx])
    }
useEffect(()=>{
    getsearch()
    
},[])

  return (
     <div>
        <div>
       
    <div className='main2'>
        <h1 className='head3'>Sub-occasion</h1>
        <div className='detail'>
        <div class="main-container">
        <div class="wiki-search-header ms-5 text-center">
            <input id="searchInput" placeholder="Enter your location" type="search" onChange={set} class="search-input form-control w-400" />
        </div>
        <div class="d-none" id="spinner">
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                </div>
            </div>
        </div>
        <div className='sr'>
        <div id="searchResults" class="search-results">
        
            {
                Artist.filter((art)=>{return (art.location.toLowerCase().includes(location.toLowerCase()))})
                .map((art,idx)=>{return(
                    <div className='loc'>
                    <div >
                    <img src={art.logo} className='lo'/>
                    </div>
                    <h2 className='artist'>{art.name}</h2>
                    <p className='Rating'>{art.rating}</p>
                    <button  className='bt' onClick={()=>de(idx)}>{art.price}</button>
                    </div>
                )})
            }
        </div>
        </div>
    </div>

        <div className='card8'>
          <h1 className='text-center head'>Details</h1>
          <form  onSubmit={handleSubmit(notify)}>
            <div className='imp'>
          <h2 className='hea'>Name:<span className='span'> {users}</span></h2>
          <div >
          <p className='dName'></p>
          
          </div>
          <hr className='hr'/>
          </div>
          <div className='imp'>
          <h2 className='hea'>Occasion: <span className='span'>{occ}</span></h2>
          <div >
          <p className='dc'></p>
         
          </div>
          <hr className='hr'/>
          </div>
          <div className='imp'>
          <h2 className='hea'>Location: <span className='span'>{details.location} </span></h2>
          <div >
          <p className='dlocation'></p>
          
          </div>
          <hr className='hr'/>
          </div>
          <div className='imp'>
          <h2 className='hea'>Price: <span className='span'>{details.price} </span></h2>
          <div>
          <p className='text-center'></p>
          </div>
          <hr className='hr'/>
          </div>
          <div className='text-center sub'>
          <button className="b3 m-auto mt-5" type="submit">Submit</button>
          <ToastContainer position='top-center'/>
          </div>  
          </form>
          </div>
        </div>     
    </div>
     
   </div>
    </div>
  )
}

export default SearchArtist