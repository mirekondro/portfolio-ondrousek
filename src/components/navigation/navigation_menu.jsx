import React from 'react';
import './_navigation_menu.css';
import './_navigation_menu';

function NavigationMenu() {
    return (
        <div>
            <header>
                <div id="logo"><h1><a href="#">MO</a></h1></div>
            </header>


            <nav id="mainnav" className="group">
                <div id="menu">&#x2261; Menu</div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavigationMenu;
