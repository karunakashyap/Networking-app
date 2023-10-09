import React, { useState, useRef, useEffect } from 'react';
import styles from './OTPNumber.module.css'
const OTPNumber = ({ length }) => {
    const [counter, setCounter] = useState(10);
    useEffect(() => {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);
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
    const handleKeyDown = (index, event) => {
        if (event.key === 'Backspace' && !otp[index] && index > 0) {
          inputRefs.current[index - 1].focus();
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
                                    onKeyDown={(e) => handleKeyDown(index, e)}

                                />
                            </div>
                        )
                    })}
                </div>
                <div className={styles.resendCode}>
                    <h1>Did't get the code? {counter?(<span  >Resend</span>):<span className={styles.resendDisable}>Resend</span>}</h1>
                </div>
            </div>
        </div>
    )
}


export default OTPNumber
