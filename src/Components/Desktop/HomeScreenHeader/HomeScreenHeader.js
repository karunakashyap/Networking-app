import React from 'react';
import styles from './HomeScreenHeader.module.css';
import TagHome from '../Tags/TagHome';
import Avatar from '../../Common/Avatar/Avatar';
const HomeScreenHeader = () => {

  return (
    <div>
      <div className={styles.avatarData}>
        <div className={styles.avatarDataImg}>
          <Avatar />
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

export default HomeScreenHeader;
