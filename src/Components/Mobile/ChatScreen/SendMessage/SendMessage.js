import React from 'react';
import styles from './SendMessage.module.css'
const SendMessage = ({ senderName ,message}) => {
  return (
    <div style={{ width: '80%', float: 'right' }}>
      <div className={styles.messageBox} style={{color:'#14140F'}}>
        <p style={{ fontWeight: 500, fontSize: '16px', color: '#14140F' }}>{senderName}</p>
        <p style={{ fontSize: '14px', fontWeight: 400, color: '#14140F' }}> </p>
          {message}
       
      </div>
    </div>
  )
}

export default SendMessage;