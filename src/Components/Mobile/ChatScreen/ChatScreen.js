import React, { useState } from 'react'
import ChatScreenHeader from './ChatScreenHeader/ChatScreenHeader'
import GlobalStyles from '../../../app/Globalstyle'
import SendMessage from './SendMessage/SendMessage'
import ReceiveMessage from './ReceiveMessage/ReceiveMessage'
import TextBox from './TextBox/TextBox'
import SendIcon from './SendIcon/SendIcon'
import AddTaskIcon from './AddTaskIcon/AddTaskIcon'
import TaggedUsersString from '../../../Helpers/Taggered_Users'
import './ChatScreen.css';
import ChatPopUp from './ChatPopUp/ChatPopUp'
const ChatScreen = () => {
  const chatScreenData = {
    "error_code": 0,
    "message": "Success",
    "data": {
      "messages": [
        {
          "message_id": 1,
          "from_user_id": 3,
          "is_logged_in": true,
          "from_user_name": "piyush",
          "tagged_users": [
            {
              "username": "anish",
              "user_id": 4
            },
            {
              "username": "mihir",
              "user_id": 6
            }
          ],
          "message": "@{anish}[4] please send report to @{mihir}[6]",
          "time_ago": "2 minutes ago",
          "created_at": "09-04-2023 17:48:10"
        },
        {
          "message_id": 2,
          "from_user_id": 4,
          "from_user_name": "anish",
          "is_logged_in": false,
          "tagged_users": [
            {
              "username": "anish",
              "user_id": 4
            },
            {
              "username": "mihir",
              "user_id": 6
            }
          ],
          "message": "@{anish}[4] please send report to @{mihir}[6]",
          "time_ago": "2 hours ago",
          "created_at": "09-04-2023 17:48:10"
        },
        {
          "message_id": 3,
          "from_user_id": 6,
          "from_user_name": "mihir",
          "is_logged_in": false,
          "tagged_users": [
            {
              "username": "anish",
              "user_id": 4
            },
            {
              "username": "mihir",
              "user_id": 6
            }
          ],
          "message": "@{anish}[4] please send report to @{mihir}[6]",
          "time_ago": "1 day ago",
          "created_at": "09-04-2023 17:48:10"
        },
        {
          "message_id": 1,
          "from_user_id": 3,
          "from_user_name": "piyush",
          "is_logged_in": true,
          "tagged_users": [
            {
              "username": "anish",
              "user_id": 4
            },
            {
              "username": "mihir",
              "user_id": 6
            }
          ],
          "message": "@{anish}[4] please send report to @{mihir}[6]",
          "time_ago": "2 day ago",
          "created_at": "09-04-2023 17:48:10"
        }
      ],
      "chat_id": 2,
      "chat_title": "Sell Products",
      "total_messages": 203,
      "page": 2,
      "is_next_page": true,
      "is_prev_page": true
    }
  }
  return (
    <div>

      <GlobalStyles />
      <ChatScreenHeader />
      <div style={{ paddingTop: '70px' }}></div>
      {
        chatScreenData.data.messages.map((value, index) => {
          return (
            <div key={index}>
              {
                value.is_logged_in === true ?
                  <SendMessage message={TaggedUsersString(value.message, value.is_logged_in, value.tagged_users)} senderName={value.from_user_name} />
                  : <ReceiveMessage message={TaggedUsersString(value.message, value.is_logged_in, value.tagged_users)} receiverName={value.from_user_name} />
              }
            </div>
          )
        })
      }

      <div
        style={{
          
           display: 'flex', 
          // position: 'fixed',
          left: '0', right: '0', bottom: '0', textAlign: 'center', justifyContent: 'center',
          position: 'absolute',
          bottom: '0',
        }}
      >
        <AddTaskIcon/>
        <TextBox />
        <SendIcon />
      </div>
    </div>

  )
}

export default ChatScreen
