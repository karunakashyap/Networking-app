import React, { useState, useEffect } from 'react';
import styles from './Credentials.module.css'
import CredentialData from './CredentialData/CredentialData';
import SignUpSidebar from '../SignUpSidebar/SignUpSidebar';
import ExistingTag from '../ExistingTag/ExistingTag';
import { useRouter } from 'next/router';
import NextButton from '../NextButton/NextButton';
const Credentials = () => {
  const router = useRouter();
  const [existingTagScreen, showExistingTagScreen] = useState(false);
  const [credential, setShowCredential] = useState(true);
  const [tagText, settagText] = useState('');
  const [tagCheckBox, setTextCheckBox] = useState('/check-box-gray.svg')
  const [otpText, setotpText] = useState('');
  const [otpCheckBox, setotpCheckBox] = useState('/check-box-gray.svg');
  const [passwordText, setpasswordText]= useState('');
  const [passwordCheckBox, setpasswordCheckBox] = useState('/check-box-gray.svg')
  const existTags = () => {
    showExistingTagScreen(true);
    router.push('/ExistingTag')

  }
  return (
    <>
      {credential &&
        <div style={{ display: 'flex' }} className={styles.allCredentialData}>
          <SignUpSidebar  tagText={tagText} tagCheckBox={tagCheckBox} otpText={otpText} otpCheckBox={otpCheckBox}  passwordText={passwordText} passwordCheckBox={passwordCheckBox}/>
          <div style={{ display: 'flex', justifyContent: 'flex-end', height: '100vh', margin: '0' }}>
            <div className={styles.allUserData}>
              <CredentialData />
              <div onClick={existTags}> <NextButton /></div>
            </div>
          </div>
        </div>
      }
      {existingTagScreen && <ExistingTag />}
    </>
  )
}

export default Credentials
