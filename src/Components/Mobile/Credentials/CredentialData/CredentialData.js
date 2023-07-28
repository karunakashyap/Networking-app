import React from 'react';
import styles from './CredentialData.module.css'

const CredentialData = () => {
    return (
        <div>
            <div className={styles.allCredentialData}>
                <div className={styles.userFullName}>
                    <h1>Full Name</h1>
                    <div><input type='text'></input></div>
                </div>
                <div className={styles.mobileNumber}>
                    <h1>Mobile Number</h1>
                    <div><input type='text'></input></div>
                </div>
                <div className={styles.birthDate}>
                    <h1>Date of Birth</h1>
                    <div><input type='text'></input></div>
                </div>
                <div className={styles.location}>
                    <h1>Location</h1>
                    <div><input type='text'></input></div>
                </div>

            </div>

        </div>
    )
}

export default CredentialData
