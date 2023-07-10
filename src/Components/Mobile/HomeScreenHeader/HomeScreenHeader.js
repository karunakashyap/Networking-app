import React, { useEffect, useState } from 'react';
import Avatar from '../../Common/Avatar/Avatar';
import styles from './HomeScreenHeader.module.css';

const HomeScreenHeader = (props) => {
  console.log(props)
  const [headerwidth, setHeaderwidth] = useState(0)
  const [headerHeight, setHeaderHeight] = useState(0)
  // const [profileHeight, setProfileHeight] = useState(0)
  // const [profileWidth, setProfileWidth] = useState(0)
  const [headerborderRadius, setHearderBorderRadius] = useState(0)

  useEffect(() => {

    const getMobilewidth = () => {
      const screenWidth = window.innerWidth - 40;
      const screenHeight = screenWidth * 0.4657;
      setHeaderwidth(screenWidth)
      setHeaderHeight(screenHeight)
      // setProfileHeight(screenHeight - 30)
      // setProfileWidth(screenWidth-30)
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

      <div style={{
        width: headerwidth, background: 'red', backgroundColor: 'rgba(52, 103, 92, 1)', height: headerHeight,
        top: '0px',
        right: '0px',
        position: 'fixed',
        display: 'flex',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderTopLeftRadius: headerborderRadius,
        borderBottomLeftRadius: headerborderRadius,
      }}>
        <div className={styles.avatarData}>
          <div className={styles.avatarDataImg}>
            <div className="grid grid-cols-2 gap-4">
              <div className="...">
                <Avatar />
              </div>
              <div className="...">
                <h2>Kapil <br></br> Sharma</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreenHeader;
