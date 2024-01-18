import React from 'react';
import './_aboutme.css';
import {motion} from "framer-motion";

function AboutMe() {
    return (
        <div>
            <section className="hero2">
                <motion.div
                    initial= {{scale: 1, opacity: 0, x: 0}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 2.5}}
                    viewport={{once: false}}
                >
                <div className="nadpis">
                    <h1>Let´s</h1>
                    <h1>Tell About Me</h1>
                </div>

                <div className="obrazek_about">
                    <img src="aboutme_image.png" alt="špíňák2"></img>
                </div>
                </motion.div>


                <div className="text-block-about">
                    <motion.div
                        initial= {{scale: 1, opacity: 0, x: 70}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}}
                        viewport={{once: false}}
                    >
                    <h2>Lorem ipsum dolor sit amet, consectetue. Fusce aliquam vestibulum ipsum.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    </motion.div>

                    <motion.div
                        initial= {{scale: 1, opacity: 0, x: 0}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 2.5}}
                        viewport={{once: false}}
                    >
                    <a href="#" className="getintouch-btn">Get In Touch</a>
                    <a href="#" className="portfolio-btn">Portfolio</a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default AboutMe;