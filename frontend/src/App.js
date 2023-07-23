import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import NavBar from "./component/NavBar"


function App(){
  return(
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App 