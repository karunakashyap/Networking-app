import React, { useEffect, useState } from 'react';
import styles from './CredentialData.module.css';
const CredentialData = ({ showOverlay, code }) => {
    console.log(code)
    const [defaultCode, SetDefaultCode] = useState(code)
    
        
    
    return(
        <div>
            <div className={styles.allCredentialData}>
                <div className={styles.allinputField}>
                    <div className={styles.userData}>
                        <h1>Full Name</h1>
                        <div><input type='text'></input></div>
                    </div>
                    <div className={styles.mobile}>
                        <h1>Mobile Number</h1>
                        <div className={styles.mobileData}>
                            <p >{code}</p>
                            <div >
                           <img src='/dropdown-arrow.svg' onClick={showOverlay}></img>
                           </div>
                            <input type='number'></input>
                            
                        </div>
                    </div>
                    <div className={styles.userData}>
                        <h1>Date of Birth</h1>
                        <div><input type='date'></input></div>
                    </div>
                    <div className={styles.userData}>
                        <h1>Location</h1>
                        <div><input type='text'></input></div>
                    </div>
                </div>
                {/* <div className={styles.mobileNumber}>
                    <h1>Mobile Number</h1>
                    <div className={styles.mobileData}>
                        <div>
                            <p>{defaultCode}</p>
                           <img src='/dropdown-arrow.svg' onClick={showOverlay}></img>

                        </div>
                        <input type="number" maxLength={10}
                           ></input>
                    </div>
                </div> */}
                {/* <div className={styles.birthDate}>
                    <h1>Date of Birth</h1>
                    <div >
                        <input type="date" />

                    </div>
                </div> */}
                {/* <div className={styles.location}>
                    <h1>Location</h1>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter a location"
                        />

                    </div>
                </div> */}
            </div>



            {/* /////////////////////////////////////////////////// */}



        </div>
    )
}

export default CredentialData
