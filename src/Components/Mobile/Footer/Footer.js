import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.my_task_icon}>
          <img src='/my task.svg' width={30} height={30}></img>

        </div>
        <div className={styles.chat_icon}>
          <img src="chat icon.svg" width={30} height={30}></img>

        </div>
        <div className={styles.create_icon}>
          <img src="create icon (1).svg" width={30} height={30}></img>

        </div>
        <div className={styles.create_icon_background}></div>
        <div className={styles.invite_icon}>
          <img src="invite-icon.svg" width={30} height={30} ></img>

        </div>



      </div>
    </div>
  )
}

export default Footer;
