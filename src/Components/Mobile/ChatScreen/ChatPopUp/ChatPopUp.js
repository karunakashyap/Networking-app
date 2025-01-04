import React, { useState } from 'react';
import styles from './ChatPopUp.module.css'

const ChatPopUp = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };
    const images = [
        '/place-order-icon-gray.svg',
        '/troly-icon-gray.svg',
        '/sell-icon-gray.svg',
        '/create-report-gray.svg',
        '/create-report-gray.svg',
        '/Report-icon-gray.svg',
        '/video-icon-gray.svg',
        '/photo-icon.svg'
    ]
    const hoverImages = [
        '/place-order-icon-blue.svg',
        '/troly-icon-blue.svg',
        '/sell-icon-blue.svg',
        '/blue-create-report-icon.svg',
        '/blue-create-report-icon.svg',
        '/Report-icon-blue.svg',
        '/video-icon-blue.svg',
        '/Photo-icon-blue.svg'
    ]
    return (
        <div>
            <div className={styles.allPopIcon}>
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={styles.imageContainer}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                    <img
                        src={hoveredImage === index ? hoverImages[index] : src}
                        alt={`Image ${index + 1}`}
                    />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChatPopUp
