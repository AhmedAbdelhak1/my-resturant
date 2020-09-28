import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        
        
        <nav className="header">
                <div><h1>Ahmed Resturant</h1></div>
                 <ul className="nav-items">
                  <li className="cool-link" ><a href="#content" >Home</a></li>
                  <li className="cool-link" ><a href="#menu" >Menu</a></li>
                  <li className="cool-link" ><a href="#order" > Order</a></li>
                    <li className="cool-link"><a href="#aboutus">About us</a></li>
                    
                    
                </ul>  
            
            
            </nav>
            
    )
}

export default Navbar
