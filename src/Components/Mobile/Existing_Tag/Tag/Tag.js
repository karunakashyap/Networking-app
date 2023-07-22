import React from 'react';
import styles from './Tag.module.css';
const Tag = (props) => {
    return (
        <div>
            <div className={styles.tagContent} style={{ width: '470px', margin: '15px' }}>
                {props.text.map((items, key) => {
                    return (
                        <ul className={styles.tags} style={{ display: 'inline-block' }} key={key}>
                            <li style={{ float: 'left' }}><p className={styles.tag} >{items}<img style={{marginLeft:'3px'}} width={25} height={25} src='/cancel Icon.svg'></img></p></li>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}
export default Tag
