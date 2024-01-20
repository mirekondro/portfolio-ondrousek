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
                    <h1>About Me</h1>
                </div>

                <div className="obrazek_about">
                    <img src="aboutme_image.png" alt="špíňák2"></img>
                </div>
                </motion.div>


                <div className="text-block-about">
                    <h2>Lorem ipsum dolor sit amet, consectetue. Fusce aliquam vestibulum ipsum.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

                    <a href="tel:+420604164894" target="_blank" className="getintouch-btn">Get In Touch</a>
                    <a href="https://github.com/mirekondro" target="_blank" className="portfolio-btn">Portfolio</a>
                </div>
            </section>
        </div>
    );
}

export default AboutMe;