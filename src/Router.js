import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from './components/Login';
import Home from './components/Home';
import Map from "./pages/Map";
import Exchange from "./pages/Exchange";


import Homepage from '../pages/Homepage';


const Router = () => {
  return(
    <>

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />.
      <Route path="/exchange" element={<Exchange />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/map" element={<Map />} />
    </Routes>
  
    
    </>
  )
}

export default Router;

