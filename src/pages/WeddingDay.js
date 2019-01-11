import React, { Component } from 'react';
import Translation from "../resources/translation.pdf";

export default class Venue extends Component {
    render() {
        return (
            <div className="container padding-top font-special">
                <h1>Wedding Order</h1>
                <br></br>
                <a href={Translation} target="_blank" className="font-message">Download full english transcript of wedding proceedings</a>
                {/* <embed src={Translation} type="application/pdf" width="100%" height="600px" /> */}
                <div className="row">
                    <div className="center font-message">
                    <br></br>
                        <h2>First part</h2>
                        <ol className="list-none">
                            <li>Introduction of MC</li>
                            <li>Speeches by fathers of bride and groom</li>
                            <li>Congratulatory concert.</li>
                            <li>Introduction of main MC / best man: Won Hoe-sin.</li>
                        </ol>

                        <h2>Second part</h2>
                        <ol className="list-none">
                            <li>Entrance of Mothers of bride and Groom.</li>
                            <li>Introduction of the pastor overseeing the marriage: Pastor Park Ji Woon.</li>
                            <li>Entrance of the Groom.</li>
                            <li>Entrance of the Bride.</li>
                            <li>Bow between Groom and Bride</li>
                            <li>Signing of marriage document.</li>
                            <li>Declaration of marriage.</li>
                            <li>Pastor’s advice to the couple.</li>
                            <li>Contratulatory song.</li>
                            <li>Bride and Groom’s bows to their parents.</li>
                            <li>Wedding march.</li>
                        </ol>

                        <h2>Photos</h2>

                        <h2>Meal start</h2>

                        <h2>Third part</h2>
                        <ol className="list-none">
                            <li>Reentrance of Bride and Groom.</li>
                            <li>Congratulatory concert.</li>
                            <li>Growing video</li>
                            <li>Candlelight event</li>
                            <li>Cake cutting.</li>
                            <li>Toast</li>
                            <li>Bride and Groom visits tables with parents.</li>
                            <li>Last marriage march</li>
                        </ol>
                    </div>
                </div>
                <br></br>
                <br></br>
            </div>

        )
    }
}
