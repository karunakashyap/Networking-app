import React from 'react';
import styles from './SettingHeader.module.css'
import GlobalStyles from '../../../../app/Globalstyle';
import NotificationHeader from '../../Notification/NotificationHeader/NotificationHeader';

const SettingHeader = () => {
  return (
    <div>
        <GlobalStyles />
            <NotificationHeader text="setting"/>

        </div>
  )
}

export default SettingHeader
