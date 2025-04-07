// import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css'
import spaceTourismList from '../data.json'

// components
import Home from './components/Home';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';

function App() {
  const { crew, destination, technology } = spaceTourismList
  console.log(crew);
  

  return (
    <>
      
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/destination' element={<Destination />}></Route>
        <Route path='/crew' element={<Crew />}></Route>
        <Route path='/technology' element={<Technology />}></Route>
        <Route path='' element={<p>page not found</p>}></Route>
      </Routes>
    
      <h1>Hello React!</h1>
    </>
  )
}

export default App
