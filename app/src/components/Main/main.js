import React from 'react'
import '../Main/Main.css'
import { Link, NavLink } from 'react-router-dom'
function main() {
  return (
    <div>
     
  <div class="banner-section-bg-container d-flex justify-content-center flex-column">
    <div class="text-center">
      <h1 class="Heading mb-3">BELLEZA</h1>
      <p class="h-2 mb-4">Where Beauty Blossoms</p>
      <Link to='/men' ><button class="custom-button">Male</button></Link>
      <Link to='/female'><button class="custom-outline-button" >Female</button></Link>
    </div>
  </div>
  
  
</div>
    
  )
}

export default main