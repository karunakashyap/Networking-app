import React, { useState, useEffect } from 'react';
import NotificationHeader from './../Notification/NotificationHeader/NotificationHeader';
import Profile from './Profile/Profile';
import AboutUser from './AboutUser/AboutUser';
import User from './User/User';

const DefaultProfile = () => {
  const [text, setText] = useState('Your Profile')
  const [backgroundColor, setBackgroundColor] = useState('rgba(193, 155, 71, 1)')
  const [color, setColor] = useState('#FFF')
  const [headerwidth, setHeaderwidth] = useState(0)
  const [iconImage, setIconImage] = useState('/edit-icon.svg');
  const [isEditable, setIsEditable] = useState(false);
  const [tagBackground, setTagBackground] = useState('')
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
  const changeName = () => {
    setText('Change Profile')
    setBackgroundColor('white')
    setIconImage('/check-blue-square.svg')
    setIsEditable(true);
    setColor('#000')
    setTagBackground('#D9D9D9')
  }

  return (
    <div>
      <NotificationHeader text={text} headerWidth={headerwidth} />
      <Profile />
      <AboutUser backcolor={backgroundColor} color={color} tagBackground={tagBackground} />
      <User funcClick={changeName} imageUrl={iconImage} edit={isEditable} />
    </div>
  )
}

export default DefaultProfile
