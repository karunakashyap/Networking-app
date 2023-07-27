import React from 'react';
import NextButton from '../../Existing_Tag/NextButton/NextButton';
import styles from './SignUpButton.module.css'

const SignUpButton = () => {
  return (
    <div className={styles.allSignUpData}>
       <div className={styles.signUp}>
        <button>Sign Up</button>

       </div>
    </div>
  )
}

export default SignUpButton
