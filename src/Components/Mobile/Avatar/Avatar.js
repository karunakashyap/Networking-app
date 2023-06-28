import React, { useEffect, useState } from 'react';
import styles from './Avatar.module.css'

const Avatar = () => {
  const [headerwidth, setHeaderwidth] = useState('336px')
  useEffect(() => {


    const getMobilewidth = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth == 414) {
        setHeaderwidth('375px')
      } else if (screenWidth == 390) {
        setHeaderwidth('360px')
      } else if (screenWidth == 393) {
        setHeaderwidth('360px')
      } else if (screenWidth == 375) {
        setHeaderwidth('336px')
      } else if (screenWidth == 360) {
        setHeaderwidth('323px')
      } else if (screenWidth == 412) {
        setHeaderwidth('375px')
      } else if (screenWidth == 280) {
        setHeaderwidth('30px')
      }
      // else {
      //   setHeaderwidth(screenWidth)
      // }

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
        width: headerwidth, background: 'red', backgroundColor: 'rgba(52, 103, 92, 1)', height: '151px',
        top: '20px',
        right: '0px',
        position: 'fixed',
        display: 'flex',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '75.5px 0px 0px 75.5px'
      }}>
        <div className={styles.avatarData}>
          <div className={styles.avatarDataImg}>
            <img src='/Ellipse 1.svg' alt='profile-imge' ></img>
          </div>
          <h2>Kapil <br></br> Sharma</h2>
        </div>
      </div>
    </div>
  )
}

export default Avatar
