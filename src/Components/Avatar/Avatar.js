import React from 'react';
import styles from './Avatar.module.css';
import Image from 'next/image';
import Globalstyle from '../../app/Globalstyle';


const Avatar = () => {
  return (
    <div>
      <Globalstyle></Globalstyle>
      <div className={styles.avatarData}>
        <Image src='/Ellipse 1.svg' width={0} height={0} alt='profile-imge' style={{height:'100px',width:'100px'}}></Image>
        <h2>KapilSharma</h2>
        <pre>I'm a Graphic Designer and Video Editor with work Experience of 5 years<br></br> with a strong work ethic and creative work ability.</pre>
        <div className={styles.allButton}>
          <button>Management</button><button>Supply</button><button>Tech</button><button>Graphic Era</button><button>Design</button>
          <span>Bhauwala, Dehradun, India </span>
        </div>
      </div>
    </div>
  )
}

export default Avatar
