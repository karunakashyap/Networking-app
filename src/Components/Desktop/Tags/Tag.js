import React, { useState } from 'react';
import styles from './Tag.module.css';
import NextBtn from '../../Icon/NextBtn';
import NextBtnDisable from '../../Icon/NextBtnDisable';
import PreviousBtn from '../../Icon/PreviousBtn';
import PrevBtnDisable from '../../Icon/PrevBtnDisable';

const Tag = ({ slides, itemsPerRow ,blueCancelIcon}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = Math.ceil(slides.length / itemsPerRow);
    const totalItems = slides.length;

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => {
            return (prevSlide + 1) % totalSlides;
        });

    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => {
            return (prevSlide - 1 + totalSlides) % totalSlides;
        });
    };

    const PrevBtnDisabled = currentSlide === 0;
    const NextBtnDisabled = currentSlide === totalSlides - 1;
    const renderSlides = () => {
        const startIndex = ((currentSlide * itemsPerRow) % totalItems + itemsPerRow) > totalItems ? totalItems - itemsPerRow : (currentSlide * itemsPerRow) % totalItems;
        const endIndex = startIndex + itemsPerRow;
        return slides.slice(startIndex, endIndex).map((slide, index) => (
            <div className={styles.sliderSlide}>
            <div key={index} >
                {slide}
            </div>
            {blueCancelIcon && <div style={{position:'relative',left:'5px'}}><img src='/cancel-blue-icon.svg' ></img></div>}
            </div>
        ));
    };

    return (
        <>
            <div className={styles.slider}>
                <div className={styles.sliderContent}>
                    {
                        PrevBtnDisabled ?
                            <button className={styles.prevBtn} onClick={goToPrevSlide} disabled={PrevBtnDisabled}>
                                <PrevBtnDisable />
                            </button>
                            : <button className={styles.prevBtn} onClick={goToPrevSlide} disabled={PrevBtnDisabled} style={{ cursor: 'pointer' }}>
                                <PreviousBtn />
                            </button>
                    }


                    <div className={styles.sliderData}>{renderSlides()}</div>
                    {NextBtnDisabled ?
                        <button className={styles.nextBtn} onClick={goToNextSlide} disabled={NextBtnDisabled}>
                            <NextBtnDisable />
                        </button>
                        :
                        <button className={styles.nextBtn} onClick={goToNextSlide} disabled={NextBtnDisabled} style={{ cursor: 'pointer',marginLeft:'20px' }}>
                            <NextBtn />
                        </button>

                    }
                </div>
            </div>
        </>
    );

};

export default Tag;

