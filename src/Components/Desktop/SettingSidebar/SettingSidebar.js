import React from 'react';
import styles from './SettingSidebar.module.css'

const SettingSidebar = () => {
  return (
    <div>
        <div className={styles.sidebarSetting}>
          <div className={styles.settingHeading}>
            <h1>Setting</h1>
          </div>
          <div className={styles.settingmenu }>
            <ul>
                <li><img src='/bell icon blue.svg'></img><p>Notification</p></li>
                <li style={{position:'relative',right:'5px'}}><img  src='/privacy icons blue.svg'></img><p>Privacy</p></li>
                <li><img src='/Vector blue.svg'></img><p>Help</p></li>
                <li><img src='/about icon blue.svg'></img><p>About</p></li>
                <li><img src='/logout-blue.svg'></img><p>Log out</p></li>
            </ul>
          </div>
        </div>
      
    </div>
  )
}

export default SettingSidebar
