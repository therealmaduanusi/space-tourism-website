import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import spaceTourismList from "../data.json";
import './App.css'

// components
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

import Navigation from './components/Navigation';

import Moon from './components/Moon';
import Mars from './components/Mars';
import Europa from './components/Europa';
import Titan from './components/Titan';

function App() {
  const { crew, destinations, technology } = spaceTourismList;
  // console.log(destinations);

  return (
    <>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/destination" element={<Destination />}>
          <Route index element={<Moon destinations={destinations} />}></Route>
          <Route path='moon' element={<Moon destinations={destinations} />}></Route>
          <Route path='mars' element={<Mars destinations={destinations} />}></Route>
          <Route path='europa' element={<Europa destinations={destinations} />}></Route>
          <Route path='titan' element={<Titan destinations={destinations} />}></Route>
        </Route>
        <Route path="/crew" element={<Crew crews={crew} />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
        <Route path="*" element={<p>page not found</p>}></Route>
      </Routes>
    </>
  );
}

export default App;
