import React from 'react'
import NotificationHeader from './NotificationHeader/NotificationHeader'
import AllUserNotification from './UserNotification/AllUserNotification'

const NotificationScreen = () => {
  return (
    <div>
        <NotificationHeader text="Notification" />
        <AllUserNotification />
      
    </div>
  )
}

export default NotificationScreen
