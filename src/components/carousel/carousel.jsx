import React, { useState } from 'react';
import './carousel.css';
import './Public';

const images = [
    'cat1.jpeg',
    'cat2.jpeg',
    'cat3.jpeg',
];

function Carousel() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((index + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((index - 1 + images.length) % images.length);
    };

    return (
        <div classname="carousel">
            <button onclick="{prevSlide}">Předchozí</button>
            <transitiongroup classname="carousel-slide">
                <csstransition key="{index}" timeout="{500}" classnames="slide">
                    <img src={images[index]} alt={`Slide ${index + 1}   `} />
                </csstransition>
            </transitiongroup>
            <button onclick="{nextSlide}">Další</button>
        </div>
    );
}

export default Carousel;