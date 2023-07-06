import React from 'react';
import styles from './UserNotifi.module.css';
import Globalstyle from '../../../../app/Globalstyle'

const UserNotifi = () => {
    return (
        <div>
            <Globalstyle />
            <div className={styles.allNotification}>
                <ul>
                    <div className={styles.userNotification}>
                        <li>
                            <div className="grid grid-cols-2 gap-1 w-36">
                                <div className="..."><img src='/Ellipse 2.svg' width={42} height={42}></img></div>
                                <div className="..."><h1>Abhishek assigned you a task of @placing an order</h1></div>
                            </div>
                        </li>
                        <li>
                            <div className="grid grid-cols-2 gap-1 w-36">
                                <div className="..."><img src='/Ellipse 2.svg' width={42} height={42}></img></div>
                                <div className="..."><h1>Surbhi Kandwal assigned you a task</h1></div>
                            </div>
                        </li><li>
                            <div className="grid grid-cols-2 gap-1 w-36">
                                <div className="..."><img src='/Ellipse 2.svg' width={42} height={42}></img></div>
                                <div className="..."><h1>You received 100 redeemable Points</h1></div>
                            </div>
                        </li><li>
                            <div className="grid grid-cols-2 gap-1 w-36">
                                <div className="..."><img src='/Ellipse 2.svg' width={42} height={42}></img></div>
                                <div className="..."><h1>Amrita Rawat completed a task of making a report</h1></div>
                            </div>
                        </li><li>
                            <div className="grid grid-cols-2 gap-1 w-36">
                                <div className="..."><img src='/Ellipse 2.svg' width={42} height={42}></img></div>
                                <div className="..."><h1>Surbhi Kandwal assigned you a task</h1></div>
                            </div>
                        </li><li>
                            <div className="grid grid-cols-2 gap-1 w-36">
                                <div className="..."><img src='/Ellipse 2.svg' width={42} height={42}></img></div>
                                <div className="..."><h1>Abhishek Dennis pawson assigend you a task</h1></div>
                            </div>
                        </li><li>
                            <div className="grid grid-cols-2 gap-1 w-36">
                                <div className="..."><img src='/Ellipse 2.svg' width={42} height={42}></img></div>
                                <div className="..."><h1>You received 200 Assignable Points</h1></div>
                            </div>
                        </li>
                    </div>
                </ul>



            </div>

        </div>
    )
}

export default UserNotifi
