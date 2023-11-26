import React, { useState } from 'react';
import styles from './NewPassword.module.css';
import SignUpSidebar from '../SignUpSidebar/SignUpSidebar';
import NextButton from '../NextButton/NextButton';
import PasswordData from './PasswordData/PasswordData';

const NewPassword = () => {
  const [tagText, settagText] = useState('');
  const [tagCheckBox, setTextCheckBox] = useState('/check-box-yellow.svg')
  const [otpText, setotpText] = useState('');
  const [otpCheckBox, setotpCheckBox] = useState('/check-box-yellow.svg');
  const [passwordText, setpasswordText] = useState('');
  const [passwordCheckBox, setpasswordCheckBox] = useState('/check-box-yellow.svg')
  return (
    <div style={{ display: 'flex' }} className={styles.allPasswordData}>
      <SignUpSidebar  tagText={tagText} tagCheckBox={tagCheckBox} otpText={otpText} otpCheckBox={otpCheckBox} passwordText={passwordText} passwordCheckBox={passwordCheckBox} />
      <div style={{ display: 'flex', justifyContent: 'flex-end', height: '100vh', margin: '0' }}>
        <div className={styles.user}>
          <div >
            <div >
              <PasswordData />
              <div style={{ marginTop: '260px' }} > <NextButton /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPassword
