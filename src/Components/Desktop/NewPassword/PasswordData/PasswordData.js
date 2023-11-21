import React from 'react';
import styles from './PasswordData.module.css'

const PasswordData = () => {
  return (
    <div>
      <div className={styles.allPasswordData}>
        <h1>New Password</h1>
        <div className={styles.newPasswordInput}>
            <input type='text'></input>

        </div>
        <div className={styles.rePassword}>
        <h1>Re-type Password</h1>
        <div className={styles.rePasswordInput}>
            <input type='text'></input>

        </div>
        </div>

      </div>
    </div>
  )
}

export default PasswordData
