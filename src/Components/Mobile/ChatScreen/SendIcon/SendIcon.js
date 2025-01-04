import React from 'react';
import styles from './SendIcon.module.css'

const SendIcon = () => {
  return (
    <div>
      <div className={styles.sendButton}>
        <img src='/send-icon.svg'></img>
      </div>
    </div>
  )
}

export default SendIcon
