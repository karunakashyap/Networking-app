import React from 'react';
import styles from './Point_Task.module.css';
import Image from 'next/image';

const Point_task = () => {
    return (
        <div className={styles.pointTask}>
            <div>
                <h2>My Points</h2>
                <div className={styles.point}>

                    <p style={{ fontWeight: 'bold' }}>1000 Points<Image src='/dollar-icon2.svg' alt='' width={10} height={10}></Image></p>
                    <p style={{ color: '#053D38' }}>Assigned by</p>
                </div>
                <div className={styles.marblePointImage}>
                    <div className="grid grid-cols-5 w-80">
                        <div className="..."> <Image src='/circle-placeholder.png' alt='' width={25} height={25}></Image></div>
                        <div className="..."><Image src='/circle-placeholder.png' alt='' width={25} height={25}></Image></div>
                        <div className="..."><Image src='/circle-placeholder.png' alt='' width={25} height={25}></Image></div>
                        <div className="..."><Image src='/circle-placeholder.png' alt='' width={25} height={25}></Image></div>
                        <div className="..." style={{ marginTop: '12px' }}><Image src='/forward-icon.svg' alt='' width={10} height={10}></Image></div>
                    </div>
                    <div className={styles.allpoints}>
                        <div className="grid grid-cols-5 w-72 point">
                            <div className="...">Surbhi<br></br>100<Image src='/dollar-icon2.svg' alt='' width={10} height={10}></Image></div>
                            <div className="...">Surbhi<br></br>100<Image src='/dollar-icon2.svg' alt='' width={10} height={10}></Image></div>
                            <div className="..." style={{ marginLeft: '7px' }}>Surbhi<br></br>100<Image src='/dollar-icon2.svg' alt='' width={10} height={10}></Image></div>
                            <div className="..." style={{ marginLeft: '12px' }}>Surbhi<br></br>100<Image src='/dollar-icon2.svg' alt='' width={10} height={10}></Image></div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Point_task