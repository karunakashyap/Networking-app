import React from 'react';
import styles from './LogoutLoader.module.css'

const LogoutLoader = () => {
    return (
        <div>
            <div className={styles.logoutHeading}><h1>Logout</h1></div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <div className={styles.logoutLoader}>
                </div>
            </div>
        </div>
    )
}

export default LogoutLoader
