import React from 'react';
import styles from './Approve.module.css';
import Viewall from '../ViewAllbtn/Viewall';
const Approve = () => {
    return (
        <>
        <div className={styles.approveTaskData}>
            <div >
                <h2>Task To Approve</h2>
                <ul>
                    <li>Shoot a video at ISTB Dehradun</li>
                    <li>Take a survey</li>
                    <li>Place an order</li>
                </ul>
            </div>
        </div>
        <div className={styles.approveviewbtn}>
            <Viewall />

        </div>
        </>
    )
}

export default Approve
