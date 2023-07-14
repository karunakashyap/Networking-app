import React from 'react'
import UserNotification from './UserNotifcation'
const AllUserNotification = () => {
    const result = {
        "error": 0,
        "response": {
            "data": [
                {
                    "notificationId": 1,
                    "userId": 2,
                    "username": "surbhi",
                    "profilePic": "https://placehold.co/400x400",
                    "fullName": "Surbhi Kumar",
                    "notificationMessage": "Task assigned to you"
                },
                {
                    "notificationId": 2,
                    "userId": 5,
                    "username": "surbhi",
                    "profilePic": "https://placehold.co/400x400",
                    "fullName": "Surbhi Kumar",
                    "notificationMessage": "Task assigned to you"
                },
                {
                    "notificationId": 3,
                    "userId": 2,
                    "username": "surbhi",
                    "profilePic": "https://placehold.co/400x400",
                    "fullName": "Surbhi Kumar",
                    "notificationMessage": "Task assigned to you"
                },
                {
                    "notificationId": 4,
                    "userId": 2,
                    "username": "surbhi",
                    "profilePic": "https://placehold.co/400x400",
                    "fullName": "Surbhi Kumar",
                    "notificationMessage": "Task assigned to you"
                }
            ]
        }
    }
    return (
        <div>
            
           {result.response.data.map((value)=>{
            return(
                <div>
                    <UserNotification  profile={value.profilePic} message={value.notificationMessage}/>
                </div>
            )

           })}
        </div>
    )
}

export default AllUserNotification;
