import React, { useState } from 'react';
import styles from './HomeScreenHeader.module.css';
import TagHome from '../Tags/TagHome';
import Avatar from '../../Common/Avatar/Avatar';
const HomeScreenHeader = ({headerWidth,homeHeaderData}) => {
  const [userDataBorder, setUserDataBorder] = useState('');
  const [editIcon, setEditIcon] = useState(false);
  const [cameraIcon, setCameraIcon] = useState(false);
  const [editableValue, setEditableValue] = useState('I m a Graphic Designer and Video Editor with work Experience of 5 years with a strong work ethic and creative work ability.');
  const [inputValue, setInputValue] = useState(false);
  const [locationValue, setLocationValue] = useState('Bhauwala, Dehradun, India ');
  const [margin, setMargin] = useState('');
  const [selectedImage, setSelectedImage] = useState('https://placehold.co/300x300');
  const [cancelIcon, setCancelIcon] = useState(false);
  const [tagLeft, setTagLeft] = useState('610px')

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const editable = () => {
    setInputValue(true)
    setMargin('-20px')
    setCameraIcon(true)
  }
  const editProfile = () => {
    setUserDataBorder('1px solid white');
    setEditIcon(true)
    setCameraIcon(true);
    setCancelIcon(true)
    setTagLeft('650px')


  }
  const notShow = () => {
    setUserDataBorder('');
    setEditIcon(false)
    setCameraIcon(false);
    setCancelIcon(false);
    setTagLeft('610px')
  }
  return (
    <div>
      <div className={styles.avatarData} onMouseOver={editProfile} onMouseOut={notShow} style={{width: headerWidth}}>
        <div className={styles.avatarDataImg}>
          <Avatar selectedImage={selectedImage} />
         {cameraIcon && <div className={styles.cameraImage}>
            <img src='/blue-camera-icon.svg' width={30} height={30}></img>
            <input type='file' onChange={handleImageChange} accept="image/*"></input></div>}
        </div>
        <div className={styles.userData} >
          <div><h2>Kapil Sharma</h2></div>

         {homeHeaderData && <div style={{ padding: '5px', width: '635px', border: userDataBorder }}>
            <h1>
              {inputValue ? <textarea style={{ width: '620px', background: 'rgba(43, 140, 167, 1)', color: 'white', border: 'none', outline: 'none' }}

                value={editableValue}
                onChange={(e) => setEditableValue(e.target.value)}
              /> : <>{editableValue}</>}</h1>
            <p>{inputValue ? <textarea onChange={(e) => setLocationValue(e.target.value)} style={{ marginTop: margin, width: '620px', height: '24px', background: 'rgba(43, 140, 167, 1)', color: 'white', border: 'none', outline: 'none', }} value={locationValue}></textarea> : <>{locationValue}</>}</p>
          </div>}
          {editIcon &&
            <img src='/edit-icon-white.svg' width={38} height={38} onClick={editable}></img>
          }
        </div>

      </div>
     {homeHeaderData && <div style={{ position: 'relative', left: '810px', top: '165px', width: '700px' }} onMouseOver={editProfile} >
        <TagHome cancelIcon={cancelIcon} />
      </div>}
    </div>
  )
}

export default HomeScreenHeader;
