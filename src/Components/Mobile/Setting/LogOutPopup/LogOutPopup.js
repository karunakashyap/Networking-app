import React, { useState } from 'react';
import styles from './LogOutPopup.module.css';
import LogoutLoader from '../LogoutLoader/LogoutLoader';

const LogOutPopup = ({cancelButton,logoutLoader}) => {
    const [loader,setLoader]=useState(false)
    const logoutloader=()=>{
     setLoader(true)
    }
  return (
    <div>
        <div className={styles.popup}>
        <div className={styles.logout}>
              {loader?(<LogoutLoader/>):(
                <div>
              <h1>Are you sure you want to log out</h1>
              <div className={styles.button}>
              <button className={styles.cancelButton} onClick={cancelButton}>Cancel</button>
              <button className={styles.logoutButton} onClick={logoutloader}>Log out</button>
              </div>
              </div>
)}
            </div>
        </div>
        
      
    </div>
  )
}

export default LogOutPopup
