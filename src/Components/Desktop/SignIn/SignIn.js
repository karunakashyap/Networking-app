import React from 'react';
import styles from './SignIn.module.css'
import SignData from './SignData/SignData';
import SignButton from './SignInButton/SignInButton';
import SignInIcon from './SignInIcon/SignInIcon';
const SignIn = () => {
  return (
    <>
      <div className={styles.alldata}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', margin: '0' }}>
          <div className={styles.allSignInData}>
            <SignData />
            <SignButton />
            <SignInIcon />
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
