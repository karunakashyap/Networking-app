import React from 'react';
import styles from './Approve_task.module.css'
const Approve_task = () => {
  return (
    <div>
      <div style={{ marginLeft: '900px', marginTop: '-156px' }} className={styles.approveTaskData}>
        <h2>Task To Approve</h2>
        <div>
          <ul>
            <li>Shoot a video at ISTB Dehradun</li>
            <li>Take a survey</li>
            <li>Place an order</li>
            <li>Take a video at Dunga Dehradun</li>
            <li>Make a report on availability of hemp seeds</li>
          </ul>
          {/* <p>Shoot a video at ISTB Dehradun</p>
          <p> Take a survey</p>
          <p> Place an order</p>
          <p> Take a video at Dunga Dehradun</p>
          <p> Make a report on availability of hemp seeds</p> */}

        </div>

      </div>
    </div>
  )
}

export default Approve_task
