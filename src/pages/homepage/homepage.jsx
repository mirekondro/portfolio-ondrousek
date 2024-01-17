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
                        initial= {{scale: 1, opacity: 0, x: 0}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}}
                        viewport={{once: false}}
                    >

                    <div className="jmeno">
                        <h1>MIROSLAV</h1><br></br>
                        <h1>ONDROUŠEK</h1>
                        <h2>UX/UI Designer</h2>
                        <a href="#" className="abtme-btn">About Me</a>
                    </div>
                    </motion.div>


                    <div className="clients-stats">
                            <h3>225</h3>
                            <h4>Clients happy</h4>
                        </div>

                        <div className="projects-stats">
                            <h3>432</h3>
                            <h4>Projects done</h4>
                        </div>

                        <div className="insta-icon">
                            <a href="https://www.instagram.com/mirekondro1/" target="_blank"><img src="instagram.png" alt="Instagram Logo"/></a>
                        </div>

                        <div className="github-icon">
                            <a href="https://github.com/mirekondro" target="_blank"><img src="github.png" alt="Github Logo"/></a>
                        </div>

                    <motion.div
                        initial= {{scale: 1, opacity: 0, x: 0}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}}
                        viewport={{once: false}}
                    >
                    <div className="obrazek_home">
                        <img src="homepage_image.png" alt="špíňák"></img>
                    </div>
                    </motion.div>

                </div>

            </section>
        </div>
    );
}

export default Homepage;




