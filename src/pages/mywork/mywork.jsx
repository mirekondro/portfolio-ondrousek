import React from 'react';
import './_mywork.css';
import {motion} from "framer-motion";

function MyWork() {
    return (
        <div>
            <section className="hero3">
                <motion.div
                    initial= {{scale: 1, opacity: 0, x: 0}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 2.5}}
                    viewport={{once: false}}
                >
                <div className="nadpis">
                    <h1>My Work</h1>
                </div>
                </motion.div>


                    <div className="obrazek_mywork">
                        <img src="ondroušek_citypostermockup.jpg" alt="Sydney poster"></img>
                    </div>

                    <div className="work1-text">
                        <h2>Sydney</h2>
                    </div>

                    <div className="work1-type">
                        <h3>POSTER</h3>
                    </div>

                    <div className="work1-description">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Nulla non lectus sed nisl molestie malesuada.</p>
                    </div>

                <div className="obrazek_mywork2">
                    <img src="ondroušek_app1.png" alt="Travel app design"></img>
                </div>

                <div className="obrazek2_mywork2">
                    <img src="ondroušek_app2.png" alt="Travel app design"></img>
                </div>

                <div className="work2-text">
                    <h2>Travel Tips</h2>
                </div>

                <div className="work2-type">
                    <h3>DESKTOP APP</h3>
                </div>

                <div className="work2-description">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent id justo in neque elementum ultrices. Nulla est.

                        In convallis. Curabitur bibendum justo non orci. Suspendisse sagittis ultrices augue. Pellentesque pretium lectus id turpis.

                        Etiam bibendum elit eget erat. Maecenas lorem.</p>
                </div>

                <div className="work2-description2">
                    <p>Vivamus luctus egestas leo. Integer malesuada. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. In rutrum. In dapibus augue non sapien.</p>
                </div>

                <a href="#" className="showmore-btn">Show More</a>

            </section>
        </div>
    );
}

export default MyWork;