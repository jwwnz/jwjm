import React, { Component } from "react";
import Carousel from "../components/Carousel";

export default class Home extends Component {
  render() {
    return (
      <div className="container padding-top">
        <div className="row">
          <h1>Welcome to JWJM's wedding page!</h1>
          <Carousel />
          <div className="padding-top">
            Hello everyone, welcome to our wedding page!
          </div>
        </div>
      </div>
    );
  }
}
