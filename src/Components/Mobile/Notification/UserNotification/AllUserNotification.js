import React from 'react'
import UserNotification from './UserNotifcation'
const AllUserNotification = () => {
    return (
        <div>

            <UserNotification text="Abhishek assigned you a task of @placing an order" />
            <UserNotification text="Surbhi Kandwal assigned you a task" />
            <UserNotification text="You received 100 redeemable Points" />
            <UserNotification text="Amrita Rawat completed a task of making a report" />
            <UserNotification text="Surbhi Kandwal assigned you a task" />
            <UserNotification text="Abhishek Dennis pawson assigend you a task" />
            <UserNotification text="You received 200 Assignable Points" />
        </div>
    )
}

export default AllUserNotification;
