import React, { useState } from 'react';
import GlobalStyles from '../../../app/Globalstyle';
import NotificationHeader from '../Notification/NotificationHeader/NotificationHeader';
import MemberListFooter from './MemberListFooter/MemberListFooter';
import ChatMember from './ChatMember/ChatMember';
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
const [bottom,setBottom]=useState('-10px')
  return (
    <div>
      <GlobalStyles />
      <NotificationHeader text="Chatrooms" />
      <MemberListFooter bottom={bottom}/>
      <div style={{ paddingTop: '30px' }}></div>
      {chatListMember.data.chats.map((chat,index) => (
        <div key={index}>
          <ChatMember title={chat.chat_title} name={chat.chat_user_name}
           count={<div style={{ display: 'flex', justifyContent: 'center', marginLeft: '40px', marginTop: '10px', fontSize: '12px', backgroundColor: 'rgba(193, 155, 71, 1)', width: '20px', height: '20px', borderRadius: '50%', color: '#FFF' }}>{chat.unread_count}</div>} chatImageUrl={chat.chat_image_url}
            memberImages={chat.members_image_url} />
        </div>
      ))}
    </div>
  )
}

export default MemberList
