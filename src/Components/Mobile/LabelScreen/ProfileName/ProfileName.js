import React, { useState } from 'react';
import styles from './ProfileName.module.css'

const ProfileName = () => {
    const [color,setColor]=useState('red');
    const change=()=>{
        setColor('green')
    }
    return (
        <div>
            <div className={styles.profilePicture}>
                <img src='/profile-picture.svg'></img>
            </div>
            <div className={styles.userName} onMouseEnter={change} style={{color:color}}>
                <h1>Surbhi Khanwal</h1>

            </div>
            
        </div>
    )
}

export default ProfileName
