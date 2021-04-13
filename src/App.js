import React from 'react'
import Main from './Main'
import Accodation from './Components/Accodation';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loginsignup from './Components/LoginSignup';

function App() {
  return (
    <div className="App">
    
      
      <Main/>
      {/* <Accodation/> */}
      {/* <Loginsignup/> */}
      
    </div>
  );
}

export default App;
