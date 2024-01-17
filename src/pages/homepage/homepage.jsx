import React from 'react';
import './_homepage.css';
import {introdata, socials} from '../../my_data';
import {motion} from "framer-motion";

function Homepage() {
    return (
        <div>
            <section className="hero">
                <div className="homepage">
                    <motion.div
                        initial= {{scale: 1, opacity: 0, x: -270}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}}
                        viewport={{once: false}}
                    >
                    <div className="jmeno">
                        <h1>Hi! I´m Mirek</h1><br></br>
                        <h1>UX/UI Designer</h1>
                        <p>Lorem ipsum consectetuer adipiscing elit.</p>
                    </div>
                    <div className="obrazek_home">
                        <img src="homepageIMG.png" alt="špíňák"></img>
                    </div>
                </motion.div>
                </div>

            </section>
        </div>
    );
}

export default Homepage;




