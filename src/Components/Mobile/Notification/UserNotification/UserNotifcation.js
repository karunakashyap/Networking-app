import React from 'react';
import styles from './UserNotification.module.css';
const UserNotification = (props) => {
    return (
        <div>
            <div className={styles.allNotification} style={{ position: 'relative', top: '30px' }}>
                <ul>
                    <div className={styles.UserNotification}>
                        <li>
                            <div style={{ width: '100%', margin: '0px', padding: '10px', display: 'flex' }}>
                                <img src={props.profile} width={42} height={42}></img>
                                <h1>{props.message}</h1>
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
        </div>

    )
}

export default UserNotification;
