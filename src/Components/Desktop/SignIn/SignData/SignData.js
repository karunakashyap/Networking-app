import React from 'react';
import styles from './SignData.module.css'

const SignData = () => {
  return (
    <div className={styles.inputData}>
      <div className={styles.userData}>
        <div>
          <h1>Username</h1>
          <input type='text'></input>
        </div>
        <div>
          <h1>Password</h1>
          <input type='text'></input>
        </div>
      </div>
      <div className={styles.forgetPassword}>
        <h1>Forget Password</h1>
      </div>
    </div>
  )
}

export default SignData
