import React from 'react';

const Forgot = () => {
  return (
    <div className="d-flex justify-content-center vh-100 align-items-center"id="b-img">
      <div className="border border-2 border-dark p-4 bg-white">
        <form>
          <h3 className="text-center">FORGOT PASSWORD</h3>
          <div className="mb-3">
            <label htmlFor="EMAIL" className="form-label">
              EMAIL
            </label>
            <input
              placeholder="example@gmail.com"
              type="email"
              name="Email"
              className="form-control"
            />
          </div>
          <button className="btn btn-dark" type="submit">
            RESET PASSWORD
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgot;