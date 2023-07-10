import React from 'react';
import styles from './Todo.module.css'


const Todo = () => {
    return (
        <div>

            <div className={styles.allTodoData}>
                <div >
                    <h2>Task To Do</h2>
                    <div>
                        <ul>
                            <li>Shoot a video at sharanpur chowk</li>
                            <li> Take a survey</li>
                            <li> Make a report</li>
                            <li> Take a video</li>
                            <li> Take a photo at Bhauwala Dehradun India</li>
                            <li> Take a photo at Bhauwala Dehradun India</li>
                            <li>Shoot a video at sharanpur chowk</li>
                        </ul>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default Todo
