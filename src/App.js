import React, {useState} from 'react';
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Login } from "./components/urls/login"
import { DashBoard } from "./components/urls/dashboard"
import { Register } from "./components/urls/register"

function App() {

  const [token, setToken] = useState(' ')

  const userToken = (tok) => {
    setToken(tok)
  }
  console.log(token)
  return (
    
    <Router>
      <div className = 'container'>
        <Routes>
          <Route path="/" element={<Login userToken={userToken}/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dash" element={<DashBoard token={token}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
