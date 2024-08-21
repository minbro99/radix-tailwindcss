import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import NavBar from './NavBar';

const Home: React.FC = () => {
    return (
    <BrowserRouter>
    <NavBar />
    
    </BrowserRouter>
    )
}

export default Home;