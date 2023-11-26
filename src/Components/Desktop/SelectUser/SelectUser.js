import React,{useState} from 'react'
import SelectUserData from './SelectUserData/SelectUserData';
import NextButton from '../NextButton/NextButton';
import NewPassword from '../NewPassword/NewPassword';
import { useRouter } from 'next/router';
import styles from './SelectUser.module.css';
import SignUpSidebar from '../SignUpSidebar/SignUpSidebar';
const SelectUser = () => {
    const router = useRouter();
    const [tagText, settagText] = useState('');
    const [tagCheckBox, setTextCheckBox] = useState('/check-box-yellow.svg')
    const [otpText, setotpText] = useState('');
    const [otpCheckBox, setotpCheckBox] = useState('/check-box-yellow.svg');
    const [passwordText, setpasswordText]= useState('');
    const [passwordCheckBox, setpasswordCheckBox] = useState('/check-box-yellow.svg')
    const [password, setPassword] = useState(false);
    const passwordScreen = () => {
        setPassword(true);
        router.push('/Newpassword')
    }
    return (
        <div >
            {password ? <NewPassword/> : <div style={{ display: 'flex' }} className={styles.allCredentialData}>
            <SignUpSidebar  tagText={tagText} tagCheckBox={tagCheckBox} otpText={otpText} otpCheckBox={otpCheckBox}  passwordText={passwordText} passwordCheckBox={passwordCheckBox}/>
                <div style={{ display: 'flex', justifyContent: 'flex-end', height: '100vh', margin: '0' }}>
                    <div className={styles.allUserData}>
                        <div >
                            <div >
                                <SelectUserData />
                                <div style={{ marginTop: '302px' }} onClick={passwordScreen}> <NextButton /></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
}
       </div>     
    )
}

            export default SelectUser
