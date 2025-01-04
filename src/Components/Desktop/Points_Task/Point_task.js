import React from 'react';
import styles from './Point_Task.module.css';
const Point_task = () => {
    return (
        <div className={styles.pointTask}>
            <div>
                <h2>My Points</h2>
                <div className={styles.point}>

                    <p style={{ fontWeight: 'bold',marginTop:'6px' }}>1000 Points<img src='/dollar-icon1.svg' alt='' style={{marginTop:'-20px',marginLeft:'92px'}}></img></p>
                    <p style={{ color: '#053D38',marginTop:'5px' }}>Assigned by</p>
                </div>
                <div className={styles.marblePointImage}>
                    <div className="grid grid-cols-5 w-72">
                        <div className="..."> <img src='/circle-placeholder.png' alt='' width={36} height={36}></img><div className={styles.allpoints}><p>Surbhi</p><div className={styles.point}>100<img src='/dollar-icon1.svg' alt=''></img></div></div></div>
                        <div className="..."><img src='/circle-placeholder.png' alt='' width={36} height={36}></img><div className={styles.allpoints}><p>Surbhi</p><div className={styles.point}>100<img src='/dollar-icon1.svg' alt=''></img></div></div></div>
                        <div className="..."><img src='/circle-placeholder.png' alt='' width={36} height={36}></img><div className={styles.allpoints}><p>Surbhi</p><div className={styles.point}>100<img src='/dollar-icon1.svg' alt=''></img></div></div></div>
                        <div className="..."><img src='/circle-placeholder.png' alt='' width={36} height={36}></img><div className={styles.allpoints}><p>Surbhi</p><div className={styles.point}>100<img src='/dollar-icon1.svg' alt=''></img></div></div></div>
                        <div className="..." style={{ marginTop: '12px',position:'relative',left:'20px' }}><img src='/forwar-icon-blue.svg' alt=''></img></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Point_task
