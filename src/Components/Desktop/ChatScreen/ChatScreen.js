import React, { useState } from 'react';
import styles from './ChatScreen.module.css'
import ChatScreenHeader from './ChatScreenHeader/ChatScreenHeader';
import TextBox from './TextBox/TextBox';
import AddTaskIcon from './AddTaskIcon/AddTaskIcon';
import SendIcon from './SendIcon/SendIcon';
import ReceiveMessage from './ReceiveMessage/ReceiveMessage';
import SendMessage from './SendMessage/SendMessage';
import ChatPopup from './ChatPopup/ChatPopup';

const ChatScreen = () => {
  const [showPopup,setShowPopup]=useState(false);
  const chatScreenPopup=()=>{
    setShowPopup(true)
  }
  return (
    <div>
        <div className={styles.allChatScreenData}>
          <ChatScreenHeader/>
          <TextBox/>
          <AddTaskIcon chatScreenPopup={chatScreenPopup}/>
          <SendIcon/>
          <div style={{marginTop:'20px'}}>
          <ReceiveMessage/>
          <SendMessage/>
          </div>
         { showPopup && <ChatPopup />}
          
        </div>
    </div>
  )
}

export default ChatScreen
