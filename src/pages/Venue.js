import React, { Component } from 'react';
import InvitationImage0 from '../res/invitation0.jpg';
import InvitationImage1 from '../res/invitation1.jpg';

export default class Venue extends Component {
    render() {
        return (
            <div className="container padding-top">
                <h1>Wedding Venue</h1>
                <div className="row">

                    <div className="padding-top center">
                        {/* Map */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.09866811572!2d126.92267271533038!3d37.52917133402479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f3a60b2f5e1%3A0x406740833b656b46!2sLuna+Miele!5e0!3m2!1sen!2snz!4v1541942736596" width="600" height="450" frameBorder="0" style={{ "border": "0", "maxWidth": "100%" }} allowFullScreen title="map"></iframe>


                    </div>

                    <div className="padding-top center">
                        {/* Invitation card */}
                        <img src={InvitationImage0} alt="Invitation" className="img-thumbnail"></img>
                        <img src={InvitationImage1} alt="Invitation" className="img-thumbnail"></img>

                    </div>
                </div>
            </div>
        )
    }
}
