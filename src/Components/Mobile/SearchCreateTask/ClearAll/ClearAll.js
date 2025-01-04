import React from 'react';
import styles from './ClearAll.module.css'

const ClearAll = ({bgcolor,onclickMethod}) => {
  return (
    <div>
        <div className={styles.clearAllButton} style={{backgroundColor:bgcolor}} onClick={onclickMethod}>
            <button>Clear All</button>
        </div>
    </div>
  )
}

export default ClearAll
