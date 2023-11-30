import React, { useState } from 'react';
import styles from './SettingSidebar.module.css';
import LogoutPopup from './LogoutPopup/LogoutPopup';
const SettingSidebar = () => {
    const [popup, setPopup] = useState(false);
    const [logoutImage, setLogoutImage] = useState('/logout-blue.svg');
    const [logoutColor, setLogoutColor] = useState('');
    const [opacity, setOpacity] = useState('1');
    const [background, setBackground] = useState('#FFF')
    const logoutPopup = () => {
        setPopup(true);
        setLogoutImage('/logout-yellow-icon.svg');
        setLogoutColor('#C19B47')
        setOpacity('0')
        setBackground('#d9d9d99a')
    }
    const cancelButton = () => {
        setOpacity('1')
        setPopup(false)
        setBackground('')
        setLogoutColor('#2B8CA7')
        setLogoutImage('/logout-blue.svg')
        setBackground('#FFF')
    }
    return (
        <div>

            <div className={styles.sidebarSetting} style={{ opacity: opacity, backgroundColor: background }}>
                {popup && <LogoutPopup cancelButton={cancelButton} />}
                <div className={styles.settingHeading}>
                    <h1>Setting</h1>
                </div>
                <div className={styles.settingmenu}>
                    <ul>
                        <li><img src='/bell icon blue.svg' width={22} height={22}></img><p>Notification</p></li>
                        <li style={{ position: 'relative', right: '5px' }}><img src='/privacy icons blue.svg' width={28} height={28}></img><p>Privacy</p></li>
                        <li><img src='/Vector blue.svg' width={22} height={22}></img><p>Help</p></li>
                        <li style={{ position: 'relative', right: '6px' }}><img src='/about icon blue.svg' width={28} height={28}></img><p>About</p></li>
                        <li style={{ position: 'relative', right: '6px' }} onClick={logoutPopup}><img src={logoutImage} width={26} height={26}></img><p style={{ color: logoutColor }}>Log out</p></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default SettingSidebar
