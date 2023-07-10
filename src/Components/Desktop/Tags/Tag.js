import React, { useState } from 'react';
import styles from './Tag.module.css';
import NextBtn from '../../Icon/NextBtn';
import NextBtnDisable from '../../Icon/NextBtnDisable';
import PreviousBtn from '../../Icon/PreviousBtn';
import PrevBtnDisable from '../../Icon/PrevBtnDisable';

const Tag = ({ slides, itemsPerRow }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = Math.ceil(slides.length / itemsPerRow);
    const totalItems = slides.length;

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => {
            console.log("prevSlides", prevSlide)
            console.log('[goToNextSlide] prevSlide', prevSlide)
            return (prevSlide + 1) % totalSlides;
        });

    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => {
            console.log('[goToPrevSlide] prevSlide', prevSlide)
            return (prevSlide - 1 + totalSlides) % totalSlides;
        });
    };

    const PrevBtnDisabled = currentSlide === 0;
    const NextBtnDisabled = currentSlide === totalSlides - 1;
    const renderSlides = () => {
        const startIndex = ((currentSlide * itemsPerRow) % totalItems + itemsPerRow) > totalItems ? totalItems - itemsPerRow : (currentSlide * itemsPerRow) % totalItems;
        const endIndex = startIndex + itemsPerRow;
        console.log('[renderSlides] currentSlide', currentSlide)
        console.log('[renderSlides] startIndex', startIndex)
        console.log('[renderSlides] endIndex', endIndex)
        console.log('[renderSlides] itemsPerRow', itemsPerRow)
        console.log('[renderSlides] PrevBtnDisabled', PrevBtnDisabled)
        console.log('[renderSlides] NextBtnDisabled', NextBtnDisabled)




        return slides.slice(startIndex, endIndex).map((slide, index) => (
            <div key={index} className={styles.sliderSlide}>
                {slide}
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
                        <button className={styles.nextBtn} onClick={goToNextSlide} disabled={NextBtnDisabled} style={{ cursor: 'pointer' }}>
                            <NextBtn />
                        </button>

                    }
                </div>
            </div>
        </>
    );

};

export default Tag;

