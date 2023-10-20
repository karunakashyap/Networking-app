import React, { useState } from 'react';
import styles from './GivenTags.module.css'
import GlobalStyles from '../../../../app/Globalstyle';
import ClearAll from '../ClearAll/ClearAll';
import Apply from '../Apply/Apply';
const GivenTags = ({ showButton, applybuttonBackground, clearButtonBackground, locationSrc, fillIconScr, changeSrc,
    changeFillSrc, changeColor, changeApplyButtonColor }) => {
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
            {showButton ?
                <div style={{
                    position: 'fixed', left: '50%', transform: 'translateX(-50%)', bottom: '10px', width: '80vw', display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <ClearAll bgcolor={clearButtonBackground} onclickMethod={changeColor} />
                    <Apply bgcolor={applybuttonBackground} onclickMethodApply={changeApplyButtonColor} />
                </div> : ''
            }
        </div>
    )
}

export default GivenTags
