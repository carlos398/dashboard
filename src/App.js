import React from 'react';
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Login } from "./components/urls/login"
import { DashBoard } from "./components/urls/dashboard"

function App() {
  return (
    <Router>
      <div className = 'container'>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/dash" element={<DashBoard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
