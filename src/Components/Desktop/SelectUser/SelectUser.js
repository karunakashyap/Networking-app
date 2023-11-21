import React from 'react'
import SelectUserData from './SelectUserData/SelectUserData';
import styles from './SelectUser.module.css';
import SignUpSidebar from '../SignUpSidebar/SignUpSidebar';
import NextButton from '../NextButton/NextButton';

const SelectUser = () => {
    return (
        <div className={styles.allSelectUserData}>
            <div style={{ display: 'flex' }} >
                <SignUpSidebar />
                <div className={styles.userData} style={{ display: 'flex', justifyContent: 'flex-end', height: '100vh', margin: '0' }}>
                    <div className={styles.user}>
                       <SelectUserData/>
                       <div style={{marginTop:'302px'}}> <NextButton/></div>
                      
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SelectUser
