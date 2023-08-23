import React, { useEffect, useState } from 'react';
import Avatar from '../../../Common/Avatar/Avatar';
import styles from './HomeScreenHeader.module.css';

const HomeScreenHeader = (props) => {
  const [homeHeader, setMange] = useState(styles.homeHeader)
  const [headerwidth, setHeaderwidth] = useState(0)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [headerborderRadius, setHearderBorderRadius] = useState(0)
  const [hideease,setHideease]=useState(styles.hideease)
  useEffect(() => {
    const getMobilewidth = () => {
      const screenWidth = window.innerWidth - 40;
      const screenHeight = screenWidth * 0.4657;
      setHeaderwidth(screenWidth)
      setHeaderHeight(screenHeight)
      setHearderBorderRadius(screenHeight / 2)
    }
    window.addEventListener('resize', getMobilewidth);
    getMobilewidth();
    return () => {
      window.addEventListener('resize', getMobilewidth)
    }
  }, []);
 
 
  return (
    <div >
      
      <div className={styles.headerContent} >
        <div className={homeHeader} style={{
          width: headerwidth, height: headerHeight,

          borderTopLeftRadius: headerborderRadius,
          borderBottomLeftRadius: headerborderRadius,
        }} >
          <div className={styles.avatarData}>
            <div className={styles.avatarDataImg}>
              <div className="grid grid-cols-2 gap-4">
                <div className="...">
                  <Avatar />
                </div>
                <div className="..." onClick={props.onClick}>
                  <h2>Kapil <br></br> Sharma</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default HomeScreenHeader;
