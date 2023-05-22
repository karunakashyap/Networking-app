import React from 'react';
import styles from './Todo.module.css'
import Globalstyle from '../../app/Globalstyle';


const Todo = () => {
    return (
        <div>

            <Globalstyle></Globalstyle>
            <div style={{ marginTop: '240px', marginLeft: '500px' }} className={styles.allTodoData}>
                <h2>Task To Do</h2>
                <div>
                    <ul>
                        <li>Shoot a video at sharanpur chowk</li>
                        <li> Take a survey</li>
                        <li> Make a report</li>
                        <li> Take a video</li>
                        <li> Take a photo at Bhauwala Dehradun</li>
                    </ul>
                </div>

            </div>



        </div>
    )
}

export default Todo
