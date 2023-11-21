import React from 'react';
import styles from './Credentials.module.css'
import CredentialData from './CredentialData/CredentialData';
import NextButton from '../NextButton/NextButton';
import SignUpSidebar from '../SignUpSidebar/SignUpSidebar';

const Credentials = () => {
  return (
    <div style={{display:'flex'}} className={styles.allCredentialData}>
            <SignUpSidebar />

      <div style={{ display: 'flex', justifyContent: 'flex-end', height: '100vh', margin: '0' }}>
        <div className={styles.allUserData}>
          <CredentialData />
          <NextButton />
        </div>
      </div>


    

    </div>

  )
}

export default Credentials
