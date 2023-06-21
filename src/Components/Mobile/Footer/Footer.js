import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div>
      <h1 className={styles.footer}>
        <div className={styles.my_task_icon}>
          <img src='/my task.svg' width={150} height={120}></img>

        </div>
        <div className={styles.chat_icon}>
          <img src="chat icon.svg" width={150} height={120}></img>

        </div>
        <div className={styles.create_icon}>
          <img src="create icon (1).svg" width={150} height={120}></img>

        </div>


      </h1>
    </div>
  )
}

export default Footer;
