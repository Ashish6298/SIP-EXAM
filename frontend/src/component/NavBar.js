import React from 'react'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <>
        <nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to="/">
                    My Website
                </Link>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav me-auto'>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/">
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    
    </>
  );
};

export default NavBar;