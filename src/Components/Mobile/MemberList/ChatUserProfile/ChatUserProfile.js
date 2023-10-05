import React from 'react';
import styles from './ChatUserProfile.module.css';
const ChatUserProfile = ({imagesUrl}) => {
    return (
        <div className={styles.imageContainer}>               
               {imagesUrl.length==1?imagesUrl.map((value,index)=>{ return <img src={value} style={{marginLeft:'10px'}} width={'50px'} height={'50px'}></img>}):imagesUrl.length==2?imagesUrl.map((value,index)=>{ return <img src={value} width={'30px'} height={'30px'} ></img>}):imagesUrl.map((value1,index1)=>{return <img src={value1} width={'30px'} height={'30px'}></img>})}
        </div>
    )
}

export default ChatUserProfile
