import React, { Component } from 'react';
import Map from '../components/Map';
import InvitationImage0 from '../res/invitation0.jpg';
import InvitationImage1 from '../res/invitation1.jpg';

export default class Venue extends Component {
    render() {
        return (
            <div className="container padding-top font-special">
                <h1>Wedding Venue</h1>
                <div className="row">
                <Map/>
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
