import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NotificationHeader from './NotificationHeader/NotificationHeader';
import AllUserNotification from './UserNotification/AllUserNotification';

const NotifiScreen = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <NotificationHeader />
      <AllUserNotification />

    </div>
  )
}

export default NotifiScreen;
