import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import Map from "../components/Map";

export default class Home extends Component {
  render() {
    return (
      <div className="container padding-top">
        <h1 className="font-special">James & Jimin</h1>

        <div className="row">
          <div className="center">
            <Carousel />
          </div>
          <div className="jumbotron jumbotron-fluid card-content center padding-top">
            <div className="container font-message">
              {/* <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
              {/* <h2><em>"We will cherish every moment with each other in love."</em></h2> */}
              {/* <br /> */}
              <h3 className="font-message">It is our great privilege to invite you to join us in celebrating our special moment where we become one through faith and love.</h3>

              <br />
              <div className="font-message">
                <div><strong>Between</strong></div>
                <div>Won Moon-Seong & Cho Jung-Im's eldest son, Jongwoo</div>
                <div>Kim Dae Yoo & Ra Mimi's eldest daughter, Jimin</div>
              </div>

              <br></br>
              <div>To be held on 12th January 2019 (Saturday) Afternoon 2:00pm.</div>
              <div><Link to="/venue">Lunamielle 12th Floor Convention Hall</Link> </div>
              <Map/>
            </div>
          </div>
          {/* <div className="card-content center padding-top">


            <br></br>
            <br></br>
            <br></br>
          </div> */}
        </div>
      </div>
    );
  }
}
