import React from 'react';
import './_homepage.css';
import {introdata, socials} from '../../my_data';

function Homepage() {
    return (
        <div>
            <section className="hero">
                <div className="homepage">
                    <div className="jsem">
                        <p>Hello, I´m</p>
                    </div>
                    <h1>Miroslav Ondroušek</h1>
                    <h2>
                        <introdata className="first"></introdata>
                    </h2>
                    <div className="obrazek_home">
                        <img src="/foto1.png" alt="Orange man"></img>
                    </div>
                </div>

                <div className="tlacitko">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="77" viewBox="0 0 45 77" fill="none">
                        <circle cx="22.1461" cy="14.6505" r="6.47345" fill="url(#paint0_linear_128_381)"/>
                        <rect x="0.5" y="0.5" width="43.9734" height="76" rx="21.9867" stroke="url(#paint1_linear_128_381)"/>
                        <defs>
                            <linearGradient id="paint0_linear_128_381" x1="9.70489" y1="10.908" x2="29.4287" y2="17.5837" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FC4A1A"/>
                                <stop offset="1" stop-color="#F7B733"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_128_381" x1="22.4867" y1="0" x2="22.4867" y2="77" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FC4A1A"/>
                                <stop offset="1" stop-color="#F7B733"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </section>
        </div>
    );
}

export default Homepage;




