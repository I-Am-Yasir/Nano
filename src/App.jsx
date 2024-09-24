// App.jsx
import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Sidebar from './Components/Sidebar/Sidebar';
import Product from './Components/product/Product';
const App = () => {
  return (
    <>
    
      <Navbar />
      <Sidebar/>
      <Product/>
    </>
  );
};

export default App;
