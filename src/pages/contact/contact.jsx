import React from 'react';
import './_contact.css';
import {motion} from "framer-motion";

function Contact() {
    return (
        <div>
            <section className="hero4">
                    <div className="nadpis">
                        <h1>Let’s create<br></br>
                            <span>something together!</span></h1>
                    </div>

                    <div className="icons">
                        <div className="phone-icon">
                            <img src="phone-icon.png" alt="Phone icon"></img>
                        </div>

                        <div className="mail-icon">
                            <img src="mail-icon.png" alt="Mail icon"></img>
                        </div>

                        <div className="location-icon">
                            <img src="location-icon.png" alt="Location icon"></img>
                        </div>

                    </div>

                <div className="text-icons">
                    <div className="phone-text">
                        <a href="tel:+420604164894"><h2>+01 101 010 111</h2></a>
                    </div>

                    <div className="mail-text">
                        <a href="mailto:ondrousekmirek@icloud.com"><h2>ondrousekmirek@icloud.com</h2></a>
                    </div>

                    <div className="location-text">
                        <h2>1011 Adress 01</h2>
                    </div>
                </div>

                <div className="obrazek_contact">
                    <img src="contact_image.png" alt="Contact image"></img>
                </div>

                <a href="tel:+420604164894" className="contactme-btn">Contact Me</a>

            </section>

            <div className="paticka">
                <h1>©2024 Ondroušek Miroslav</h1>
            </div>
        </div>
    );
}

export default Contact;