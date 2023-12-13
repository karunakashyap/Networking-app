import React, { useState } from 'react';
import styles from './ChatsSidebar.module.css'
import MemberList from './MemberList/MemberList';
import Footer from './Footer/Footer';
import ChatScreen from '../ChatScreen/ChatScreen';

const ChatsSidebar = ({hideComponent,chatScreen}) => {
    return (
        <div>
            <div className={styles.chatsMemberList}>
                <div className={styles.chatHeading}><h1>Chatrooms</h1></div>
                <div style={{ marginTop: '10px' }} onClick={hideComponent}><MemberList /></div>
                <div className={styles.footer}><Footer/></div> 

            </div>
            {chatScreen && <ChatScreen/>}
        </div>
    )
}

export default ChatsSidebar
