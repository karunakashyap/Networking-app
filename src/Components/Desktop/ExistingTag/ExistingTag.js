import React, { useEffect, useState } from 'react';
import NextButton from '../NextButton/NextButton';
import AllTag from './AllTag/AllTag';
import DropDown from './DropDown/DropDown';
import styles from './Existing.module.css'
import SignUpSidebar from '../SignUpSidebar/SignUpSidebar';
import OTP from '../OTP/OTP';
import { useRouter } from 'next/router';

const ExistingTag = () => {
    const [selectedTags, setSelectedTags] = useState([
        {
            "title": "Developer1",
            "isSelected": true,
        },
        {
            "title": "Developer2",
            "isSelected": true,
        },
        {
            "title": "Developer3",
            "isSelected": true,
        }
    ]);
    const removeTag = (index) => {
        const a = [...selectedTags];
        a.splice(index, 1)
        setSelectedTags(a)



    }
    const selectTagOption = (optionValue) => {

        const tags = [
            ...selectedTags,
            {
                title: optionValue.title,
                isSelected: true
            }
        ];
        setSelectedTags(tags)
    }
    const router = useRouter();
    const [tagText, settagText] = useState('#2B8CA7');
    const [tagCheckBox, setTextCheckBox] = useState('/check-box-yellow.svg')
    const [otpText, setotpText] = useState('');
    const [otpCheckBox, setotpCheckBox] = useState('/check-box-gray.svg');
    const [passwordText, setpasswordText] = useState('');
    const [passwordCheckBox, setpasswordCheckBox] = useState('/check-box-gray.svg')
    const [otp, setShowOtp] = useState(false);
    const otpScreen = () => {
        setShowOtp(true);
        router.push('/OTP')
    }
    return (
        <div>
            {otp ? <OTP /> : <div style={{ display: 'flex' }} className={styles.allCredentialData}>
                <SignUpSidebar tagText={tagText} tagCheckBox={tagCheckBox} otpText={otpText} otpCheckBox={otpCheckBox} passwordText={passwordText} passwordCheckBox={passwordCheckBox} />
                <div style={{ display: 'flex', justifyContent: 'flex-end', height: '100vh', margin: '0' }}>
                    <div className={styles.allUserData}>
                        <h1 style={{ marginTop: '32px', textAlign: 'center', color: '#FFF', fontSize: '20px', fontWeight: '600' }}>Select Tag</h1>
                        <AllTag tags={selectedTags} removeTag={removeTag} />
                        <DropDown selectTagOption={selectTagOption} />
                        <div style={{ marginTop: '31px' }} onClick={otpScreen}>
                            <NextButton />
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default ExistingTag
