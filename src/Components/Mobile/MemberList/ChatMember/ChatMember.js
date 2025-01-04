import React from 'react';
import styles from './ChatMember.module.css';
import ChatUserProfile from '../ChatUserProfile/ChatUserProfile';
const ChatMember = ({ title, name, count, chatImageUrl, memberImages, inputValue }) => {
    return (
        <div>

            <div className={styles.chatMembers}>
                <div className="grid grid-cols-4">
                    <div className="..." style={{ display: 'flex', justifyContent: 'center', marginTop: '2px' }}>
                       <ChatUserProfile imagesUrl={memberImages}/>
                    </div>
                    <div className="..." style={{ width: '100px' }}><p style={{ fontWeight: '500', fontSize: '16px' }}>{title}</p><p style={{ fontSize: '12px' }}>{name}</p></div>
                    <div className="..." style={{ marginLeft: '60px', width: '50%' }}><img src={chatImageUrl} width={40} height={40} ></img></div>
                    <div className="...">
                        {count}
                    </div>
                </div>
            </div>
           {/* ))} */}
        </div>
    )
}

export default ChatMember
