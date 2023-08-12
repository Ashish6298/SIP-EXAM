import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import "./Login.css";

const Signup = () => {
  return (
    <div className="d-flex justify-content-center vh-100 align-items-center" id="b-img">
      <div className="border border-2 border-dark p-4 bg-white">
      <h3>Welcome to our Signup Page</h3>
      <p>Please fill in the following details to create an account:</p>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className="form-control"/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" className="form-control" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" className="form-control"/>
        </div>
        <div className='mb-3'>
          <label htmlFor="contact no">Contact No:</label>
          <input type="text" id="password" name="contactno" className="form-control" />
        </div>
        <div className="d-grid">
            <button className="btn btn-dark" type="submit">
                SIGN UP
            </button>
        </div>
      </form>
      <p className="mb-3">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
      </div>
    </div>
  );
};

export default Signup;