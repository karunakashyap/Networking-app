import React from 'react';
import styles from './Avatar.module.css';
import Image from 'next/image';

const Avatar = () => {
  return (
    <div>
        <div className={styles.avatarData}>
           <Image  src='/circle-placeholder.png' width={130} height={130} alt='profile-imge'></Image>
           <p>Kapil Sharma</p>
           <pre>Bhauwala, Dehradun, India</pre>
           <button>Supply</button><button>supply</button><button>supply</button>
        </div>
    </div>
  )
}

export default Avatar
