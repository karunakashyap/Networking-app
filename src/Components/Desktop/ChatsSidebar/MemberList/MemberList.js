import React from 'react';
import styles from './MemberList.module.css'
import ChatUserProfile from '../ChatUserProfile/ChatUserProfile';

const MemberList = () => {
  const chatListMember = {
    "error_code": 0,
    "chat": "Success",
    "data": {
      "chats": [
        {
          "chat_id": 1,
          "chat_user_id": 3,
          "chat_user_name": "piyush",
          "chat_title": "Sell Products",
          "unread_count": 2,
          "chat_image_url": "/person-icon.svg",
          "members_image_url": [
            "/profile-image2.svg",

          ],
          "member_user_ids": [1, 2],
          "time_ago": "2 minutes ago",
          "created_at": "09-04-2023 17:48:10"
        },
        {
          "chat_id": 2,
          "chat_title": "Place order",
          "chat_user_name": "karuna kashyap",
          "unread_count": 5,
          "chat_image_url": "/group-chat-member-white.svg",
          "members_image_url": [
            "/profile-image2.svg",
            "/profile-image2.svg"
          ],
          "member_user_ids": [1, 2],
          "time_ago": "2 hours ago",
          "created_at": "09-04-2023 17:48:10"
        },
        {
          "chat_id": 3,
          "chat_user_id": 6,
          "chat_user_name": "mihir",
          "chat_title": "Make Report",
          "is_logged_in": false,
          "unread_count": 6,
          "chat_image_url": "/group-chat-member-white.svg",
          "members_image_url": [
            "/profile-image2.svg",
            "/profile-image2.svg",
            "/profile-image2.svg"

          ],
          "member_user_ids": [1, 2],
          "time_ago": "1 day ago",
          "created_at": "09-04-2023 17:48:10"
        },
        {
          "chat_id": 1,
          "chat_user_id": 3,
          "chat_user_name": "piyush",
          "chat_title": "Take Survey",
          "is_logged_in": true,
          "unread_count": 20,
          "chat_image_url": "/person-icon.svg",
          "members_image_url": [
            "/profile-image2.svg",
            "/profile-image2.svg",
            "/profile-image2.svg"
          ],
          "member_user_ids": [1, 2],
          "time_ago": "2 day ago",
          "created_at": "09-04-2023 17:48:10"
        }
      ],
      "page": 2,
      "is_next_page": true,
      "is_prev_page": true
    }
  }

  return (
    <div>
      {chatListMember.data.chats.map((chat, index) => {
        return (
          <div >
            <div className={styles.chatMemberProfile}>
              <div className={styles.chatUserImage}><ChatUserProfile memberImageUrl={chat.members_image_url}/></div>
              <div className={styles.chatMemberName}>
                <h1>{chat.chat_title}</h1>
                <p>{chat.chat_user_name}</p>

              </div>
              <div className={styles.chatMembers}><img src={chat.chat_image_url} width={35} height={35}></img></div>
              <div className={styles.unreadCount}><p>{chat.unread_count}</p></div>
            </div>


          </div>
        )
      })}
    </div>
  )
}

export default MemberList
