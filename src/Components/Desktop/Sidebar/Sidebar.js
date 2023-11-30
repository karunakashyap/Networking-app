import React, { useState } from 'react';
import styles from './Sidebar.module.css'
import Image from 'next/image';
import SettingSidebar from '../SettingSidebar/SettingSidebar';
const Sidebar = () => {
    const [sidebarborderRadius, setsidebarborderRadius] = useState('0px 75.5px 75.5px 0px');
    const [sidebarWidth, setsidebarWidth] = useState('320px');
    const [sidebarText, setSidebarText] = useState(styles.sidebarText)
    const [sidebarIcon, setSidebarIcon] = useState(styles.sidebarIcon);
    const [settingSidebar, setsettingSidebar] = useState(false);
    const [settingIcon, setSettingIcon] = useState('/settings-icon-gray.svg')


    const showSetting = () => {
        setsidebarWidth('100px')
        setsidebarborderRadius('0px 0px 0px 0px');
        setSidebarText(styles.sidebarTextHide)
        setSidebarIcon(styles.sidebarIconHide)
        setsettingSidebar(true);
        setSettingIcon('/setting.svg')
    }
    return (
        <div>
            <div >
                <div className={styles.sidebar} style={{ width: sidebarWidth, borderRadius: sidebarborderRadius }} >
                    <h1 className={styles.sidebarHeading}>
                        <p className={sidebarText}>My Network</p>

                    </h1>
                    <div className={styles.allMenu}>
                        <div className={styles.sidebarMenu}>
                            <p className={sidebarText}>Notifications</p>
                            <Image className={sidebarIcon} src='/bell-gray-icon.svg' width={25} height={25} alt='' ></Image>
                        </div>
                        <div className={styles.sidebarMenu}>
                            <p className={sidebarText}>Create Task</p>
                            <Image className={sidebarIcon} src='/plus-create-gray.svg' width={28} height={28} alt='' ></Image>

                        </div>
                        <div className={styles.sidebarMenu}>
                            <p className={sidebarText}>Chats</p>
                            <Image className={sidebarIcon} src='/chat-gray-icon.svg' width={28} height={28} alt='' ></Image>

                        </div>
                        <div className={styles.sidebarMenu}>
                            <p className={sidebarText}>All Tasks</p>
                            <Image className={sidebarIcon} src='/create-report-gray.svg' width={26} height={26} alt='' ></Image>

                        </div>
                        <div className={styles.sidebarMenu}>
                            <p className={sidebarText}>Members</p>
                            <Image className={sidebarIcon} src='/group-member-gray.svg' width={26} height={26} alt='' ></Image>

                        </div>
                        <div className={styles.sidebarMenu}>
                            <p className={sidebarText}>Setting</p>
                            <Image className={sidebarIcon} src={settingIcon} width={24} height={24} alt='' onClick={showSetting} ></Image>

                        </div>
                        <div className={styles.sidebarMenu}>
                            <p className={sidebarText}>Search</p>
                            <Image className={sidebarIcon} src='/search-icon-gray.svg' width={28} height={28} alt='' ></Image>

                        </div>
                        <div className={styles.sidebarMenu}>
                            <p className={sidebarText}>Invite</p>

                            <Image className={sidebarIcon} src='/invite-icon-gray.svg' width={28} height={28} alt=''></Image>
                        </div>
                        {settingSidebar && <SettingSidebar />}




                    </div>


                </div>


            </div>

        </div>




    )
}

export default Sidebar
