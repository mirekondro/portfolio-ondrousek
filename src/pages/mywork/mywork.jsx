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

                    <div className="obrazek_mywork">
                        <img src="aboutme_image.png" alt="špíňák2"></img>
                    </div>

                </motion.div>
            </section>
        </div>
    );
}

export default MyWork;