import React from 'react';
import styles from './AssignTaskMember.module.css'

const AssignTaskMember = () => {
  const taskMemberName =['karuna kashyap','Rohan Gupta','Shubham','Deeksha Kumari','Rishika Chauhan','Aman Singh']
  return (
    <div>
      {taskMemberName.map((name,index)=>(

       <div className={styles.profileContent} key={index}>
                     <img src='/search-profile-picture.svg'></img>
                     <div className={styles.profileData}>
                      <div className={styles.taskMemberName}>
                      <h1>{name}</h1>
                      <p>Selaqui</p>

                      </div>
                         <div className={styles.supplyButton}>
                             <button>Supply</button>
                             <button>Supply</button>
                             <button>Supply</button>
                             <img src='/square-check-box.svg' className={styles.squareCheckBox}></img>
                         </div>
                     </div>
                 </div>
                 ))}
    </div>
  )
}

export default AssignTaskMember
