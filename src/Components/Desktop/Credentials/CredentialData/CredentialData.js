import React from 'react';
import styles from './CredentialData.module.css'
import NextButton from '../../NextButton/NextButton';
const CredentialData = ({existTags}) => {
    return (
        <div>
            <div className={styles.allCredentialData}>
                <div className={styles.allinputField}>
                    <div className={styles.userData}>
                        <h1>Full Name</h1>
                        <div><input type='text'></input></div>
                    </div>
                    <div className={styles.mobile}>
                        <h1>Mobile Number</h1>
                        <div className={styles.mobileData}>
                            <p >IND +91</p>
                            <div >
                                <img src='/dropdown-arrow.svg'></img>
                            </div>
                            <input type='number'></input>

                        </div>
                    </div>
                    <div className={styles.userData}>
                        <h1 style={{ marginLeft: '15px' }}>Date of Birth</h1>
                        <div><input type='date'></input></div>
                    </div>
                    <div className={styles.userData}>
                        <h1 style={{ marginLeft: '-5px' }}>Location</h1>
                        <div><input type='text'></input></div>
                    </div>
                </div>
            </div>
            <p className={styles.acountHeading}>Already have an account?</p>
           
           
        </div>
    )
}

export default CredentialData
