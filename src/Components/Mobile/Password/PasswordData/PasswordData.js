import React from 'react';
import styles from './PasswordData.module.css'

const PasswordData = (props) => {

  return (
    <div className={styles.allData}>
      <div className={styles.password}>
        <h1>{props.pwd}</h1>
        <div><input type='Password' name="password" minLength="10" required></input></div>
      </div>
      <div className={styles.reTypePassword}>
        <h1>{props.retypepwd}</h1>
        <div><input type='Password' name="rePassword" minLength="10" required></input></div>
      </div>
    </div>
  )
}

export default PasswordData
