import React, { useState, useEffect } from 'react';
import NotificationHeader from './../Notification/NotificationHeader/NotificationHeader';
import Profile from './Profile/Profile';
import AboutUser from './AboutUser/AboutUser';
import User from './User/User';
import LabelScreen from '../LabelScreen/LabelScreen';
import EditIcon from './EditIcon/EditIcon';

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
    setIconImage('/square-check-box.svg')
    setIsEditable(true);
    setColor('#000')
    setTagBackground('#D9D9D9')
  }
  const [showLabelScreen, setshowLabelScreen] = useState(false);

  const handleDivClick = () => {
    setshowLabelScreen(true);
  };
  return (
    <div>
      {showLabelScreen ? (
          <LabelScreen/>
      ) : (
        <div>

          <NotificationHeader text={text} headerWidth={headerwidth} />
          <Profile />
          <AboutUser backcolor={backgroundColor} color={color} tagBackground={tagBackground} onDivClick={handleDivClick} />
          <User edit={isEditable} />
          <EditIcon   funcClick={changeName} imageUrl={iconImage}/>
        </div>
      )}
    </div>
  )
}

export default DefaultProfile
