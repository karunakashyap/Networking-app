import React from 'react';
import styles from './Avatar.module.css'

const Avatar = () => {
  return (
    <div>
      <div className={styles.avatarData}>
        <div className={styles.avatarDataImg}>
          <img src='/Ellipse 1.svg' alt='profile-imge' ></img>
        </div>
        <h2>Kapil <br></br> Sharma</h2>
      </div>
    </div>
  )
}

export default Avatar
