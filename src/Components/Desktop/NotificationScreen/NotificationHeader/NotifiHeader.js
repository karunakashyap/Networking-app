import React from 'react';
import styles from './NotifiHeader.module.css'
import GlobalStyles from '../../../../app/Globalstyle';

const NotifiHeader = () => {
    return (
        <div>
            <GlobalStyles />
            <div className={styles.notificationHeader}>
                <div className={styles.notifiContent}>
                    <div className="grid grid-cols-2 w-56">
                        <div className="..."><div style={{padding:'5px',width:'60px',backgroundColor:'#34675C'}}><img src='/bell-icon.svg' alt='' width={40} height={40}></img></div> </div>
                        <div className="..."><h1>Notification</h1></div>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default NotifiHeader;

