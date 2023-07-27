import React from 'react';
import styles from './PasswordData.module.css'

const PasswordData = () => {
  return (
    <div className={styles.allData}>
            <div className={styles.password}>
                <h1>Password</h1>
                <div><input type='text'></input></div>
            </div>
            <div className={styles.reTypePassword}>
                <h1>Re-type Password</h1>
                <div><input type='text'></input></div>
            </div>
            

        </div>
  )
}

export default PasswordData
