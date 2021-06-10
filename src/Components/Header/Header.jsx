import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './Header.css'
function Header() {
    const showhide=()=>{
       let hii=document.querySelector('.hii')
       hii.classList.add('visible')
    }
    const hideshow=()=>{
        let hii=document.querySelector('.hii')
        hii.classList.remove('visible')

    }
    return (
        <div className="header">
            <div className="header-left">
                <div className="logo">  
                <img src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg" alt="" />
                </div>
            </div>
            <div className="header-right">
                <ul>
                   <Link style={{textDecoration:"none"}} to="/category"> <li>Search</li></Link>
                    <li>Offers</li>
                    <li>help</li>
                    <li>user</li>
                    
                </ul>
                {/* <i id="ham" onClick={showhide} class="ri-menu-3-fill"></i>
                 */}
                 <i id="ham" onClick={showhide} class="fas fa-bars"></i>
                

                <ul className="hii">
                <i onClick={hideshow} class="fas fa-times-circle kel"></i>
                

                   <Link style={{textDecoration:"none"}} to="/category"> <li>Search</li></Link>
                    <li>Offers</li>
                    <li>help</li>
                    <li>user</li>
                   
                </ul>

                

            </div>
            
        </div>
    )
}

export default Header
