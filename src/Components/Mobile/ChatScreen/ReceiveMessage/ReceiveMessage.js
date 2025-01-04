import React from 'react';
import styles from './ReceiveMessage.module.css'
const ReceiveMessage = ({ message, receiverName }) => {
  return (
    <div style={{ width: '80%', float: 'left' }}>
      <div className={styles.messageBox}>
        <p style={{ fontWeight: 500, color: '#D3D3D3', fontSize: '16px' }}>{receiverName}</p>
        <p style={{ fontSize: '14px', fontWeight: 400 }}></p>
        {message}
      </div>
    </div>
  )
}

export default ReceiveMessage
