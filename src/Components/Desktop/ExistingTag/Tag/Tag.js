import React from 'react';
import styles from './Tag.module.css'
const Tag = (props) => {
  return (
    <div>
      <li style={{ float: 'left' }} className={styles.taglist} onClick={() => { props.remove(props.i) }}>
            <p className={styles.tag} ><span style={{marginLeft:'3px',float:'left'}}>{props.text}</span>
                <img  width={25} height={25} src='/cancel Icon.svg' style={{
                  marginLeft:'3px'
                }}></img>
            </p>
        </li>
    </div>
  )
}

export default Tag
