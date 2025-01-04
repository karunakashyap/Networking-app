import React from 'react';
import styles from './TextBox.module.css'
const TextBox = () => {
  return (
    <div >
        <div className={styles.textBoxMessage}>
             <input type='text' placeholder='Type..'>
             </input>
        </div>
    </div>
  )
}

export default TextBox
