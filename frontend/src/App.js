import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';
import Forgot from './Forgot';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/ABOUT" element={<About />} />
          <Route path="/CONTACT" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<Home />} /> {/* Use '/*' to match any path */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;