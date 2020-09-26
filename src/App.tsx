import React from 'react';
import './App.css';
import Content from './Components/Content';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import second from "./images/second.jpg";
import burger from "./images/burger.jpg";




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content/>
      <img src={second} className="firstimage"/>
      <Menu/>
      <div>  
        <img src={burger} className="cardimage" alt=""/>
      </div>
      
      
      
      
      
    </div>
  );
}

export default App;
