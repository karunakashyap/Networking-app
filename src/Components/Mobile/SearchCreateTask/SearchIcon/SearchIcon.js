import React from 'react';
import styles from './SearchIcon.module.css'

const SearchIcon = ({showMembers,showTasks ,showGivenTag,showSearchProfile,filterIconUrl,membersIconUrl,chatsIcon, tasksIcon}) => {
    return (
        <div>
            <div className={styles.demo}>
                <div onClick={showGivenTag}><img src={filterIconUrl}></img></div>
                <div onClick={showSearchProfile}><img src={membersIconUrl}></img></div>
                <div onClick={showMembers}> <img src={chatsIcon}></img></div>
                <div  onClick={showTasks}><img src={tasksIcon}></img></div>
            </div>
            <div className={styles.iconNames}>
                <p>Filters</p>
                <p>Members</p>
                <p>Chats</p>
                <p style={{ marginRight: '10px' }}>Tasks</p>
            </div>
        </div>
    )
}

export default SearchIcon
