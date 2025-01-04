import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div>
       <div className={styles.footer}>
                <div className="grid grid-cols-2 w-40" style={{ float: 'right', paddingLeft: '40px',position:'relative',bottom:'-10px' }}>
                    <div className="..." style={{width:'50%'}}><img src='/search-icon-white.svg' ></img></div>
                    <div className="..." style={{width:'50%'}}><img src='/filter-icon-white.svg' ></img></div>
                </div>
            </div>
      
    </div>
  )
}

export default Footer
