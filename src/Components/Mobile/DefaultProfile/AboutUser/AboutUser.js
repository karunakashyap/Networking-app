import React, { useState } from 'react';
import styles from './AboutUser.module.css'
import LabelScreen from '../../LabelScreen/LabelScreen';

const AboutUser = ({ color, backcolor, tagBackground }) => {
    const callLabelScreen = () =>{
        <LabelScreen/>
    }
    return (
        <div>
            <div className={styles.allTagsData}>
                <h1>Surbhi Kandwal</h1>
                <div className={styles.UserInformation} style={{ height: '140px', flexWrap: 'wrap', paddingRight: '336px', backgroundColor: tagBackground, marginTop: '10px' }} onClick={callLabelScreen}>
                    <div className={styles.allTags} >
                        <ul>
                            <li style={{ backgroundColor: backcolor, color: color }}>Marketing 1</li>
                            <li style={{ backgroundColor: backcolor, color: color }}>Desing 4</li>
                            <li style={{ backgroundColor: backcolor, color: color }}>Tech 5</li>
                            <li style={{ backgroundColor: backcolor, color: color }}>Desing 2</li>
                            <li style={{ backgroundColor: backcolor, color: color }}>IT 1</li>
                            <li style={{ backgroundColor: backcolor, color: color }}>Distribution 1</li>
                        </ul>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default AboutUser
