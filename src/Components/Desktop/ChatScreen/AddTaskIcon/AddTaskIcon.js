import React from 'react';
import styles from './AddTaskIcon.module.css'
const AddTaskIcon = ({chatScreenPopup}) => {
  return (
    <div>
        <div className={styles.addTaskIcon} onClick={chatScreenPopup}>
            <img src='/task-round.svg'></img>
        </div>
    </div>
  )
}

export default AddTaskIcon
