import React, { useState } from 'react';
import styles from './SignUpSidebar.module.css'
import AlreadyAccountButton from './AlreadyAcoountButton/AlreadyAccountButton';
import GlobalStyles from '../../../app/Globalstyle';

const SignUpSidebar = ({tagCheckBox,tagText,otpCheckBox,otpText,passwordText,passwordCheckBox}) => {
   
    return (
        <div>
            <GlobalStyles/>
            <div className={styles.signInSidebar}>
                <div className={styles.allSideBarData}>
                    <div className={styles.shaamlLogo}>
                        <img src='/horizontal_shamil_logo_alligned_with_stem_svg.svg' width={150} height={150}></img>
                    </div>
                    <div className={styles.sidebarData}>
                        <ul>
                            <li><img src='/check-box-yellow.svg' ></img><p style={{ color: '#2B8CA7' }}>Personal Details</p></li>
                            <li><img src={tagCheckBox}></img><p style={{ color:tagText }}>Tag Yourself</p></li>
                            <li><img src={otpCheckBox}></img><p style={{ color: otpText}}>Verify OTP</p></li>
                            <li><img src={passwordCheckBox}></img><p style={{color:passwordText}}>Set Password</p></li>
                        </ul>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '150px' }}>
                        <AlreadyAccountButton />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignUpSidebar
