import React from 'react';
import styles from './SignData.module.css'
const SignData = () => {
    return (
        <div className={styles.allData}>
            <div className={styles.userId}>
                <h1>User Id</h1>
                <div><input type='email'  name='userId' required></input></div>
            </div>
            <div className={styles.userPassword}>
                <h1>Password</h1>
                <div><input type='password' name="password" minLength="10" required></input></div>
            </div>
            <div className={styles.forgatPassword}>
                <h1>Forget Password</h1>

            </div>

        </div>
    )
}

export default SignData
