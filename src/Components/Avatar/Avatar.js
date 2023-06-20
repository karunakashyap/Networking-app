import React from 'react';
import styles from './Avatar.module.css';
import Image from 'next/image';
import Globalstyle from '../../app/Globalstyle';
import Tag from '../Tags/Tag';
import TagHome from '../Tags/TagHome';


const Avatar = () => {
  
  return (
    <div>
      <Globalstyle></Globalstyle>
      <div className={styles.avatarData}>
        <Image src='/Ellipse 1.svg' width={0} height={0} alt='profile-imge' style={{ height: '100px', width: '100px' }}></Image>
        <h2>Kapil Sharma</h2>
        <pre>I'm a Graphic Designer and Video Editor with work Experience of 5 years<br></br>with a strong work ethic and creative work ability.</pre>
        <div className={styles.allButton}>
          <span>Bhauwala, Dehradun, India </span> 
          <div className={styles.allSlider}>
          <TagHome />
          </div>

          
          
        </div>
      </div>
    </div>
  )
}

export default Avatar
