import React, { useState, useEffect } from 'react';
import styles from './NetworkScreen.module.css'
import Avatar from '../../Common/Avatar/Avatar';

const NetworkScreen = () => {

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.avatarData}>
                        <div className={styles.avatarDataImg}>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="...">
                                    <Avatar />
                                </div>
                                <div className="...">
                                    <h2>Kapil <br></br> Sharma</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default NetworkScreen
