import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        
        
        <nav className="header">
                <div><h1>Ahmed Resturant</h1></div>
                 <ul className="nav-items">
                  <li className="cool-link" ><a href="#content" >Home</a></li>
                  <li className="cool-link" ><a href="#ourservices" >Menu</a></li>
                  <li className="cool-link" ><a href="#makeorder" > Order</a></li>
                    <li className="cool-link"><a href="#aboutus">About us</a></li>
                    <li className="cool-link"><a href="#contactus">Contact us</a></li>
                    
                </ul>  
            
            
            </nav>
            
    )
}

export default Navbar
