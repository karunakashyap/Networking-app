import React from 'react';
import styles from './WebSplash.module.css'

const WebSplash = () => {
  return (
    <div className={styles.container}>
      <div className={styles.splashContainer}>
        <img src="/shamil_logo_white (1).svg" alt="Splash Image" className={styles.image} width={185} height={185}/>
      </div>
    </div>

  )
}

export default WebSplash
