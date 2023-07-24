import React from "react";
import BreadCrumb from "./BreadAbout";

const About = () => {
  return (
    <div className="min-vh-100">
      <BreadCrumb />
      <h1 className="text-center">About Us</h1>
      <div className="p-5">
        <img src="/assets/nett.webp" className="card-img-top" alt="" />
      </div>
      <div class="p-5 accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
FOOD HUB            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>Food Court </strong>
              <p>Best Food Available</p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Address
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
           We Provide Best foods{" "}
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Location & Contact
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores labore maiores doloremque architecto, rem, tempora
                eum possimus ad, veniam placeat nemo cumque culpa corporis
                adipisci illo alias voluptate nobis soluta?
              </p>
              <strong>8804339456</strong>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default About;