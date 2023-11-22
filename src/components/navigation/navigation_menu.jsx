import React from 'react';
import './_navigation_menu.css';

function NavigationMenu() {
    return (
        <div>
            <ul>
                <li><a href="src/components#section1">Home</a></li>
                <li><a href="src/components#section2">About Us</a></li>
                <li><a href="src/components#section3">Contact</a></li>
            </ul>
        </div>
    );
}

export default NavigationMenu;
