import React from 'react';
import styles from './Task.module.css';
import Image from 'next/image';
import { styled } from 'styled-components';

const Task = () => {
    return (
        <div>
            <div className={styles.allTask}>
                <h2>Task To Do</h2>
                <div className={styles.taskDoing}>
                    <p>Shoot a video at sharanpur chowk</p>
                    <p> Take a survey</p>
                    <p> Make a report</p>
                    <p> Take a video</p>
                    <p> Take a photo at Bhauwala Dehradun</p>
                    <p className={styles.viewAll}>View all</p>
                </div>

            </div>
            <div className={styles.approveTask}>
                <h2>Task To Approve</h2>
                <div className={styles.taskDoing}>
                    <p>Shoot a video at ISTB Dehradun</p>
                    <p> Take a survey</p>
                    <p> Place an order</p>
                    <p> Take a video at Dunga Dehradun</p>
                    <p> Make a report on availability of hemp seeds</p>
                    <p className={styles.viewAll}>View all</p>
                </div>

            </div>
            <div className={styles.assignPoint}>
                <h2>My Assignable Points</h2>
                <div className={styles.point}>

                    <p style={{fontWeight:'bold'}}>1000 Points<Image src='/dollar-icon2.svg' alt='' width={10} height={10}></Image></p>
                    <p style={{marginTop:'-10px',color:'#053D38;',fontFamily:'Inter'}}>Assigned by</p>
                </div>
                <div className={styles.assignPointImage}>
                     <Image src='/video-icon.svg' alt='' width={18} height={18}></Image> 
                     <p style={{marginTop:'-3px',marginLeft:'-5px'}}>100<Image src='/dollar-icon2.svg' alt='' width={10} height={10}></Image></p>
                    <Image style={{marginLeft:'55px',top:'-52px',position:'relative'}} src='/photo-icon.svg' alt='' width={18} height={18}></Image>
                    <p style={{marginTop:'-54px',marginLeft:'50px'}}>100<Image src='/dollar-icon2.svg' alt='' width={10} height={10}></Image></p>
                    <Image style={{top: '-55px',marginLeft:'115px',position:'relative'}} src='/report-icon.svg' alt='' width={18} height={18}></Image>
                    <p style={{marginTop: '-57px',marginLeft: '110px'}}>100<Image src='/dollar-icon2.svg' alt='' width={10} height={10}></Image></p>
                    <Image style={{top: '-55px',marginLeft:'175px',position:'relative'}} src='/report-icon.svg' alt='' width={18} height={18}></Image>
                    <p style={{marginTop: '-55px',marginLeft: '171px'}}>100<Image src='/dollar-icon2.svg' alt='' width={10} height={10}></Image></p>
                    <Image style={{position:'relative',marginLeft: '250px',top: '-55px'}} src='/forward-icon.svg' alt='' width={15} height={15}></Image>
 

                </div>

            </div>
            <div className={styles.marblePoint}>
                <h2>My Reedemable Points</h2>
                <div className={styles.point}>

                    <p style={{fontWeight:'bold'}}>1000 Points<Image src='/dollar-icon2.svg' alt='' width={10} height={10}></Image></p>
                    <p style={{marginTop:'-10px',color:'#053D38',fontFamily:'Inter'}}>Assigned by</p>
                </div>
                <div className={styles.marblePointImage}>
                     <Image src='/circle-placeholder.png' alt='' width={30} height={30}></Image> 
                     <p style={{marginTop:'-3px',marginLeft:'-5px'}}>100<Image src='/dollar-icon2.svg' alt='' width={10} height={10}></Image></p>
                    <Image style={{marginLeft:'55px',top:'-66px',position:'relative'}} src='/circle-placeholder.png' alt='' width={30} height={30}></Image>
                    <p style={{marginTop:'-67px',marginLeft:'52px'}}>100<Image src='/dollar-icon2.svg' alt='' width={10} height={10}></Image></p>
                    <Image style={{top: '-67px',marginLeft:'115px',position:'relative'}} src='/circle-placeholder.png' alt='' width={30} height={30}></Image>
                    <p style={{marginTop: '-67px',marginLeft: '110px'}}>100<Image src='/dollar-icon2.svg' alt='' width={10} height={10}></Image></p>
                    <Image style={{top: '-67px',marginLeft:'175px',position:'relative'}} src='/circle-placeholder.png' alt='' width={30} height={30}></Image>
                    <p style={{marginTop: '-67px',marginLeft: '171px'}}>100<Image src='/dollar-icon2.svg' alt='' width={10} height={10}></Image></p>
                    <Image style={{position:'relative',marginLeft: '250px',top: '-55px'}} src='/forward-icon.svg' alt='' width={15} height={15}></Image>
 

                </div>
                </div>
        </div>
    )
}

export default Task
