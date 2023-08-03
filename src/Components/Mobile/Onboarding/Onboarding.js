import React, { useState, useRef } from 'react';
import './Onboarding.css'; 

const ImageSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const handleScroll = () => {
    const slideWidth = sliderRef.current.offsetWidth;
    const scrollOffset = sliderRef.current.scrollLeft;
    const newSlide = Math.floor((scrollOffset + slideWidth / 2) / slideWidth);
    setCurrentSlide(newSlide);
  };

  return (
    <div className="slider-container">
      <div className="slider" onScroll={handleScroll} ref={sliderRef}>
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="content">
              <p>{slide.description == 'Lets Get Started' ? (<button className='startButton'>Lets Get Started</button>) : slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span key={index} className={`dot ${index === currentSlide ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

