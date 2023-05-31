import React, { useState } from 'react';
import styles from './Tag.module.css'

const Tag = ({ slides, itemsPerRow }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlides = Math.ceil(slides.length / itemsPerRow);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) =>
            (prevSlide + 1) % totalSlides);


    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    const renderSlides = () => {
        const startIndex = currentSlide * itemsPerRow;
        const endIndex = startIndex + itemsPerRow;

        return slides.slice(startIndex, endIndex).map((slide, index) => (
            <div key={index} className={styles.sliderSlide}>
                {slide}
            </div>
        ));
    };

    return (
        <div className={styles.slider}>
            <div className={styles.sliderContent}>
                <button className={styles.prevBtn} onClick={goToPrevSlide}>
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.6431 24.8571L20.4814 23.0187L11.9627 14.5L20.4814 5.98122L18.6431 4.14282L8.28591 14.5L18.6431 24.8571Z" fill="white" />
                    </svg>
                </button>
                <div className={styles.sliderData}>{renderSlides()}</div>
                <button className={styles.nextBtn} onClick={goToNextSlide}>
                    <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8911 24.8571L9.05273 23.0187L17.5715 14.5L9.05273 5.98122L10.8911 4.14282L21.2483 14.5L10.8911 24.8571Z" fill="white" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Tag;
