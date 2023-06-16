import React from 'react';
import Image from 'next/image';
import styles from './Assignable.module.css'

const Assignable = () => {
    return (
        <div style={{ marginLeft: '500px', marginTop: '60px' }} className={styles.agginableData}>
            <div>
                <h2>My Assignable Points</h2>
                <div className={styles.assignPoint}>

                    <p style={{ fontWeight: 'bold' }}>1000 Points<Image src='/dollar-icon2.svg' alt='' width={10} height={10}></Image></p>
                    <p style={{ color: '#053D38' }}>Assigned by</p>
                </div>
                <div className={styles.assignPointImage}>
                    <div className="grid grid-cols-5 w-72">
                        <div className="..."> <Image src='/video-icon.svg' alt='' width={18} height={18}></Image></div>
                        <div className="..."><Image src='/photo-icon.svg' alt='' width={18} height={18}></Image></div>
                        <div className="..."><Image src='/report-icon.svg' alt='' width={18} height={18}></Image></div>
                        <div className="..."><Image src='/report-icon.svg' alt='' width={18} height={18}></Image></div>
                        <div className="..." style={{ marginTop: '12px' }}><Image src='/forward-icon.svg' alt='' width={10} height={10}></Image></div>
                    </div>
                    <div className={styles.point}>


                        <div className="grid grid-cols-5 w-72">
                            <div className="...">100<Image src='/dollar-icon2.svg' alt='' width={10} height={10}></Image></div>
                            <div className="...">100<Image src='/dollar-icon2.svg' alt='' width={10} height={10}></Image></div>
                            <div className="...">100<Image src='/dollar-icon2.svg' alt='' width={10} height={10}></Image></div>
                            <div className="...">100<Image src='/dollar-icon2.svg' alt='' width={10} height={10}></Image></div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Assignable
