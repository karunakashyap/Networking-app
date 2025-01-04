import React from 'react';
import styles from './TextBox.module.css'

const TextBox = () => {
  return (
    <div>
      <div className={styles.textBoxMessage}>
             <div style={{position:'fixed',bottom:'0',marginBottom:'20px'}}><input type='text' placeholder='Type..'></input></div>
        </div>
    </div>
  )
}

export default TextBox
