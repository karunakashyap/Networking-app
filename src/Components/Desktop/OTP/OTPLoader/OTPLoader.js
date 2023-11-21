import React from 'react';
import styles from './OTPLoader.module.css';
import { useState, useEffect } from 'react';
const OTPLoader = () => {
  const [counter, setCounter] = useState(10);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  return (
    <div className={styles.allLoaderData}>
      <div className={styles.loaderHeading}>
        <h1>You will receive a OTP within </h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <div className={styles.loader}>
          <div>{counter === 0 ? (<div className={styles.resendBtn}><button>Resend</button></div>) : (<div className={styles.loaderTime}>{counter}</div>)}</div>
        </div>
      </div>
    </div>
  )
}

export default OTPLoader
