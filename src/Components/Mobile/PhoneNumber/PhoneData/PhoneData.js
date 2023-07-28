import React from 'react';
import styles from './PhoneData.module.css'

const PhoneData = (props) => {
  return (
    <div className={styles.allPhoneData}>
        <div className={styles.phoneData}>
            <h1>Enter link sent to <span>{props.data}</span></h1>

        </div>
        <div className={styles.inputLink}>
            <input text='number'></input>

        </div>
    </div>
  )
}

export default PhoneData
