import React from 'react'
import '../Occasion/Ocassion.css'
import { Link, NavLink } from 'react-router-dom'
function Occasions() {
  return (
    <div>
        
        <div className="c1 ">
        <h1 className="head">Occasions</h1>
        <div className="se">
                <div className="c">
                    <img src="https://khammaghani.in/wp-content/uploads/2022/06/South-Indian-Bride-785x1024.jpeg" className="img"/>
                    <div className="di ">
                    <h1 className="b mt-3">Bridal</h1>
                    <Link className="bt ml-auto mt-3" to='/get'>Get Started</Link>
                </div>    
            </div>
                <div className="c">
                    <img src="https://img.freepik.com/free-photo/indian-picture-woman-hands-mehendi-tradition-decoration_155003-3325.jpg?t=st=1714803491~exp=1714807091~hmac=5838add803421322e8f45120d387fdbc5227e3a0e3a259c9e2ab6df0e3c597f4&w=360" className="img"/>
                    <div className="di ">
                    <h1 className="b mt-3">Non-Bridal</h1>
                    <Link className="bt ml-auto mt-3" to='/getn'>Get Started</Link>
                </div>    
            </div>
             <div className="c">
                    <img src="https://media.fashonation.com/wp-content/uploads/2023/01/12045646/pexels-photo-1193942.jpeg" className="imge"/>
                    <div className="di ">
                    <h1 className="b mt-3">Shoot</h1>
                    <Link className="bt ml-auto mt-3" to='/shoot'>Get Started</Link>
                </div>-
            </div>
        </div>
    </div>
   
    </div>
  )
}

export default Occasions