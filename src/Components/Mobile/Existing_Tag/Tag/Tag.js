import React, { useState } from 'react';
import styles from './Tag.module.css';
const Tag = (props) => {
    return (
        <li style={{ float: 'left' }} className={styles.taglist} onClick={() => { props.remove(props.i) }}>
            <p className={styles.tag} >{props.text}
                <img style={{ marginLeft: '3px' }} width={25} height={25} src='/cancel Icon.svg'></img>
            </p>
        </li>

    )
}
export default Tag
