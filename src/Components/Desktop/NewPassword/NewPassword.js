import React from 'react';
import styles from './NewPassword.module.css';
import SignUpSidebar from '../SignUpSidebar/SignUpSidebar';
import NextButton from '../NextButton/NextButton';
import PasswordData from './PasswordData/PasswordData';

const NewPassword = () => {
  return (
    <div className={styles.allPasswordData}>
            <div style={{ display: 'flex' }} >
                <SignUpSidebar />
                <div className={styles.userData} style={{ display: 'flex', justifyContent: 'flex-end', height: '100vh', margin: '0' }}>
                    <div className={styles.user}>
                        <PasswordData/>
                        
                        <div style={{marginTop:'200px'}}>
                        <NextButton/>

                        </div>
                        </div>
                </div>
            </div>

        </div>
  )
}

export default NewPassword
