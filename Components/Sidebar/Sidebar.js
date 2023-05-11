import React from 'react';
import styles from './Sidebar.module.css'
import Image from 'next/image';
import Globalstyle from './globalstyle';
const Sidebar = () => {
    return (
        <div>
            <Globalstyle>
            <div className={styles.sidebar}>
                <p className={styles.sidebarHeading}>
                    My Network
                </p>
                <div className={styles.allMenu}>
                    <div className={styles.sidebarMenu}>
                        <p>Notifications</p>
                        <Image src='/bell-icon.svg' width={28} height={15}></Image>
                    </div>
                    <div className={styles.sidebarMenu}>
                        <p>Create Task</p>
                        <Image src='/create-icon.svg' width={28} height={15}></Image>

                    </div>
                    <div className={styles.sidebarMenu}>
                        <p>My Points</p>
                        <Image src='/dollar-icon1.svg' width={28} height={15}></Image>

                    </div>
                    <div className={styles.sidebarMenu}>
                        <p>My Tasks</p>
                        <Image src='/bell-icon.svg' width={28} height={15}></Image>

                    </div>
                    <div className={styles.sidebarMenu}>
                        <p>Members</p>
                        <Image src='/group-icon.svg' width={28} height={15}></Image>

                    </div>
                    <div className={styles.sidebarMenu}>
                        <p>Setting</p>
                        <Image src='/setting.svg' width={28} height={15}></Image>

                    </div>
                    <div className={styles.sidebarMenu}>
                        <p>Search</p>
                        <Image src='/search-icon.svg' width={28} height={15}></Image>

                    </div>
                    <div className={styles.sidebarMenu}>
                        <p>Invite</p>

                        <Image src='/invite-icon.svg' width={28} height={15} styles={{ position: 'absolute', top: '565px', left: '228px' }}></Image>
                        <div style={{ backgroundColor: ' #F26800', width: '40px', height: '40px', marginLeft: '166px', marginTop: '-60px', borderRadius: '50px' }}>
                        </div>



                    </div>
                </div>



            </div>
            </Globalstyle>
        </div>



    )
}

export default Sidebar
