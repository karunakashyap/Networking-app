import React, { useState } from 'react';
import styles from './TodoContent.module.css'
const TodoContent = ({plusDublicateIcon,invite,plusDublicate,Invite}) => {
    
    return (
        <div>
            <div className={styles.todoContent}>
                <ul>
                    <li>
                        <div className={styles.todoNotification}>
                            <img src='/profile-picture.svg' width={42} height={42} ></img>
                            <p>Take a Survey about Availibility of hemp Seeds</p>
                        </div>
                         <div className={styles.hideIcon}>
                            <img src={plusDublicateIcon} style={{float:'left',marginRight:'10px'}} onMouseEnter={plusDublicate}></img>
                            <img src={invite} onMouseEnter={Invite}></img>
                        </div> 
                    </li>
                    <li>
                        <div className={styles.todoNotification}>
                            <img src='/profile-picture.svg' width={42} height={42}></img>
                            <p>Take a video at sharanpur Chowk</p>
                        </div>
                        <div className={styles.hideIcon}>
                            <img src='/plus-duplicate.svg'  style={{float:'left',marginRight:'10px'}}></img>
                            <img src='/invite-white-icon.svg'></img>
                        </div>
                    </li>
                    <li>
                        <div className={styles.todoNotification}>
                            <img src='/profile-picture.svg' width={42} height={42}></img>
                            <p>Place an order of Hemp seeds oil</p>
                        </div>
                        <div className={styles.hideIcon}>
                            <img src='/plus-duplicate.svg'  style={{float:'left',marginRight:'10px'}}></img>
                            <img src='/invite-white-icon.svg'></img>
                        </div>
                    </li>
                    <li>
                        <div className={styles.todoNotification}>
                            <img src='/profile-picture.svg' width={42} height={42}></img>
                            <p>Distribute Hemp seeds oil at Rajpur Road, Dehradum</p>
                        </div>
                        <div className={styles.hideIcon}>
                            <img src='/plus-duplicate.svg'  style={{float:'left',marginRight:'10px'}}></img>
                            <img src='/invite-white-icon.svg'></img>
                        </div>
                    </li>
                    <li>
                        <div className={styles.todoNotification}>
                            <img src='/profile-picture.svg' width={42} height={42}></img>
                            <p>Make a Video a Bhauwala Chowk Dehradun</p>
                        </div>
                        <div className={styles.hideIcon}>
                            <img src='/plus-duplicate.svg'  style={{float:'left',marginRight:'10px'}}></img>
                            <img src='/invite-white-icon.svg'></img>
                        </div>
                    </li>
                    <li>
                        <div className={styles.todoNotification}>
                            <img src='/profile-picture.svg' width={42} height={42}></img>
                            <p>Take a video at Sharanpur Chowk</p>
                        </div>
                        <div className={styles.hideIcon}>
                            <img src='/plus-duplicate.svg'  style={{float:'left',marginRight:'10px'}}></img>
                            <img src='/invite-white-icon.svg'></img>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default TodoContent
