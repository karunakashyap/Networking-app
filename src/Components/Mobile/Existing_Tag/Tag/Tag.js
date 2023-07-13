import React from 'react';
import styles from './Tag.module.css';
import CancelIcon from '../../../Icon/CancelIcon';

const Tag = (props) => {
    return (
        <div>
              

                <div className={styles.tagContent}>

                    
                        <p>{props.text}</p>
                        <div className={styles.cancelIcon}>
                            <CancelIcon />
                        </div>
                    
                </div>
               
            </div>
       
    )
}

export default Tag
