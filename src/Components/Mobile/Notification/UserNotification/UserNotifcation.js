import React from 'react';
import styles from './UserNotification.module.css';


const UserNotification = (props) => {
    console.log(props)



    return (
        <div>
            <div className={styles.allNotification} style={{ position: 'relative', top: '40px' }}>
                <ul>
                    <div className={styles.UserNotification}>
                        <li>
                            <div style={{ width: '100%', margin: '0px', padding: '10px' }}>
                                <div className="grid grid-cols-2 gap-1 w-36">
                                    <div className="..."><img src={props.profile} ></img></div>
                                    <div className="..."><h1>{props.message}</h1></div>
                                </div>
                            </div>
                        </li>

                    </div>
                </ul>
            </div>
        </div>

    )
}

export default UserNotification;
