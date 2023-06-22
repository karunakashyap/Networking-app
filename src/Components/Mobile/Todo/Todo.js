import React from 'react';
import styles from './Todo.module.css';
import Viewall from '../ViewAllbtn/Viewall';

const Todo = () => {
  return (
    <>
      <div className={styles.allTodoData}>
        <div >
          <h2>Task To Do</h2>
          <ul>
            <li>Shoot a video at sharanpur chowk</li>
            <li> Take a survey</li>
            <li> Make a report</li>
          </ul>
        </div>
      </div>
      <div className={styles.todoviewbtn}>
        <Viewall />
      </div>
    </>
  )
}

export default Todo
