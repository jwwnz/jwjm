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
                    <Map />
                    <div className="padding-top center">
                        {/* Invitation card */}
                        <img src={InvitationImage0} alt="Invitation" className="img-thumbnail"></img>
                        <img src={InvitationImage1} alt="Invitation" className="img-thumbnail"></img>

                        <div className="font-message">
                            <div><strong>Between</strong></div>
                            <div>Won Moon-Seong & Cho Jung-Im's eldest son, Jongwoo</div>
                            <div>Kim Dae Yoo & Ra Mimi's eldest daughter, Jimin</div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
