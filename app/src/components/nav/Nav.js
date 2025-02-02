import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import img from '../Login/img.png'
import { UserContext } from '../../Data/UserContext'
import { useContext } from 'react'
function Nav() {
  let [users,setUser]=useContext(UserContext)
  function log(){
    setUser('')
  }
  return (
    <div>
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
    <div class="container">
      <NavLink class="navbar-brand mr-auto" to='/Home'> 
        <img
          src={img}
          class="logo"
        />
      </NavLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav  ">
          <Link class="nav-link active" id="navItem1" to='/Home'>
            Home
          </Link>
          <Link class="nav-link active" id="navItem1" to='occ'>
            Occasions
            
          </Link>
          <Link class="nav-link active" id="navItem1" to='Gall'>
            Gallery
           
          </Link>
          <Link class="nav-link active" id="navItem1" to='review'>
            Reviews
          
          </Link>
          <Link class="nav-link active" id="navItem1" to='contact'>
            Contact Us
          
          </Link>
          {
              users.length && <Link class="nav-link active" id="navItem1" to='/' onClick={log}>
              LogOut
            
            </Link>
          }
        </div>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Nav