import React from 'react';
import styles from './CheckBox.module.css'

const CheckBox = () => {
    return (
        <div>
            <div className={styles.checkBox}>
                <img src='/white-check-box.svg'></img>
            </div>
        </div>
    )
}

export default CheckBox
