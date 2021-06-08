import React from 'react'
import './Header.css'
function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <div className="logo">  
                <img src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg" alt="" />
                </div>
            </div>
            <div className="header-right">
                <ul>
                    <li>Search</li>
                    <li>Offers</li>
                    <li>help</li>
                    <li>user</li>
                </ul>

            </div>
            
        </div>
    )
}

export default Header
