import React from 'react';
import styles from './Point_task.module.css';

const Point_task = () => {
    return (
        <div className={styles.pointTask}>
            <div>
                <div className={styles.point}>
                    <h2>My Personal Points</h2>
                    <p>1000 Points<img src='/dollar-icon2.svg' alt='' width={17} height={17}></img></p>
                    <p >Achieved by tasks</p>
                </div>
                <div className={styles.marblePointImage}>
                    <div className="grid grid-cols-5 w-70">
                        <div className="... "> <img src='/video-icon.svg' alt='' width={36} height={36}></img></div>
                        <div className="... "><img src='/photo-icon.svg' alt='' width={36} height={36}></img></div>
                        <div className="... "><img src='/report-icon.svg' alt='' width={36} height={36}></img></div>
                        <div className="... "><img src='/report-icon.svg' alt='' width={36} height={36}></img></div>
                        <div className="..." style={{ marginTop: '12px', marginLeft: '20px' }}><img src='/forward-icon.svg' alt='' width={12} height={20}></img></div>
                    </div>
                    <div className={styles.allpoints}>
                        <div className="grid grid-cols-5 w-70 point">
                            <div className="...">100<img src='/dollar-icon2.svg' alt='' width={12} height={12}></img></div>
                            <div className="...">100<img src='/dollar-icon2.svg' alt='' width={12} height={12}></img></div>
                            <div className="...">100<img src='/dollar-icon2.svg' alt='' width={12} height={12}></img></div>
                            <div className="...">100<img src='/dollar-icon2.svg' alt='' width={12} height={12}></img></div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Point_task
