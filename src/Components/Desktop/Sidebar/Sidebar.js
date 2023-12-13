import React, { useState } from 'react';
import styles from './Sidebar.module.css'
import Image from 'next/image';
import SettingSidebar from '../SettingSidebar/SettingSidebar';
import NotificationSidebar from '../NotificationScreen/NotificationSidebar/NotificationSidebar';
import ChatsSidebar from '../ChatsSidebar/ChatsSidebar';
const Sidebar = ({hideComponent,chatScreen}) => {
    const [sidebarborderRadius, setsidebarborderRadius] = useState('0px 75.5px 75.5px 0px');
    const [sidebarWidth, setsidebarWidth] = useState('320px');
    const [sidebarText, setSidebarText] = useState(styles.sidebarText)
    const [sidebarIcon, setSidebarIcon] = useState(styles.sidebarIcon);
    const [settingSidebar, setsettingSidebar] = useState(false);
    const [settingIcon, setSettingIcon] = useState('/settings-icon-gray.svg');
    const [notificationSidebar, setNotificationSidebar] = useState(false);
    const [bellIcon, setBellIcon] = useState('/bell-gray-icon.svg');
    const [chatsSidebar,setChatsSidebar]=useState(false);
    const [chatIcon,setChatIcon]=useState('/chat-gray-icon.svg')


    const showSetting = () => {
        setChatsSidebar(false)
        setsidebarWidth('100px')
        setsidebarborderRadius('0px 0px 0px 0px');
        setSidebarText(styles.sidebarTextHide);
        setSidebarIcon(styles.sidebarIconHide);
        setsettingSidebar(true);
        setSettingIcon('/setting.svg');
        setNotificationSidebar(false)
        setBellIcon('/bell-gray-icon.svg')
        setChatIcon('/chat-gray-icon.svg')
    }
    const showNotification = () => {
        setNotificationSidebar(true);
        setsettingSidebar(false);
        setSidebarText(styles.sidebarTextHide);
        setSidebarIcon(styles.sidebarIconHide);
        setsidebarWidth('100px')
        setsidebarborderRadius('0px 0px 0px 0px');
        setBellIcon('/bell-icon.svg')
        setSettingIcon('/settings-icon-gray.svg');
        setChatsSidebar(false);
        setChatIcon('/chat-gray-icon.svg')


    }
    const showChatsSidebar=()=>{
        setChatsSidebar(true);
        setNotificationSidebar(false);
        setsettingSidebar(false);
        setSidebarText(styles.sidebarTextHide);
        setSidebarIcon(styles.sidebarIconHide);
        setsidebarWidth('100px')
        setsidebarborderRadius('0px 0px 0px 0px');
        setBellIcon('/bell-gray-icon.svg')
        setSettingIcon('/settings-icon-gray.svg');
        setChatIcon('/chat icon.svg')
        
    }
    return (
        <div>
            <div >
                <div className={styles.sidebar} style={{ width: sidebarWidth, borderRadius: sidebarborderRadius }} >
                    <h1 className={styles.sidebarHeading}>
                        <p className={sidebarText}>My Network</p>

                    </h1>
                    <div className={styles.allMenu}>
                        <div className={styles.sidebarMenu} onClick={showNotification}>
                            <p className={sidebarText}>Notifications</p>
                            <Image className={sidebarIcon} src={bellIcon} width={24} height={24} alt='' ></Image>
                        </div>
                        <div className={styles.sidebarMenu}>
                            <p className={sidebarText}>Create Task</p>
                            <Image className={sidebarIcon} src='/plus-create-gray.svg' width={28} height={28} alt='' ></Image>

                        </div>
                        <div className={styles.sidebarMenu} onClick={showChatsSidebar}>
                            <p className={sidebarText}>Chats</p>
                            <Image className={sidebarIcon} src={chatIcon} width={28} height={28} alt='' ></Image>

                        </div>
                        <div className={styles.sidebarMenu}>
                            <p className={sidebarText}>All Tasks</p>
                            <Image className={sidebarIcon} src='/create-report-gray.svg' width={26} height={26} alt='' ></Image>

                        </div>
                        <div className={styles.sidebarMenu}>
                            <p className={sidebarText}>Members</p>
                            <Image className={sidebarIcon} src='/group-member-gray.svg' width={26} height={26} alt='' ></Image>

                        </div>
                        <div className={styles.sidebarMenu} onClick={showSetting}>
                            <p className={sidebarText}>Setting</p>
                            <Image className={sidebarIcon} src={settingIcon} width={24} height={24} alt=''  ></Image>

                        </div>
                        <div className={styles.sidebarMenu}>
                            <p className={sidebarText}>Search</p>
                            <Image className={sidebarIcon} src='/search-icon-gray.svg' width={29} height={29} alt='' ></Image>

                        </div>
                        <div className={styles.sidebarMenu}>
                            <p className={sidebarText}>Invite</p>

                            <Image className={sidebarIcon} src='/invite-icon-gray.svg' width={29} height={29} alt=''></Image>
                        </div>
                        {settingSidebar && <SettingSidebar />}
                        {notificationSidebar && <NotificationSidebar />}
                        {chatsSidebar && <ChatsSidebar hideComponent={hideComponent} chatScreen={chatScreen}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
