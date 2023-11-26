import React, { useState} from 'react';
import { useRouter } from 'next/router';
import OTPNumber from './OTPNumber/OTPNumber'
import OTPLoader from './OTPLoader/OTPLoader';
import NextButton from '../NextButton/NextButton';
import SignUpSidebar from '../SignUpSidebar/SignUpSidebar';
import styles from './OTP.module.css'
import SelectUser from '../SelectUser/SelectUser';
const OTP = () => {
    const router = useRouter();
    const [tagText, settagText] = useState('');
    const [tagCheckBox, setTextCheckBox] = useState('/check-box-yellow.svg')
    const [otpText, setotpText] = useState('');
    const [otpCheckBox, setotpCheckBox] = useState('/check-box-yellow.svg');
    const [passwordText, setpasswordText]= useState('');
    const [passwordCheckBox, setpasswordCheckBox] = useState('/check-box-gray.svg')
    const [password, setPassword] = useState(false);
    const passwordScreen = () => {
        setPassword(true);
        router.push('/Selectuser')
    }
    return (
        <div>
            {password?<SelectUser/>:<div style={{ display: 'flex' }} className={styles.allCredentialData}>
            <SignUpSidebar  tagText={tagText} tagCheckBox={tagCheckBox} otpText={otpText} otpCheckBox={otpCheckBox}  passwordText={passwordText} passwordCheckBox={passwordCheckBox}/>
                <div style={{ display: 'flex', justifyContent: 'flex-end', height: '100vh', margin: '0' }}>
                    <div className={styles.allUserData}>
                        <div style={{ display: 'flex' }} >
                            <div >
                                <OTPNumber length={6} />
                                <OTPLoader />
                                <div style={{ marginTop: '80px' }} onClick={passwordScreen}>
                                    <NextButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}
        </div>
    )
}

export default OTP;