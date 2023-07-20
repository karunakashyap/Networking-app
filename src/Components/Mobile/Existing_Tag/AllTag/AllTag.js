import React from 'react'
import Tag from '../Tag/Tag';
import styles from './AllTag.module.css'
import CancelIcon from '../../../Icon/CancelIcon';

const AllTag = () => {
  return (
    <div>
      <div className={styles.heading}>
        <h1>Select Tag</h1>
      </div>
       <Tag/>

    </div>
    
       
        
        
      
   
  )
}

export default AllTag
