import React from 'react';
import styles from './ProfileName.module.css'

const ProfileName = () => {
    return (
        <div>
            <div className={styles.profilePicture}>
                <img src='/profile-picture.svg'></img>
            </div>
            <div className={styles.userName}>
                <h1>Surbhi Khanwal</h1>

            </div>
            
        </div>
    )
}

export default ProfileName
