import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './components/Login';
import HomeDark from "./pages/NavBar/HomeColor/HomeDark";
import HomeLight from "./pages/NavBar/HomeColor/HomeLight";  

function App() {
  return(
    <>
    
    
    <Routes>
      <Route path="/" element={<Login />} />

       <Route path="/dark" element={<HomeDark />} />
       <Route path="/light" element={<HomeLight />} />
    </Routes>
    
    </>
  )
}

export default App;
