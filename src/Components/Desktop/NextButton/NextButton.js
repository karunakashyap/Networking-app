import React from 'react';
import styles from './NextButton.module.css'

const NextButton = () => {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
       <div className={styles.nextbutton}>
        <button>Next</button> 

       </div>
    </div>
  )
}

export default NextButton
