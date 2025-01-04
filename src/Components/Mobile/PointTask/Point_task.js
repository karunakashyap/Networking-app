import React from 'react';
import styles from './Point_task.module.css';

const Point_task = () => {
    return (
        <div className={styles.pointTask}>
            <div>
                <div className={styles.point}>
                    <h2>My Personal Points</h2>
                    <p>1000 Points<img src='/dollar-icon1.svg' alt='' width={17} height={17}></img></p>
                    <p >Achieved by tasks</p>
                </div>
                <div className={styles.marblePointImage}>
                    <div className="grid grid-cols-5 w-70">
                        <div className="... "> <img src='/video-icon-blue.svg' alt='' width={36} height={36}></img></div>
                        <div className="... "><img src='/Photo-icon-blue.svg' alt='' width={36} height={36}></img></div>
                        <div className="... "><img src='/vector-icon-blue.svg' alt='' width={36} height={36}></img></div>
                        <div className="... "><img src='/Report-icon-blue.svg' alt='' width={36} height={36}></img></div>
                        <div className="..." style={{ marginTop: '12px', marginLeft: '20px' }}><img src='/forwar-icon-blue.svg' alt=''></img></div>
                    </div>
                    <div className={styles.allpoints}>
                        <div className="grid grid-cols-5 w-70 point">
                            <div className="...">100<img src='/dollar-icon1.svg' alt='' width={12} height={12}></img></div>
                            <div className="...">100<img src='/dollar-icon1.svg' alt='' width={12} height={12}></img></div>
                            <div className="...">100<img src='/dollar-icon1.svg' alt='' width={12} height={12}></img></div>
                            <div className="...">100<img src='/dollar-icon1.svg' alt='' width={12} height={12}></img></div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Point_task
