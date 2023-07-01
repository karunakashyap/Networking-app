import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './Footer.module.css'

const Footer = () => {
  const[footerwidth,setFooterWidth]=useState(0)
  useEffect(()=>{
    function handleFooterSize(){
      const screenWidth = window.innerWidth-40;
      console.log(screenWidth)
      setFooterWidth(screenWidth)
    }
    handleFooterSize()
    window.addEventListener('resize',handleFooterSize())
  return () => {
    window.removeEventListener('resize',handleFooterSize())
  }
  },[])
  return (
    <div>
      <div className={styles.footer} style={{width:footerwidth}}>
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
