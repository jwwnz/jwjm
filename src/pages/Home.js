import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import Map from "../components/Map";

export default class Home extends Component {
  render() {
    return (
      <div className="container padding-top">
        <h2 className="font-special">We are getting married</h2>
        <img
          src="http://mcard.barunnfamily.com/Photos/201812/SS2658898/mainimage.PNG?ipignore=true&1544964903394" alt="종우와 지민이의 결혼식에 초대합니다."
          className="padding-top landing-photo center"
        />
        <div className="container font-message">
          {/* Invitation */}
          <div className="padding-top ">
            <h5>INVITATION</h5>
            <div className="padding-medium font-message">It is our great privilege <br /> to invite you to join us in celebrating our special moment<br /> where we become one through faith and love.</div>
          </div>

          {/* Location */}
          <div className="padding-top">
            <h5>LOCATION</h5>
            <div className="padding-medium">To be held on 12th January 2019 (Saturday) Afternoon 2:00pm.</div>
            {/* <div> */}
            <Link to="/venue">CCMM Building, Lunamielle 12th Floor Convention Hall</Link>
            {/* </div> */}
            <Map />
          </div>

          {/* Photos */}
          <div className="row">
            <div className="padding-top center">
              <h5>PHOTOS</h5>
              <Carousel />
            </div>
          </div>

          {/* Message */}
          <div className="padding-top">
            <h5>CONGRATULATORY MESSAGE</h5>
            <div className="padding-medium">
              <a href='http://mcard.barunnfamily.com/SS2658898?c178#guest_book'>Click here to leave a congratulatory message.</a>
            </div>
            <br></br>
          </div>

        </div>

        <br /><br />
        <div className="card-content center padding-top">
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}
