import React from 'react';
import styles from './NotificationHeader.module.css';
const NotificationHeader = (props) => {
    return (
        <div>
            <div className={styles.notifiHeader}>
                <div className={styles.notifiContent}> 
                <div className="grid grid-cols-2 w-32">
                    <div className="..."><img src='/back arrow icon.svg' alt='' width={30} height={30}></img> </div>
                    <div className="..."><h1>{props.text}</h1></div>
                </div>
                </div>

            </div>

        </div>
    )
}

export default NotificationHeader;
