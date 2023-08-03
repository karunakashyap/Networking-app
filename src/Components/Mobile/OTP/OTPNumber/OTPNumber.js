import React, { useState, useRef } from 'react';
import styles from './OTPNumber.module.css'
const OTPNumber = ({ length }) => {
    const [otp, setOTP] = useState(new Array(length).fill(''));
    const inputRefs = useRef(new Array(length));
    const handleInput = (index, e) => {
        const value = e.target.value;
        setOTP((prevOTP) => {
            const newOTP = [...prevOTP];
            newOTP[index] = value;
            return newOTP;
        });
        if (index < length - 1 && value) {
            inputRefs.current[index + 1].focus();
        }
    };
    return (
        <div>
            <div className={styles.optNumberData}>
                <h1 className={styles.optHeading}>
                    Enter code send to your number
                </h1>
                <div className={styles.optNumber}>
                    {otp.map((digit, index) => {
                        return (
                            <div>
                                <input
                                    key={index}
                                    type="number"
                                    value={digit}
                                    maxLength={1}
                                    onChange={(e) => handleInput(index, e)}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                />
                            </div>
                        )
                    })}
                </div>
                <div className={styles.resendCode}>
                    <h1>Did't get the code?<span>Resend</span></h1>
                </div>
            </div>
        </div>
    )
}


export default OTPNumber
