import React, { useState } from 'react';
import styles from './GivenTags.module.css'
import GlobalStyles from '../../../../app/Globalstyle';
const GivenTags = ({ locationSrc, fillIconScr, changeSrc,
    changeFillSrc }) => {
    const [selectedTags, setSelectedTags] = useState([
        {
            "title": "Developer1",
            "isSelected": true,
        },
        {
            "title": "Developer2",
            "isSelected": true,
        },
        {
            "title": "Developer3",
            "isSelected": true,
        }
    ]);
    const removeTag = (index) => {
        const a = [...selectedTags];
        a.splice(index, 1)
        setSelectedTags(a)



    }
    const selectTagOption = (optionValue) => {

        const tags = [
            ...selectedTags,
            {
                title: optionValue.title,
                isSelected: true
            }
        ];
        setSelectedTags(tags)
    }
    return (
        <div>
            <GlobalStyles />
            <div className={styles.backArrow} >
                <img src='back-arrow-icon-blue.svg'></img>

            </div>
            <div className={styles.tags}>
                <div className={styles.locationTag} onMouseEnter={changeSrc}>
                    <img src={locationSrc}></img>
                </div>
                <div className={styles.fillTag}>
                    <img src={fillIconScr} onMouseEnter={changeFillSrc}></img>
                </div>

            </div>
        </div>
    )
}

export default GivenTags
