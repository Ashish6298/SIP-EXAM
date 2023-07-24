import React from "react";
import BreadCrumb from "./BreadHome";

const Home = () => {
  return (
    <div className="min-vh-100">
      <BreadCrumb />
      <div className="text-center">
        <svg
          xmlns=""
          width="75"
          height="75"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="#"
          />
        </svg>{" "}
        <h1>Food Court</h1>
      </div>
      <h6 className="text-center">Foods WE Offer</h6>
      <div className="p-5">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="assests/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg" width="500px"/>
            </div>
            <div class="carousel-item">
              <img src="assests/Unhealthy-Food-Chart.jpg"  width="500px" />
            </div>
            <div class="carousel-item">
              <img src="assests/unhealthy-food-e1533216858696-720x380.jpg.webp"  width="500px" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;