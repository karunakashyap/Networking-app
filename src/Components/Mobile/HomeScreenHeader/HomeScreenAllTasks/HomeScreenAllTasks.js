import React, { useState } from 'react';
import styles from './HomeScreenAllTasks.module.css'

const HomeScreenAllTasks = () => {
    const [editTaskcolor,setEditTaskColor] = useState('')
    const editTask=()=>{
        setEditTaskColor('#2B8CA7')
    }
    return (
        <div >
            <div className={styles.showTasks}>
                <div className={styles.allTasks}>
                    <ul>
                        <li>All Tasks</li>
                        <li>My Tasks</li>
                        <li onClick={editTask} style={{color:editTaskcolor}}>Edit Tasks</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default HomeScreenAllTasks
