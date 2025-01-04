import React from 'react';
import styles from './Approve_task.module.css'
const Approve_task = () => {
  return (
    <div className={styles.approveTaskData}>
      <div >
        <h2>Task To Approve</h2>
        <div className={styles.allApproveTask}>
          <ul>
            <li>Shoot a video at ISTB Dehradun</li>
            <li>Take a survey</li>
            <li>Place an order</li>
            <li>Take a video at Dunga Dehradun</li>
            <li>Make a report on availability of hemp seeds</li>
            <li>Shoot a video at ISTB Dehradun</li>
            <li>Make a report on availability of hemp seeds</li>
            <li>Shoot a video at ISTB Dehradun</li>

          </ul>

        </div>

      </div>
    </div>
  )
}

export default Approve_task
