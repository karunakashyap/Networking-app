import React, { useState, useEffect } from 'react'
import NotificationHeader from './NotificationHeader/NotificationHeader'
import AllUserNotification from './UserNotification/AllUserNotification'
const NotificationScreen = () => {
  const [headerwidth, setHeaderwidth] = useState(0)
  useEffect(() => {
    const getMobilewidth = () => {
      const screenWidth = window.innerWidth - 40;
      setHeaderwidth(screenWidth)
    }
    window.addEventListener('resize', getMobilewidth);
    getMobilewidth();
    return () => {
      window.addEventListener('resize', getMobilewidth)
    }
  }, []);
  return (
    <div>
      <NotificationHeader text="Notification" headerWidth={headerwidth} />
      <AllUserNotification />
    </div>
  )
}

export default NotificationScreen
