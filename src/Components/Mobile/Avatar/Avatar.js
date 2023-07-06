import React, { useEffect, useState } from 'react';
import styles from './Avatar.module.css';
import avatarImage from '../../../../public/Ellipse 1.svg';

const Avatar = () => {
  console.log(avatarImage)
  const [headerwidth, setHeaderwidth] = useState(0)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [profileHeight, setProfileHeight] = useState(0)
  const [headerborderRadius, setHearderBorderRadius] = useState(0)

  useEffect(() => {

    const getMobilewidth = () => {
      const screenWidth = window.innerWidth - 40;
      const screenHeight = screenWidth * 0.4657;
      setHeaderwidth(screenWidth)
      setHeaderHeight(screenHeight)
      setProfileHeight(screenHeight - 30)
      setHearderBorderRadius(screenHeight / 2)
    }
    window.addEventListener('resize', getMobilewidth);

    getMobilewidth();

    return () => {
      window.addEventListener('resize', getMobilewidth)
    }
  }, []);
  return (
    <div >

      <div style={{
        width: headerwidth, background: 'red', backgroundColor: 'rgba(52, 103, 92, 1)', height: headerHeight,
        top: '0px',
        right: '0px',
        position: 'fixed',
        display: 'flex',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderTopLeftRadius: headerborderRadius,
        borderBottomLeftRadius: headerborderRadius,
      }}>
        <div className={styles.avatarData}>
          <div className={styles.avatarDataImg}>
            <div className="grid grid-cols-2 gap-4">
              <div className="...">
                <img src='Ellipse 1.svg' alt='profile-imge' style={{ width: 'auto', height: profileHeight }}></img>
              </div>
              <div className="...">
                <h2>Kapil <br></br> Sharma</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Avatar
