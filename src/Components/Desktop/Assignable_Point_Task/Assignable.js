import React from 'react';
import styles from './Assignable.module.css'

const Assignable = () => {
    return (
        <div className={styles.agginableData}>
            <div>
                <h2>My Assignable Points</h2>
                <div className={styles.assignPoint}>

                    <p style={{ fontWeight: 'bold' }}>1000 Points<img src='/dollar-icon2.svg' alt='' width={10} height={10}></img></p>
                    <p style={{ color: '#053D38' }}>Assigned by</p>
                </div>
                <div className={styles.assignPointImage}>
                    <div className="grid grid-cols-5 w-72">

                        <div className="... "> <img src='/video-icon.svg' alt='' width={18} height={18}></img></div>
                        <div className="... "><img src='/photo-icon.svg' alt='' width={18} height={18}></img></div>
                        <div className="... "><img src='/report-icon.svg' alt='' width={18} height={18}></img></div>
                        <div className="... "><img src='/report-icon.svg' alt='' width={18} height={18}></img></div>
                        <div className="... " style={{ marginTop: '12px' }}><img src='/forward-icon.svg' alt='' width={10} height={10}></img></div>
                    </div>

                    <div className={styles.point}>


                        <div className="grid grid-cols-5 w-72">
                            <div className="...">100<img src='/dollar-icon2.svg' alt='' width={10} height={10}></img></div>
                            <div className="...">100<img src='/dollar-icon2.svg' alt='' width={10} height={10}></img></div>
                            <div className="...">100<img src='/dollar-icon2.svg' alt='' width={10} height={10}></img></div>
                            <div className="...">100<img src='/dollar-icon2.svg' alt='' width={10} height={10}></img></div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Assignable
