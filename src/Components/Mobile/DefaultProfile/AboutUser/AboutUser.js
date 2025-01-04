import React, { useState, useEffect } from 'react';
import styles from './AboutUser.module.css';
const AboutUser = ({ color, backcolor, tagBackground, onDivClick }) => {
    return (
        <div>
            <div className={styles.allTagsData}>
                <h1>Surbhi Kandwal</h1>
                <div className={styles.allTags} onClick={onDivClick} style={{backgroundColor:tagBackground}}>
                    <ul className={styles.tags}>
                        <li><a href="#" className={styles.tag} style={{ backgroundColor: backcolor, color: color }}>Marketing 1</a></li>
                        <li><a href="#" className={styles.tag} style={{ backgroundColor: backcolor, color: color }}>Design 1</a></li>
                        <li><a href="#" className={styles.tag} style={{ backgroundColor: backcolor, color: color }}>Tech 5</a></li>
                        <li><a href="#" className={styles.tag} style={{ backgroundColor: backcolor, color: color }}>Design 2</a></li>
                        <li><a href="#" className={styles.tag} style={{ backgroundColor: backcolor, color: color }}>IT 1</a></li>
                        <li><a href="#" className={styles.tag} style={{ backgroundColor: backcolor, color: color }}>Distribution 1</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutUser
