import React from 'react';
import styles from './Assignable.module.css'

const Assignable = () => {
    return (
        <div className={styles.agginableData}>
            <div>
                <h2>My Assignable Points</h2>
                <div className={styles.assignPoint}>

                    <p style={{ fontWeight: 'bold' }}>1000 Points<img src='/dollar-icon1.svg' alt=''></img></p>
                    <p style={{ color: '#053D38',fontSize:'16px' }}>Assigned by</p>
                </div>
                <div className={styles.assignPointImage}>
                    <div className="grid grid-cols-5 w-72">

                        <div className="... "> <img src='/video-icon-blue.svg' alt=''></img></div>
                        <div className="... "><img src='/photo-icon-blue.svg' alt=''></img></div>
                        <div className="... "><img src='/vector-icon-blue.svg' alt=''></img></div>
                        <div className="... "><img src='/report-icon-blue.svg' alt=''></img></div>
                        <div className="... " style={{ marginTop: '12px',position:'relative',left:'20px' }}><img src='/forwar-icon-blue.svg' alt=''></img></div>
                    </div>

                    <div className={styles.point}>


                        <div className="grid grid-cols-5 w-72">
                            <div className="...">100<img src='/dollar-icon1.svg' alt=''></img></div>
                            <div className="..." style={{marginLeft:'5px'}}>100<img src='/dollar-icon1.svg' alt=''></img></div>
                            <div className="...">100<img src='/dollar-icon1.svg' alt=''></img></div>
                            <div className="..." style={{marginLeft:'5px'}}>100<img src='/dollar-icon1.svg' alt=''></img></div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Assignable
