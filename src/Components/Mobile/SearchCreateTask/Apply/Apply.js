import React from 'react';
import styles from './Apply.module.css'

const Apply = ({ bgcolor,onclickMethodApply}) => {
  return (
    <div>
       <div className={styles.applyButton} style={{backgroundColor:bgcolor}} onClick={onclickMethodApply}> 
        <button>Apply</button>
       </div>
    </div>
  )
}

export default Apply
