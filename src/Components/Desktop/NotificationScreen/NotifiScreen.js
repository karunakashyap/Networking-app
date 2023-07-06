import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NotifiHeader from './NotificationHeader/NotifiHeader';
import UserNotifi from './UserNotification/UserNotifi';

const NotifiScreen = () => {
  return (
    <div>
        <Sidebar></Sidebar>
        <NotifiHeader />
        <UserNotifi />
      
    </div>
  )
}

export default NotifiScreen;
