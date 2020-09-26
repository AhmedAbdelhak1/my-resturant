import React from 'react';
import './App.css';
import Content from './Components/Content';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import second from "./images/second.jpg";
import burger from "./images/burger.jpg";
import third from "./images/third.jpg";
import four from "./images/four.jpg";
import five from "./images/five.jpg";
import six from "./images/six.jpg";
import seven from "./images/seven.jpg";
import eight from "./images/eight.jpg";
import nine from "./images/nine.jpg";
import Order from './Components/Order';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content/>
      <img src={second} className="firstimage"/>
      <Menu/>
      <div className="allcard">  
        <img src={burger} className="cardimage" alt=""/>
        <img src={third} className="cardimage" alt=""/>
        <img src={four} className="cardimage" alt=""/>
        <img src={five} className="cardimage" alt=""/>
        <img src={six} className="cardimage" alt=""/>
        <img src={seven} className="cardimage" alt=""/>
        <img src={eight} className="cardimage" alt=""/>
        <img src={nine} className="cardimage" alt=""/>
      </div>
      <Order/>

      
      
      
      
      
    </div>
  );
}

export default App;
