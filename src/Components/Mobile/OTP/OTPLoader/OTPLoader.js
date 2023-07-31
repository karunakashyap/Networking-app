import React from 'react';
import styles from './OTPLoader.module.css';
import { useState, useEffect } from 'react';

const OTPLoader = () => {
  const [counter, setCounter] = useState(30);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  return (
    <div className={styles.allLoaderData}>
      <div className={styles.loaderHeading}>
        <h1>you will receive a OTP within </h1>
      </div>
      <div className={styles.loaderCode}>
        <div className={styles.loaderCircle}></div>
      </div>
      <div >
        <div>{counter === 0 ? (<div className={styles.resendBtn}><button>Resend</button></div>) : (<div className={styles.loaderTime}>{counter}</div>)}</div>
      </div>
    </div>
  )
}

export default OTPLoader
