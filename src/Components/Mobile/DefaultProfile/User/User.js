import React, { useState } from 'react';
import styles from './User.module.css'

const User = ({ funcClick, imageUrl, edit }) => {
    const [inputValue, setInputValue] = useState('I am a Graphic Designer working Experience of 5 years');
    return (
        <div>
            <div className={styles.aboutuser}>
                <p className={styles.parafirst}>About You</p>
                <p className={styles.parasecond}>
                    {edit ?
                        <textarea style={{ padding: '10px',width:'90%' }}
                            placeholder='Type..'
                            onChange={(event) => setInputValue(event.target.value)}
                        />
                        : <>{inputValue}</>
                    }
                </p>
            </div>
        </div>
    )
}

export default User
