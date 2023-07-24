import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Menu from "./component/Menu";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/menu" element={<Menu />}></Route>
              <Route exact path="/about" element={<About />}></Route>
            </Routes>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;