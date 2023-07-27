import React, { useState, useEffect } from 'react';
import MobileNotificationScreen from '../Components/Mobile/Notification/NotificationScreen';
import DesktopNotificationScreen from '../Components/Desktop/NotificationScreen/NotificationScreen';
import GlobalStyles from '../app/Globalstyle';

const Notification = () => {
  const [isDesktop, setIsDesktop] = useState();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 940);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
      <GlobalStyles />
      {isDesktop ? (
        <DesktopNotificationScreen />
      ) : (
        <MobileNotificationScreen />
      )}
    </div>
  );
}

export default Notification
