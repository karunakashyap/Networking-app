import React from 'react';
import styles from './Sidebar.module.css'
import Image from 'next/image';
const Sidebar = () => {
    console.log(styles)
    return (
        <div>
            <div className={styles.sidebar}>
                <h1 className={styles.sidebarHeading}>
                    My Network
                </h1>
                <div className={styles.allMenu}>
                    <div className={styles.sidebarMenu}>
                        <p>Notifications</p>
                        <Image src='/bell-icon.svg' width={15} height={15} alt=''></Image>
                    </div>
                    <div className={styles.sidebarMenu}>
                        <p>Create Task</p>
                        <Image src='/create icon (1).svg' width={18} height={18} alt=''></Image>

                    </div>
                    <div className={styles.sidebarMenu}>
                        <p>My Points</p>
                        <Image src='/dollar-icon3.svg' width={15} height={15} alt=''></Image>

                    </div>
                    <div className={styles.sidebarMenu}>
                        <p>My Tasks</p>
                        <Image src='/bell-icon.svg' width={15} height={15} alt=''></Image>

                    </div>
                    <div className={styles.sidebarMenu}>
                        <p>Members</p>
                        <Image src='/group-icon.svg' width={15} height={15} alt=''></Image>

                    </div>
                    <div className={styles.sidebarMenu}>
                        <p>Setting</p>
                        <Image src='/setting-icon.png' width={15} height={15} alt=''></Image>

                    </div>
                    <div className={styles.sidebarMenu}>
                        <p>Search</p>
                        <Image src='/search-icon.svg' width={15} height={15} alt=''></Image>

                    </div>
                    <div className={styles.sidebarMenu}>
                        <p>Invite</p>

                        <Image src='/invite-icon.png' width={18} height={18} styles={{ position: 'absolute', top: '565px', left: '228px' }} alt=''></Image>
                    </div>
                    <div style={{ backgroundColor: ' #F26800', width: '40px', height: '40px', marginLeft: '220px', marginTop: '-42px', borderRadius: '50px' }}>
                    </div>




                </div>



            </div>

        </div>




    )
}

export default Sidebar
