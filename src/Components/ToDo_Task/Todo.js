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
                    <p>Shoot a video at sharanpur chowk</p>
                    <p> Take a survey</p>
                    <p> Make a report</p>
                    <p> Take a video</p>
                    <p> Take a photo at Bhauwala Dehradun</p>

                </div>

            </div>



        </div>
    )
}

export default Todo
