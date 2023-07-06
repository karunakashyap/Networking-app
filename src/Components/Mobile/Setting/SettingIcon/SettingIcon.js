import React from 'react';
import styles from './SettingIcon.module.css'
import GlobalStyles from '../../../../app/Globalstyle';

const SettingIcon = () => {
    return (
        <div>
            <GlobalStyles />
            <div className={styles.allSettingIcon}>
                <ul>
                    <div className={styles.settingIconContent}>
                        <li>
                            <div className="grid grid-cols-2 gap-1 w-36">
                                <div className="..."><img src='/bell icon blue.svg' width={25} height={26}></img></div>
                                <div className="..."><h1>Notification</h1></div>
                            </div>
                        </li>
                        <li>
                            <div className="grid grid-cols-2 gap-1 w-36">
                                <div className="..."  style={{marginLeft:'-3px',marginTop:'-6px'}}><img src='/privacy icons blue.svg' width={34} height={33}></img></div>
                                <div className="..."><h1>Privacy</h1></div>
                            </div>
                        </li>                        <li>
                            <div className="grid grid-cols-2 gap-1 w-36">
                                <div className="..."><img src='/Vector blue.svg' width={28} height={28}></img></div>
                                <div className="..."><h1>Help</h1></div>
                            </div>
                        </li>                        <li>
                            <div className="grid grid-cols-2 gap-1 w-36">
                                <div className="..."><img src='/about icon blue.svg' width={34} height={33}></img></div>
                                <div className="..."><h1>About</h1></div>
                            </div>
                        </li>                        <li>
                            <div className="grid grid-cols-2 gap-1 w-36">
                                <div className="..."><img src='/logout blue.svg' width={34} height={33}></img></div>
                                <div className="..." style={{color:'#2B8CA7',fontSize:'16px',fontWeight:'400'}}><h2>Log Out</h2></div>
                            </div>
                        </li>
                    </div>
                </ul>



            </div>


        </div>
    )
}

export default SettingIcon
