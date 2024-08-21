import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import LoginSuccess from './components/loginsuccess';

function App() {
  return(
    <>
    <BrowserRouter>
    <Login />
    <Routes>
      <Route path="/home" element={<Home />} />.
      <Route path="/loginsuccess" element={<LoginSuccess />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;