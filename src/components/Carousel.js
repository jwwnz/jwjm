import React from "react";
import LandingPhoto1 from "../resources/1.JPG";
import LandingPhoto2 from "../resources/2.JPG";
import LandingPhoto3 from "../resources/3.PNG";
import LandingPhoto4 from "../resources/4.PNG";
import LandingPhoto5 from "../resources/5.PNG";
import LandingPhoto6 from "../resources/6.PNG";
import LandingPhoto7 from "../resources/7.JPG";
import LandingPhoto8 from "../resources/8.JPG";
import LandingPhoto9 from "../resources/9.JPG";
import LandingPhoto10 from "../resources/10.JPG";

export default function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide padding-medium"
      data-ride="carousel"
    >
    {/* Indicators */}
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        <li data-target="#carouselExampleIndicators" data-slide-to="3" />
        <li data-target="#carouselExampleIndicators" data-slide-to="4" />
        <li data-target="#carouselExampleIndicators" data-slide-to="5" />
        <li data-target="#carouselExampleIndicators" data-slide-to="6" />
        <li data-target="#carouselExampleIndicators" data-slide-to="7" />
        <li data-target="#carouselExampleIndicators" data-slide-to="8" />
        <li data-target="#carouselExampleIndicators" data-slide-to="9" />

      </ol>

      {/* Actual photos */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src={LandingPhoto1}
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={LandingPhoto2}
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={LandingPhoto3}
            alt="Third slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={LandingPhoto4}
            alt="Fourth slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={LandingPhoto5}
            alt="Fifth slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={LandingPhoto6}
            alt="Sixth slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={LandingPhoto7}
            alt="Seventh slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={LandingPhoto8}
            alt="Eigth slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={LandingPhoto9}
            alt="Ninth slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={LandingPhoto10}
            alt="Tenth slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
