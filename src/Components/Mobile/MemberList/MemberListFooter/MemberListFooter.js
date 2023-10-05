import React from 'react';
import styles from './MemberListFooter.module.css'
const MemberListFooter = () => {
    return (
        <div>
            <div className={styles.footer}>
                <div className="grid grid-cols-2 w-40" style={{ float: 'right', paddingTop: '10px', paddingLeft: '40px' }}>
                    <div className="..." style={{width:'50%'}}><img src='/search-icon-white.svg' ></img></div>
                    <div className="..." style={{width:'50%'}}><img src='/filter-icon-white.svg' ></img></div>
                </div>
            </div>
        </div>
    )
}




export default MemberListFooter
