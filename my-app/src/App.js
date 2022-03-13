import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";

function App() {
  
  let [ Name, setName ] = useState(0); 
  
  const clickHandeler = ()=>{
    setName(Name+1);
  }
  
  return (
    <div className="App">
      <h1>{ Name }</h1>
      <button onClick={ clickHandeler }>Click me</button>
    </div>
  );
}

export default App;
