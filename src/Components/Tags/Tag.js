import React, { useState } from 'react';
import styles from './Tag.module.css';
import NextBtn from '../Icon/NextBtn';
import NextBtnDisable from '../Icon/NextBtnDisable';
import PreviousBtn from '../Icon/PreviousBtn';
import PrevBtnDisable from '../Icon/PrevBtnDisable';

const Tag = ({ slides, itemsPerRow }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlides = Math.ceil(slides.length / itemsPerRow);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);


    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    const PrevBtnDisabled = currentSlide === 0;
    const NextBtnDisabled = currentSlide === totalSlides - 1;

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
                {
                    PrevBtnDisabled ?
                        <button className={styles.prevBtn} onClick={goToPrevSlide} disabled={PrevBtnDisabled}>
                            <PrevBtnDisable />
                        </button> :
                        <button className={styles.prevBtn} onClick={goToPrevSlide} disabled={PrevBtnDisabled}>
                           <PreviousBtn />  
                        </button>
                }


                <div className={styles.sliderData}>{renderSlides()}</div>
                {NextBtnDisabled ?
                    <button className={styles.nextBtn} onClick={goToNextSlide} disabled={NextBtnDisabled}>
                       <NextBtnDisable />
                    </button> :
                    <button className={styles.nextBtn} onClick={goToNextSlide} disabled={NextBtnDisabled}>
                        <NextBtn />
                    </button>

                }
            </div>
        </div>
    );
};

export default Tag;
