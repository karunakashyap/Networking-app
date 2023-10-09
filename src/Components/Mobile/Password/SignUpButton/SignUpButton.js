import React from 'react';
import styles from './SignUpButton.module.css'

const SignUpButton = (props) => {
  return (
    <div className={styles.allSignUpData}>
       <div className={styles.signUp}>
        <button>{props.btntext}</button>
      </div>
    </div>
  )
}

export default SignUpButton
