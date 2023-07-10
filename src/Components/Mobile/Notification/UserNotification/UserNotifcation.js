import React from 'react';
import styles from './UserNotification.module.css';
import Globalstyle from '../../../../app/Globalstyle'
import Avatar from '../../Avatar/Avatar';


const UserNotification = (props) => {
    return (
        <div>
            <Globalstyle />
            <div className={styles.allNotification}>
                <ul>
                    <div className={styles.userNotification}>
                        <li>
                            <div className="grid grid-cols-2 gap-1 w-36">
                                <div className="..."><Avatar /></div>
                                <div className="..."><h1>{props.text}</h1></div>
                            </div>
                        </li>
                    </div>
                </ul>
            </div>

        </div>
    )
}

export default UserNotification;
