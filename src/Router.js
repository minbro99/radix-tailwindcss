import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from './components/Login';
import Home from './components/Home';
import Map from "./pages/Map";
import Exchange from "./pages/Exchange";
import HomeDark from "./pages/NavBar/HomeColor/HomeDark";
import HomeLight from "./pages/NavBar/HomeColor/HomeLight";  
import MainCrud from "./pages/NavBar/Crud/CrudMain";


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
      <Route path="/dark" element={<HomeDark />} />
      <Route path="/light" element={<HomeLight />} />
      <Route path="/crud" element={<MainCrud />} />
    </Routes>
  
    
    </>
  )
}

export default Router;

