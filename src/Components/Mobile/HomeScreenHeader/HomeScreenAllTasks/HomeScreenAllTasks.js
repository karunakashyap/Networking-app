import React, { use, useState } from 'react';
import styles from './HomeScreenAllTasks.module.css'

const HomeScreenAllTasks = ({ editTask }) => {

    return (
        <div >
            <div className={styles.showTasks}>
                <div className={styles.allTasks}>
                    <ul>
                        <li>All Tasks</li>
                        <li>My Tasks</li>
                        <li onClick={editTask} className={styles.editTask}>Edit Tasks</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default HomeScreenAllTasks
