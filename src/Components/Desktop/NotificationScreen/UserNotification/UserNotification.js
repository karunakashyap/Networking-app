import React from 'react';
import styles from './UserNotification.module.css';
import GlobalStyles from '../../../../app/Globalstyle';
import Avatar from '../../../Common/Avatar/Avatar';

const UserNotification = (props) => {
    return (
        <div>
            <GlobalStyles />
            <div >
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

        
                    {/* <li>
                        <div className="grid grid-cols-2">
                            <div className="..."><img src='/Ellipse 2.svg' width={75} height={75}></img></div>
                            <div className="..."><h1>You received 100 redeemable Points</h1></div>
                        </div> 
                    </li>                
                    <li>
                        <div className="grid grid-cols-2">
                            <div className="..."><img src='/Ellipse 2.svg' width={75} height={75}></img></div>
                            <div className="..."><h1>Mayank assigned you a task of placing an order</h1></div>
                        </div> 
                    </li>                    <li>
                        <div className="grid grid-cols-2">
                            <div className="..."><img src='/Ellipse 2.svg' width={75} height={75}></img></div>
                            <div className="..."><h1>Amrita Rawat completed a task of making a report</h1></div>
                        </div> 
                    </li>                
                    <li>
                        <div className="grid grid-cols-2">
                            <div className="..."><img src='/Ellipse 2.svg' width={75} height={75}></img></div>
                            <div className="..."><h1>Abhishek Dennis Pawson assigned you a task</h1></div>
                        </div> 
                    </li>                 */}
                    
            </div>

    )
}

export default UserNotification;
