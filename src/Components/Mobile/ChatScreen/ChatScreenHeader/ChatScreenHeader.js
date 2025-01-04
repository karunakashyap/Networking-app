import React from 'react';
import styles from './ChatScreen.module.css'

const ChatScreenHeader = () => {
    const membersName = ['karuna', 'Rishika', 'Shivani', 'Deeksha', 'Shubham', 'Prachi', 'Kashyap']
    return (
        <div>
            <div className={styles.userChatHeader}>
                <div className={styles.chatHeaderDiv}>
                    <ul>
                        <div style={{ width: '90%' }}>
                            <li ><img src='/back arrow icon.svg' style={{ marginTop: '3px' }}></img></li>
                            <li ><img src='/profile-picture.svg' style={{ width: '35px', height: '35px' }}></img></li>
                            <p style={{ fontSize: '18px',width:'100%',color:'#FFF',position:'relative',top:'12px',left:'14px' }}>Sell Product</p>

                            <li style={{ width: '50%', overflow: 'hidden',marginTop:'-10px',height:'40px' }} className={styles.members}>
                                {
                                    membersName.map((name, key) => {
                                        return (
                                            <span key={key} style={{ fontSize: '10px', color: '#FFF' }}>{name}, </span>
                                        )
                                    }
                                    )
                                }
                            </li>
                        </div>
                        <li style={{ float: 'right',marginTop:'-24px' }}><img src='/three-dot.svg'></img></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ChatScreenHeader
