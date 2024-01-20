import React from 'react';
import './_navigation_menu.css';
import './_navigation_menu';
import Homepage from "../../pages/homepage/homepage";
import Aboutme from "../../pages/aboutme/aboutme";
import MyWork from "../../pages/mywork/mywork";
import Contact from "../../pages/contact/contact";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function NavigationMenu() {
    return (
        <div>
            <nav>
                <img src="mo.png" alt="Logo"></img>
                <ul>
                    <li><a href="#" className="active">HOME</a></li>
                    <li><a href="#">ABOUT ME</a></li>
                    <li><a href="#">MY WORK</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavigationMenu;
