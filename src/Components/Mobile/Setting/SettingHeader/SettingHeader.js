import React from 'react';
import styles from './SettingHeader.module.css'
import GlobalStyles from '../../../../app/Globalstyle';

const SettingHeader = () => {
  return (
    <div>
        <GlobalStyles />
            <div className={styles.settingHeader}>
                <div className={styles.settingContent}> 
                <div className="grid grid-cols-2 w-32">
                    <div className="..."><img src='/back arrow icon.svg' alt='' width={30} height={30}></img> </div>
                    <div className="..."><h1>Setting</h1></div>
                </div>
                </div>

            </div>

        </div>
  )
}

export default SettingHeader
