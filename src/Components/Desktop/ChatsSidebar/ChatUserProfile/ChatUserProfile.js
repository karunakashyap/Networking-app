import React from 'react';
import styles from './ChatUserProfile.module.css'

const ChatUserProfile = ({ memberImageUrl }) => {
    return (
        <div className={styles.imageContainer}>               
        { memberImageUrl.length==1? memberImageUrl.map((value,index)=>{ return <img src={value} style={{position:'relative',right:'-4px',top:'6px',marginRight:'-7px'}} width={'40px'} height={'40px'}></img>}): memberImageUrl.length==2? memberImageUrl.map((value,index)=>{ return <img src={value} width={'30px'} height={'30px'} ></img>}): memberImageUrl.map((value1,index1)=>{return <img src={value1} width={'30px'} height={'30px'}></img>})}
 </div>
    )
}

export default ChatUserProfile
