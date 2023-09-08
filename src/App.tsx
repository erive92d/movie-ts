import React from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewMovie from './pages/ViewMovie';

function App() {

  return (
    <Router>
      <div className="bg-black min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path={`/movie/:movieId`} element={<ViewMovie/>} />     
        </Routes>
      </div>
    </Router>
    
  )
}

export default App
