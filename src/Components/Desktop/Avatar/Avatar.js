import React from 'react';
import styles from './Avatar.module.css';
import Globalstyle from "../../../app/Globalstyle";
import TagHome from '../Tags/TagHome';


const Avatar = () => {

  return (
    <div>
      <Globalstyle></Globalstyle>
      <div className={styles.avatarData}>
        <div className={styles.avatarDataImg}>
          <img src='/Ellipse 1.svg' alt='profile-imge' ></img>
        </div>
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
