import React from 'react';
import './_navigation_menu.css';
import './_navigation_menu';

function NavigationMenu() {
    return (
        <div>
            <nav>
                <img src="mo.png" alt="Logo"></img>
                <ul>
                    <li><a href="#" className="active">HOME</a></li>
                    <li><a href="#">O NÁS</a></li>
                    <li><a href="#">MOJE PRÁCE</a></li>
                    <li><a href="#">KONTAKT</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavigationMenu;
