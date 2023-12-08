import React from 'react';
import styles from './NotificationSidebar.module.css'

const NotificationSidebar = () => {
  return (
    <div>
         <div className={styles.notificationSidebar}>
            <div className={styles.heading}>
                <h1>Notification</h1>

            </div>
            <div className={styles.alldata}>
                <ul>
                <li><img src='/profile-picture.svg' width={42} height={42}></img><p>Abhishak assigned you a task of @placing an order</p></li>
                <li><img src='/profile-picture.svg'  width={42} height={42}></img><p>Surbhi Kandwal assigned you a task</p></li>
                <li><img src='/profile-picture.svg'  width={42} height={42}></img><p>You recieved 100 redeemable Points</p></li>
                <li><img src='/profile-picture.svg'  width={42} height={42}></img><p>Amrita Rawat completed a task of making a report</p></li>
                <li><img src='/profile-picture.svg'  width={42} height={42}></img><p>Abhishek Dennis Pawson assigned you a task</p></li>
                <li><img src='/profile-picture.svg'  width={42} height={42}></img><p>You recieved 200 Assignable Points</p></li>
                <li><img src='/profile-picture.svg'  width={42} height={42}></img><p>Abhishak assigned you a task of @placing an order</p></li>
                <li><img src='/profile-picture.svg'  width={42} height={42}></img><p>Surbhi Kandwal assigned you a task</p></li>
                <li><img src='/profile-picture.svg'  width={42} height={42}></img><p>You recieved 100 redeemable Points</p></li>
                <li><img src='/profile-picture.svg'  width={42} height={42}></img><p>Amrita Rawat completed a task of making a report</p></li>
                <li><img src='/profile-picture.svg'  width={42} height={42}></img><p>Abhishek Dennis Pawson sassigned you a task</p></li>

                </ul>
            </div>

         </div>
    </div>
  )
}

export default NotificationSidebar
