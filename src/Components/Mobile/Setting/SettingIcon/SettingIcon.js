import React from 'react';
import styles from './SettingIcon.module.css'

const SettingIcon = ({ logoutImage, logoutColor, showLogoutPopup }) => {
    return (
        <div>
            <div className={styles.allSettingIcon}>
                <ul>
                    <div className={styles.settingIconContent}>
                        <li>
                            <div className="grid grid-cols-2 gap-1 w-36">
                                <div className="..." ><img src='/bell icon blue.svg' width={25} height={26}></img></div>
                                <div className="..." ><h1>Notification</h1></div>
                            </div>
                        </li>
                        <li>
                            <div className="grid grid-cols-2 gap-1 w-36">
                                <div className="..." style={{ marginLeft: '-5px' }}><img src='/privacy icons blue.svg' width={34} height={33}></img></div>
                                <div className="..." ><h1>Privacy</h1></div>
                            </div>
                        </li>                        <li>
                            <div className="grid grid-cols-2 gap-1 w-36">
                                <div className="..." ><img src='/Vector blue.svg' width={28} height={28}></img></div>
                                <div className="..."><h1>Help</h1></div>
                            </div>
                        </li>                        <li>
                            <div className="grid grid-cols-2 gap-1 w-36">
                                <div className="..." ><img src='/about icon blue.svg' width={34} height={33}></img></div>
                                <div className="..." ><h1>About</h1></div>
                            </div>
                        </li>                        <li>
                            <div className="grid grid-cols-2 gap-1 w-36">
                                <div className="..." ><img src={logoutImage} width={34} height={33}></img></div>
                                <div className="..." style={{ color: logoutColor, fontSize: '16px', fontWeight: '400' }} onClick={showLogoutPopup}><h2>Log Out</h2></div>
                            </div>
                        </li>
                    </div>
                </ul>



            </div>


        </div>
    )
}

export default SettingIcon
