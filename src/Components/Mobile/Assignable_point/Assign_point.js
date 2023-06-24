import React from 'react';
import styles from './Assign_point.module.css';

const Assign_point = () => {
    return (
        <div className={styles.agginableData}>
            <div>
                <div className={styles.assignPoint}>
                    <h2>My Assignable Points</h2>
                    <p style={{ fontWeight: 'bold' }}>1000 Points<img src='/dollar-icon2.svg' alt='' width={17} height={17}></img></p>
                    <p style={{ color: '#053D38' }}>Assigned by</p>
                </div>
                <div className={styles.assignPointImage}>
                    <div className="grid grid-cols-5 w-70">
                        <div className="..."> <img src='/circle-placeholder.png' alt='' width={42} height={42}></img></div>
                        <div className="..."><img src='/circle-placeholder.png' alt='' width={42} height={42}></img></div>
                        <div className="..."><img src='/circle-placeholder.png' alt='' width={42} height={42}></img></div>
                        <div className="..."><img src='/circle-placeholder.png' alt='' width={42} height={42}></img></div>
                        <div className="..." style={{ marginTop: '12px',marginLeft:'20px' }}><img src='/forward-icon.svg' alt='' width={12} height={20}></img></div>
                    </div>
                    <div className={styles.allpoints}>
                        <div className="grid grid-cols-5 w-70">
                            <div className="...">Surbhi<br></br>100<img src='/dollar-icon2.svg' alt='' width={12} height={12}></img></div>
                            <div className="...">Surbhi<br></br>100<img src='/dollar-icon2.svg' alt='' width={12} height={12}></img></div>
                            <div className="..." style={{ marginLeft: '4px' }}>Surbhi<br></br>100<img src='/dollar-icon2.svg' alt='' width={12} height={12}></img></div>
                            <div className="..." style={{ marginLeft: '4px' }}>Surbhi<br></br>100<img src='/dollar-icon2.svg' alt='' width={12} height={12}></img></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Assign_point
