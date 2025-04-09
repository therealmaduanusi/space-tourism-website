import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import spaceTourismList from "../data.json";

// components
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

function App() {
  const { crew, destination, technology } = spaceTourismList;
  const [hamburger, setHamburger] = useState(false)
  console.log(crew);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/destination" element={<Destination />}></Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
        <Route path="*" element={<p>page not found</p>}></Route>
      </Routes>
    </>
  );
}

export default App;
