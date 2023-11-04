import React from 'react';
import styles from './MemberListFooter.module.css'
const MemberListFooter = ({CheckBox,bottom}) => {
    return (
        <div>
            <div className={styles.footer}>
               {CheckBox}
                <div className="grid grid-cols-2 w-40" style={{ float: 'right', paddingLeft: '40px',position:'relative',bottom:bottom }}>
                    <div className="..." style={{width:'50%'}}><img src='/search-icon-white.svg' ></img></div>
                    <div className="..." style={{width:'50%'}}><img src='/filter-icon-white.svg' ></img></div>
                </div>
            </div>
        </div>
    )
}




export default MemberListFooter
