import React, { useEffect, useState } from 'react';
import styles from './Footer.module.css'

const Footer = () => {
  const [footerwidth, setFooterWidth] = useState(0)
  useEffect(() => {
    const handleFooterSize = () => {
      const screenWidth = window.innerWidth - 40;
      setFooterWidth(screenWidth)
    }
    handleFooterSize()
    window.addEventListener('resize', handleFooterSize)
    return () => {
      window.removeEventListener('resize', handleFooterSize)
    }
  }, []);
  return (
    <div>
      <div
        style={{
          width: footerwidth, position: 'absolute',
          height: '55px',
          borderRadius: '0px 107.5px 107.5px 0px',
          backgroundColor: 'rgba(43, 140, 167, 1)',
          display: 'block',
          display: 'inline-block',
          bottom: '0px',
          position: 'fixed'
        }}>
        <div className={styles.allFooterIcon}>
          <div className="grid grid-cols-4 gap-10">
            <div className="...">
              <div className={styles.my_task_icon}>
                <img src='/my task.svg' width={30} height={30}></img>
              </div>
            </div>
            <div className="...">
              <div className={styles.chat_icon}>
                <img src="chat icon.svg" width={30} height={30}></img>
              </div>
            </div>
            <div className="...">
              <div className={styles.create_icon}>
                <img src="create icon (1).svg" width={30} height={30}></img>
              </div>
            </div>
            <div className="...">
              <div className={styles.create_icon_background}></div>
              <div className={styles.invite_icon}>
                <img src="invite-icon.svg" width={30} height={30} ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
