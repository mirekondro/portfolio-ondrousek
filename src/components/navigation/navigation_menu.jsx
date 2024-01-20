import React from 'react';
import './_navigation_menu.css';
import './_navigation_menu';

function NavigationMenu() {
    return (
        <div>
            <nav>
                <img src="mo.png" alt="Logo"></img>
                <ul>
                    <li><a href="#homepage" className="active">HOME</a></li>
                    <li><a href="#aboutme">ABOUT ME</a></li>
                    <li><a href="#mywork">MY WORK</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavigationMenu;
