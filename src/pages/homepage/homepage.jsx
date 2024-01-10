import React from 'react';
import './_homepage.css';
import {introdata, socials} from '../../my_data';

function Homepage() {
    return (
        <div>
            <section className="hero">
                <div className="homepage">
                    <div className="jmeno">
                        <h1>Hi! I´m Mirek</h1><br></br>
                        <h1>UX/UI Designer</h1>
                        <p>Lorem ipsum consectetuer adipiscing elit.</p>
                    </div>
                    <div className="obrazek_home">
                        <img src="homepageIMG.png" alt="špíňák"></img>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Homepage;




