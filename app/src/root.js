import React from 'react'
import Nav from './components/nav/Nav'
import {Outlet} from 'react-router-dom'
import Footer from './components/footer/Footer'
function root() {
  return (
    <div>
        <Nav></Nav>
        <div style={{minHeight:"88vh"}}>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default root