import React, { useEffect, useState } from 'react'
import SettingHeader from './SettingHeader/SettingHeader'
import SettingIcon from './SettingIcon/SettingIcon'
import LogOutPopup from './LogOutPopup/LogOutPopup';
import LogoutLoader from './LogoutLoader/LogoutLoader';

const SettingScreen = () => {
  const [headerwidth, setHeaderwidth] = useState(0);
  const [logoutColor, setLogoutColor] = useState('#2B8CA7');
  const [logoutImage, setLogoutImage] = useState('/logout-blue.svg');
  const [background, setBackground] = useState('')
  const [opacity, setOpacity] = useState('1')
  const [popScreen, setPopScreen] = useState(false)
  const showLogoutPopup = () => {
    setLogoutColor('#C19B47')
    setLogoutImage('/logout-yellow-icon.svg')
    setOpacity('0.1')
    setPopScreen(true)
    setBackground('rgba(76, 175, 80, 0.1)')
  }
  const cancelButton = () => {
    setOpacity('1')
    setPopScreen(false)
    setBackground('')
    setLogoutColor('#2B8CA7')
    setLogoutImage('/logout-blue.svg')
  }

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
      {popScreen && <LogOutPopup cancelButton={cancelButton} />}

      <div style={{ opacity: opacity, backgroundColor: background }}>
        <SettingHeader headerWidth={headerwidth} text="Setting" />
        <SettingIcon logoutColor={logoutColor} logoutImage={logoutImage} showLogoutPopup={showLogoutPopup} />
      </div>
    </div>

  )
}

export default SettingScreen
