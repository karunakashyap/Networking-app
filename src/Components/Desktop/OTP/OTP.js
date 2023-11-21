import React, { useState } from 'react'
import OTPNumber from './OTPNumber/OTPNumber'
import OTPLoader from './OTPLoader/OTPLoader';
import SignUpSidebar from '../SignUpSidebar/SignUpSidebar';
import NextButton from '../NextButton/NextButton';
import styles from './OTP.module.css'
const OTP = () => {
    return (
        <div className={styles.allOtpData}>
            <div style={{ display: 'flex' }} >
                <SignUpSidebar />
                <div className={styles.allOtpData} style={{ display: 'flex', justifyContent: 'flex-end', height: '100vh', margin: '0' }}>
                    <div className={styles.otpData}>
                        <OTPNumber length={6} />
                        <OTPLoader />
                        <div style={{ marginTop: '80px' }}>
                            <NextButton />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OTP;