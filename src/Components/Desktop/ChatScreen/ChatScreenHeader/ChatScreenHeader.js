import React from 'react';
import styles from './ChatScreenHeader.module.css'

const ChatScreenHeader = () => {
  return (
    <div>
        <div className={styles.chatHeader}>
         
          <div className={styles.userProfile}><img src='/profile-image2.svg' width={50} height={50}></img></div>
          <div className={styles.userData}>
            <h1>Sell Product</h1>
             <p>Subhi,mayank,Abhishek</p>
          </div>
          
          <div className={styles.threeDots}><img src='/three-dot.svg'></img></div>
        </div>
      
    </div>
  )
}

export default ChatScreenHeader
