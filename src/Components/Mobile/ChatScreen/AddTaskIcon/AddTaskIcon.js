import React, { use, useState } from 'react';
import styles from './AddTaskIcon.module.css'
import ChatPopUp from '../ChatPopUp/ChatPopUp';

export default function AddTaskIcon() {
  const[chatPopCall,setchatPopCall]=useState(false);
  const handler = ()=>{
    setchatPopCall(true)
  }
  return (
    <div>
        
          {chatPopCall && <ChatPopUp/>}
          <div className={styles.addIcon} >
            <img src='/task-round.svg' onClick={handler}></img>
         </div>
    </div>
  )
}
