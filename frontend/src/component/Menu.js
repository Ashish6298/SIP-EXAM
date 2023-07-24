import React from "react";
import BreadCrumb from "../component/BreadMenu";

const Menu = () => {
  return (
    <div className="min-vh-100">
      <BreadCrumb />
      <h1 className="text-center py-5">Foods We have</h1>
      <div className="row px-5 pb-5">
        <div className="col px-3">
          <div className="card">
            <img
              src="/assests/rajma-chawal-punjabi-style.jpg"width="450px"/>

            <div className="card-body">
              <h5 className="card-title">VEGETERIAN</h5>
              <p className="card-text">Rajam Chawal, Curry Rice, Butter Paneer.....
              </p>
              <a href="#" className="btn btn-danger">
Tap   to check variety            </a>
            </div>
          </div>
        </div>
        <div className="col px-3">
          <div className="card">
            <img src="assests/Chicken-Biryani.jpg"  width="400px" />

            <div className="card-body">
              <h5 className="card-title">NON-VEGETERIAN</h5>
              <p className="card-text">
                Chicken Biryani, Mutton Biryani, Hyderabadi Biryani.....
              </p>
              <a href="#" className="btn btn-danger">
                Tap to check varites
              </a>
            </div>
          </div>
        </div>
        <div className="col px-3">
          <div className="card">
            <img src="assests/fish.jpg"  width="480px" />

            <div className="card-body">
              <h5 className="card-title">SEA FOODS</h5>
              <p className="card-text">
                Fish Curry, Prawns, Octopus Soup.....
              </p>
              <a href="#" className="btn btn-danger">
                Tap to check the variety
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row pb-5 px-5">
        <div className="col px-3">
          <div className="card">
            <img src="assests/Easy-Diwali-Sweets-768x960.jpg"  length="200px" width="400px" />

            <div className="card-body">
              <h5 className="card-title">Sweets</h5>
              <p className="card-text">
                Gulab Jaamun, Rashgulla, Peda....

              </p>
              <a href="#" className="btn btn-danger">
                Tap To check variety
              </a>
            </div>
          </div>
        </div>
        <div className="col px-3">
          <div className="card">
            <img src="assests/Desserts.jpg" width="315px" />

            <div className="card-body">
              <h5 className="card-title">Deserts</h5>
              <p className="card-text">
                Vanilla Icecream, Chocolate Icecream, Strawberry Icecream......
                  </p>
              <a href="#" className="btn btn-danger">
                Tap to check variety
              </a>
            </div>
          </div>
        </div>
        <div className="col px-3">
          <div className="card">
            <img src="assests/cakes_1.jpg" width="320px" />

            <div className="card-body">
              <h5 className="card-title">Cakes</h5>
              <p className="card-text">
                Butterscotch, Black Forest, Dark Chocolate........
                </p>
              <a href="#" className="btn btn-danger">
Tap to check variety              </a>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default Menu;