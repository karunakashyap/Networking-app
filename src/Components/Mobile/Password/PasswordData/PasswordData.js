import React from 'react';
import styles from './PasswordData.module.css'

const PasswordData = (props) => {

  return (
    <div className={styles.allData}>
      <div className={styles.password}>
        <h1>{props.pwd}</h1>
        <div><input type='text'></input></div>
      </div>
      <div className={styles.reTypePassword}>
        <h1>{props.retypepwd}</h1>
        <div><input type='text'></input></div>
      </div>
    </div>
  )
}

export default PasswordData
