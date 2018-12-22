import React, { Component } from 'react';
import VideoComponent from '../components/Video';

export default class Video extends Component {
    render() {
        return (
            <div className="container padding-top font-special">
                <h1>Video</h1>
                <div className="row">
                    <div className="padding-medium font-message">Prestige Law, James' previous workplace of 5 years sent us a touching video wishing us well for the wedding.</div>

                    <div className="row">
                        <div className="padding-medium">
                            <VideoComponent />
                        </div>
                    </div>


                    <div className="padding-top font-message">Thank you to Royal and everyone at Prestige Law for taking the time to prepare and send this to us!
                        <br />
                        <br />
                        To check out Prestige law, <a href="https://prestige.law/">prestige.law/</a>
                    </div>
                </div>
            </div>
        )
    }
}
