import React, { useState } from 'react';
import styles from './Onboaring.module.css'
const images = [
    {
      src: "/slider1.svg",
      caption: "Connect With People",
    },
    {
      src: "/slider2.svg",
      caption: "Get Stuff Done",
    },
    {
      src: "slider3.svg",
      caption: "Celebrate",
    },
    {
      src: "slider4.svg",
      caption: "Lets Get Started",
    },
  ];
  const ImageSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const handleImageClick = () => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };
    return (


    <div className={styles['slider-container']} onClick={handleImageClick}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles['image']} ${index === currentImage ? styles.active : ''}`}
        >
          <img src={image.src} alt={image.alt} />
          <div className={styles.caption}>{image.caption=="Lets Get Started"?(<button className={styles.startButton}>Lets Get Started</button>):(<p>{image.caption}</p>)}</div>
        </div>
      ))}
      <div className={styles['dots-container']}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentImage ? styles.active : ''}`}
          ></span>
        ))}
      </div>
    </div>
    )
        }
        
export default ImageSlider;
