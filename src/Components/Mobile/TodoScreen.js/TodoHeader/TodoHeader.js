import React, { useState } from 'react';
import styles from './TodoHeader.module.css'

const TodoHeader = () => {
    const [underlineMargin, setUnderlineMargin] = useState('35px');
    const [underlineWidth, setUnderLineWidth] = useState('61px')
    const [borderBottomTodo,setborderBottomTodo] = useState('3px solid #2B8CA7')
    const [borderBottomApprove,setborderBottomApprove] = useState('')
    const underlineApprove = () => {
        setUnderLineWidth('110px')
        setborderBottomApprove('3px solid #2B8CA7')
        setborderBottomTodo('')
    }
    const underlineTodo = () => {
        setUnderlineMargin('35px')
        setUnderLineWidth('61px')
        setborderBottomApprove('none')
        setborderBottomTodo('3px solid #2B8CA7')
      
    }
    return (
        <div>
            <div className={styles.TodoHeader}>

                <div className={styles.heading} >
                    <img src='/back-arrow-icon-blue.svg'></img>
                    <h1 className={styles.todoHeading} style={{ marginLeft: '12px',borderBottom:borderBottomTodo,paddingBottom:'6px' }} onMouseEnter={underlineTodo}>To Do</h1>
                    <h1 className={styles.approveHeading} style={{ position: 'relative', left: '20%',borderBottom:borderBottomApprove,paddingBottom:'6px' }} onMouseEnter={underlineApprove}>To Approve</h1>
                </div>
                {/* <div style={{ width: '80%',marginLeft:'10%',display:'flex',justifyContent:'center' }}>
                    <div className={styles.uderlinediv} style={{ marginLeft: underlineMargin, width: underlineWidth }}>

                    </div>
                </div> */}

            </div>

        </div>
    )
}

export default TodoHeader
