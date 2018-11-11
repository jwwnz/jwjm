import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

export default class Home extends Component {
  render() {
    return (
      <div className="container padding-top">
        <h1>JAMES & JIMIN</h1>

        <div className="row">
          <div className="center">
            <Carousel />
          </div>
          <br></br>
          <div className="card-content center padding-top">
            <div><em>"We will cherish every moment with each other in love."</em></div>
            <br />
            <div><strong>It is our great privilege to welcome you to join us to celebrate our special moment where we become one through faith and love.</strong></div>

            <br />
            <div>Won Moon-Seong & Cho Jung-Im's eldest son, Jongwoo</div>
            <div>Kim Dae Yoo & La Mimi's eldest daughter, Jimin</div>
            <br></br>

            <div><u>To be held on 12th January 2019 (Saturday) Afternoon 2:00pm.</u></div>
            <div><Link to="/venue">Lunamielle 12th Floor Convention Hall</Link> </div>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}
