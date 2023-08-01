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
        <h1>you will receive a OTP within </h1>
      </div>
      <div className={styles.countdown}>
        <div className={styles.countdownNumber}></div>
        <svg height={400} width={400}>
          <circle r="50" cx="55" cy="60"></circle>
        </svg>
      </div>
      <div>{counter === 0 ? (<div className={styles.resendBtn}><button>Resend</button></div>) : (<div className={styles.loaderTime}>{counter}</div>)}</div>
    </div>
  )
}

export default OTPLoader
